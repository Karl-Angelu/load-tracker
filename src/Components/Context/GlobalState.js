import { createContext, useReducer,useEffect } from "react";
import AppReducer from './AppReducer'
import { firestore } from '../../firebase'
const initialState = {
    Total_Receivables:0,
    GCash_Amount:0,
    Cash_In_Hand:0,
    Receivables:[],
    ActiveReceivable:{},
    History:[{}]
};


export const GlobalContext = createContext(initialState);



export const GlobalStateProvider = ({children})=>{

    const [state,dispatch] = useReducer(AppReducer,initialState);

    useEffect(() => {
        // Receivables
        firestore.collection("Datastore")
        .doc("Receivables")
        .collection("Receivables")
        .orderBy("date","desc")
        .onSnapshot(querySnapshot => {
            const payload = []
            querySnapshot.forEach(doc => {
                const data = {
                    id:doc.id,
                    ...doc.data()
                }
                payload.push(data)
            })
            dispatch({type:'INIT_STATE',payload})
        })
        // Totals
        firestore.collection("Datastore").doc("Totals").onSnapshot(querySnapshot => {
            dispatch({type:'INIT_TOTALS',payload:querySnapshot.data()})
        })
        // History
        firestore.collection("Datastore")
        .doc("Receivables")
        .collection("History")
        .orderBy("date","desc")
        .onSnapshot(querySnapshot => {
            const payload = []
            querySnapshot.forEach(doc => {
                const data = {
                    id:doc.id,
                    ...doc.data()
                }
                payload.push(data)
        })
        dispatch({type:'INIT_HISTORY',payload})
    })

    }, [])


    const addNewDebtor = (payload) => {
        firestore.collection("Datastore")
        .doc("Receivables")
        .collection("Receivables")
        .doc()
        .set({
            name:payload.name,
            amount:payload.amount,
            date:new Date()
        })
        .then(()=>{
            firestore.collection("Datastore")
            .doc("Receivables")
            .collection("History")
            .doc()
            .set({
                transaction:payload.name + " was loaded with "+payload.amount,
                name:payload.name,
                amount:payload.amount,
                date:new Date()
            })
            console.log("Data added")
        })
      
    }
    const payfull = (payload) => {
        firestore.collection("Datastore")
        .doc("Receivables")
        .collection("Receivables")
        .doc(payload.id)
        .delete()
        .then(
            firestore.collection("Datastore")
            .doc("Receivables")
            .collection("History")
            .doc()
            .set({
                transaction:payload.name + " Paid " + payload.amount,
                name:payload.name,
                amount:payload.amount,
                date:new Date()
            })
        )           
    }
    const setActiveRes = (payload) => {
        dispatch({
            type:"SET_ACTIVE_RES",
            payload
        })
    }
    const setActiveTotal = (payload) => {
        dispatch({
            type:"SET_ACTIVE_TOTAL",
            payload
        })
    }
    const setNewAmount = (payload,type,amount) => {
        firestore.collection("Datastore")
        .doc("Receivables")
        .collection("Receivables")
        .doc(payload.id)
        .set({
            amount:payload.amount
        },{merge:true})
        .then(
            firestore.collection("Datastore")
            .doc("Receivables")
            .collection("History")
            .doc()
            .set({
                transaction:payload.name +" "+ type +" "+ amount + " New Total " + payload.amount,
                amount:payload.amount,
                name:payload.name
            },{merge:true})
        )
     
    }
    const setNewNameAndAmount = (payload) => {
        firestore.collection("Datastore")
        .doc("Receivables")
        .collection("Receivables")
        .doc(payload.id)
        .set({
            name:payload.name,
            amount:payload.amount,
            date:new Date()
        })
        .then(
            firestore.collection("Datastore")
            .doc("Receivables")
            .collection("History")
            .doc(payload.id)
            .set({
                transaction: payload.oldName + " with " + payload.oldAmount + " is edited into " +payload.name + " - " + payload.amount,
                amount:payload.amount,
                name:payload.name,
                date:new Date()
            })
        )
     
    }
    const setGCash = (payload,history = true) => {
        firestore.collection("Datastore")
        .doc("Totals")
        .set({
            GCash_Amount:payload
        },{merge:true})
        .then(
            history &&
            firestore.collection("Datastore")
            .doc("Receivables")
            .collection("History")
            .doc(payload.id)
            .set({
                transaction:"Edited GCash Amount to "+payload,
                amount:payload,
                date:new Date()
            })
        )
       
    }
    const setCashInHand = (payload, history=true) => {
        firestore.collection("Datastore")
        .doc("Totals")
        .set({
            Cash_In_Hand:payload
        },{merge:true})
        .then(
            history && 
            firestore.collection("Datastore")
            .doc("Receivables")
            .collection("History")
            .doc(payload.id)
            .set({
                transaction:"Edited Cash in Hand to " + payload,
                amount:payload,
                date:new Date()
            })
        )
      
    }
    const setTotalReceivables = (payload) => {
        firestore.collection("Datastore")
        .doc("Totals")
        .set({
            Total_Receivables:payload
        },{merge:true})
        

    }

    const value = {
            state,
            addNewDebtor,
            payfull,
            setActiveRes,
            setActiveTotal,
            setNewAmount,
            setNewNameAndAmount,
            setGCash,
            setCashInHand,
            setTotalReceivables
    }
    return(
        <GlobalContext.Provider value = {value}>
            {children}
        </GlobalContext.Provider>
    )
}

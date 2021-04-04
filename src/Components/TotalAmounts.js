
import EditCashInHand from "./modals/EditCashInHand"
import EditGCash from "./modals/EditGCash"
import { useContext, useEffect } from 'react'
import { GlobalContext } from "./Context/GlobalState"

const TotalAmounts = () => {
    
    const {state, setActiveTotal, setTotalReceivables} = useContext(GlobalContext)
   
    return ( 
        <div className="totalAmounts card-panel container">
            <div className="row">
                <div className="col s12 l3">
                    <div className="row amount-box">
                        <i className="material-icons col l4">attach_money</i>
                        <div className="align-right col l1">{state.Total_Receivables}</div>
                    </div>
                    <div className="row">
                        <h6>Receivables</h6>
                    </div>
                </div>
                <div className="col s12 l3 offset-l1">
                    <div className="row amount-box">
                        <i className="material-icons col l4">attach_money</i>
                        <div className="align-right col l1">{state.GCash_Amount}</div>
                    </div>
                    <div className="row">
                        <h6>Load in GCash</h6>
                        <button onClick={()=>setActiveTotal(state.GCash_Amount)} className="btn-floating transparent z-depth-0 wave-effect wave-light modal-trigger" data-target="EditGCash"><i className="material-icons orange-text">mode_edit</i></button>
                    </div>
                </div>
                <div className="col s12 l3 offset-l1">
                    <div className="row amount-box">
                        <i className="material-icons col l5">attach_money</i>
                        <div className="align-right col l1">{state.Cash_In_Hand}</div>
                    </div>
                    <div className="row">
                        <h6>Cash in Hand</h6>
                        <button onClick={()=>setActiveTotal(state.Cash_In_Hand)} className="btn-floating transparent z-depth-0 wave-effect wave-light modal-trigger" data-target="EditCashInHand"><i className="material-icons orange-text">mode_edit</i></button>
                    </div>
                </div>
            </div>
            <EditGCash />
            <EditCashInHand  />
        </div>
     );
}
 
export default TotalAmounts;
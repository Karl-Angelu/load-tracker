export default (state,action) =>{
    let elIndex,newReceivables
    switch(action.type){
        case 'INIT_STATE':
            return {
                ...state,
                Receivables:action.payload
            }
        case 'INIT_TOTALS':
            return {
                ...state,
                GCash_Amount:action.payload.GCash_Amount,
                Cash_In_Hand:action.payload.Cash_In_Hand,
                Total_Receivables:action.payload.Total_Receivables
            }
        case 'INIT_HISTORY':
            return {
                ...state,
                History:action.payload
            }
        // case 'PAY_FULL':
        //     return{
        //         ...state
        //     }
        // case 'ADD_NEW_DEBTOR':
        //     return{
        //         ...state,
        //         Receivables:[...state.Receivables,action.payload]
        //     }
        case 'SET_ACTIVE_RES':
            return{
                ...state,
                ActiveReceivable:action.payload
            }
        case 'SET_ACTIVE_TOTAL':
            return{
                ...state,
                TotalAmountActive:action.payload
            }
        // case 'SET_GCASH':
        //     return{
        //         ...state,
        //         GCash_Amount:action.payload
        //     }
        case 'SET_CASH_IN_HAND':
            return{
                ...state,
                Cash_In_Hand:action.payload
            }
        case 'SET_NEW_AMOUNT':
            elIndex = state.Receivables.findIndex(element => element.id === action.payload.id )
            newReceivables = [...state.Receivables]
            newReceivables[elIndex] = {...newReceivables[elIndex],amount:action.payload.amount}
            return{
                ...state,
                Receivables:newReceivables
            }
        // case 'SET_NEW_NAME_AND_AMOUNT':
        //     elIndex = state.Receivables.findIndex(element => element.id === action.payload.id )
        //     newReceivables = [...state.Receivables]
        //     newReceivables[elIndex] = {...newReceivables[elIndex],amount:action.payload.amount,name:action.payload.name}
        //     return{
        //         ...state,
        //         Receivables:newReceivables
        //     }
        default:
            return state
    }
}
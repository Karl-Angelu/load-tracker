import $ from 'jquery'
import { useState, useEffect,useContext } from 'react'
import { GlobalContext} from '../Context/GlobalState'
    
const PayModal = () => {

    const {state,setNewAmount,payfull, setCashInHand, setTotalReceivables} = useContext(GlobalContext);
    const Res = state.ActiveReceivable;
    const [ amountToPay, setAmountToPay] = useState()
    const [amount, setAmount ] = useState()
    

    useEffect(() => {
        $('#name_label').addClass('active')
        $('#amount_res_label').addClass('active')
    })

    const handleChange = (e) => {
        setAmount(e.target.value)
        const remBal = parseInt(Res.amount) - parseInt(e.target.value)
        $('#rem_bal').val(remBal)
        setAmountToPay(remBal)
        $('#rem_bal_label').addClass('active')

        // restrict closing of modal if input is empty
        if($('#amount_pay').val()){
            $('#paymodal-pay-button').addClass('modal-close')
        }else{
            $('#paymodal-pay-button').removeClass('modal-close')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            id:Res.id,
            amount:amountToPay,
            name:Res.name
        }
        if(amountToPay <= 0){
            payfull(Res.id)
        }else{  
            // Update State
            setNewAmount(payload,"Paid",amount)
        }
            setCashInHand(state.Cash_In_Hand + parseInt(amount),false)
            setTotalReceivables(state.Total_Receivables - parseInt(amount))
        
            reset()
    }
    const reset = () => {
        // Reset
        $('#amount_pay').val(null)
        $('#rem_bal').val(null)
        $('#amount_pay_label').removeClass('active')
        $('#rem_bal_label').removeClass('active')
    }

    return ( 
        <div id="PayModal" className="modal">
            <div className="modal-content">
                <h5>Pay Form</h5>
                <form action="" onSubmit={ handleSubmit } className="container">
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input type="text" id="name" defaultValue={Res.name} disabled />
                        <label id="name_label" htmlFor="name">Name</label>
                    </div>
                    
                    <div className="input-field">
                        <i className="material-icons prefix">attach_money</i>
                        <input type="number" id="res_amount" defaultValue={Res.amount} disabled />
                        <label id="amount_res_label" htmlFor="res_amount">Amount to Pay</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">attach_money</i>
                        <input onChange={ handleChange } className="validate" type="number" id="amount_pay" required />
                        <label id="amount_pay_label" htmlFor="amount_pay">Amount to Pay</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">attach_money</i>
                        <input className="validate" type="number" id="rem_bal" disabled/>
                        <label id="rem_bal_label" htmlFor="rem_bal">Remaining Balance</label>
                    </div>
                    <div className="row">
                        <button type="button" onClick={()=>reset()}className="btn left red col l2 offset-l3 modal-close">
                            <i className="material-icons">close</i>
                        </button>
                        <button id="paymodal-pay-button" className="btn orange col l2 offset-l1">Pay</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default PayModal;
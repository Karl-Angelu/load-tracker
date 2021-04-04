import { useContext, useState} from "react";
import { GlobalContext } from "../Context/GlobalState";
import $ from 'jquery'

const AddModal = () => {
    const [amount, setAmount] = useState();
    const [addOn, setAddOn] = useState(2);
    const {state, setNewAmount, setGCash, setTotalReceivables} = useContext(GlobalContext)
    const person = state.ActiveReceivable
    
    
   const handleAmount = (e) => {
   
        setAmount(e.target.value)
        console.log(amount)
        if(amount){
            $('#addmodal-add-button').addClass('modal-close')
        }
        
   }
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            id:person.id,
            amount:parseInt(person.amount) + parseInt(amount) + parseInt(addOn),
            name:person.name
        }

        setNewAmount(payload,"was loaded",amount)
        setGCash(state.GCash_Amount - parseInt(amount),false)
        setTotalReceivables(state.Total_Receivables + parseInt(amount) + parseInt(addOn))

        //reset
        setAmount();
        $('#addmodal_add_amount').val(null)
        $('#addmodal-add-button').removeClass('modal-close')
    }

    return ( 
        <div id="AddModal" className="modal">
            <div className="modal-content">
                <h5>Add Form</h5>
                <form onSubmit={ handleSubmit } className="container">
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input type="text" required defaultValue={person.name} disabled/>
                    </div>
                    <div className="row">
                        <div className="input-field col l8">
                            <i className="material-icons prefix">attach_money</i>
                            <input type="number" required onChange={handleAmount} id="addmodal_add_amount" />
                            <label id="addmodal_amountLabel" htmlFor="addmodal_add_amount">Amount</label>
                        </div>
                        <div className="input-field col l4">
                            <i className="material-icons prefix">add</i>
                            <input className="validate" onChange={e => setAddOn(e.target.value)} defaultValue={2} type="number" id="addmodal-addOn" />
                            <label className="active" htmlFor="addmodal-addOn">Amount</label>
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" className="btn left red col l2 offset-l3 modal-close">
                            <i className="material-icons">close</i>
                        </button>
                        <button id="addmodal-add-button" className="btn orange col l2 offset-l1">Add</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AddModal;
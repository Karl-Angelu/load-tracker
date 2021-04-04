import { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import $ from 'jquery'
const AddNewModal = () => {

    const {state,setGCash,addNewDebtor, setTotalReceivables} = useContext(GlobalContext)

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [addOn, setAddOn] = useState(2);

    const handleAmount = (e) => {
        setAmount(parseInt(e.target.value))
        if(name && amount){
            $('#modal-add-button').addClass('modal-close')
        }
    }
    const handleName = (e) => {
        setName(e.target.value)
        if(name && amount){
            $('#modal-add-button').addClass('modal-close')
        }
    }
    const handleAddOn = (e) =>{
        setAddOn(parseInt(e.target.value))
    }
   
    const handleSubmit = (e) => {
        e.preventDefault()
        let newDebtor = {
            name,
            amount:amount + addOn
        }
        addNewDebtor(newDebtor)
        setGCash(parseInt(state.GCash_Amount - amount),false)
        setTotalReceivables(parseInt(state.Total_Receivables + newDebtor.amount))

        // Reset Everything
        handleClose();
        $('#modal-add-button').removeClass('modal-close')
    }
    const handleClose = () => {
         // Reset Everything
         $('#name').val(null)
         $('#amount').val(null)
         $('#addOn').val(2)
         $('#amountLabel').removeClass('active')
         $('#nameLabel').removeClass('active')
         setName('');
         setAmount(0);
         setAddOn(2);
    }

       
    
    return ( 
        <div id="AddNewModal" className="modal">
            <div className="modal-content">
                <h5>Add New Receivable</h5>
                <form onSubmit={ handleSubmit } className="container">
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                        <input type="text" required onChange={handleName} id="name" />
                        <label id="nameLabel" htmlFor="name">Name</label>
                    </div>
                    <div className="row">
                        <div className="input-field col l8">
                            <i className="material-icons prefix">attach_money</i>
                            <input type="number" required onChange={handleAmount} id="amount" />
                            <label id="amountLabel" htmlFor="amount">Amount</label>
                        </div>
                        <div className="input-field col l4">
                            <i className="material-icons prefix">add</i>
                            <input className="validate" onChange={handleAddOn} defaultValue={2} type="number" id="addOn" />
                            <label className="active" htmlFor="addOn">Amount</label>
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" className="btn left red col l2 offset-l3 modal-close">
                            <i className="material-icons">close</i>
                        </button>
                        <button id="modal-add-button" className="btn orange col l2 offset-l1">Add</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AddNewModal;
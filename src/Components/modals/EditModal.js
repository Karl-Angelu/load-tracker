import { useState, useContext,useEffect} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import $ from 'jquery'

const EditModal = () => {
    
    const { state, setNewNameAndAmount } = useContext(GlobalContext)
    const person = state.ActiveReceivable
    const [name, setName] = useState()
    const [amount, setAmount ] = useState()
    
    useEffect(() => {
       $("#editmodal-amount-label").addClass('active')
      
    })
    
    const handleClickEditName = () => {
       $('#editmodal_name').removeAttr('disabled')
    }

    const handleClickEditAmount = () => {
       $('#editmodal_res_amount').removeAttr('disabled')
    }

    const reset = () => {
        setName()
        setAmount()
       $('#editmodal_name').prop('disabled',true)
       $('#editmodal_res_amount').prop('disabled',true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const oldName = person.name
        const oldAmount = person.amount
        let payloadName,payloadAmount
        
        !name ? payloadName = person.name : payloadName = name
        !amount ? payloadAmount = person.amount : payloadAmount = amount
        
        const payload = {
            id:person.id,
            name:payloadName,
            amount:payloadAmount,
            oldName,
            oldAmount
        }
        setNewNameAndAmount(payload)
        reset()
    }
    const handleClose = () => {
        reset()
    }
    return ( 
        <div id="EditModal" className="modal">
            <div className="modal-content">
                <h5>Edit Form</h5>
                <form action="" onSubmit={ handleSubmit } className="container">
                    <div className="row">
                        <div className="input-field col l8">
                            <i className="material-icons prefix">person</i>
                            <input type="text" onChange={e => setName(e.target.value)} id="editmodal_name" defaultValue={person.name} disabled/>
                        </div>
                        <div className="input-field col l4">
                            <button type="button" onClick={ handleClickEditName } className="btn orange"><i className="material-icons ">edit</i></button>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col l8">
                            <i className="material-icons prefix">attach_money</i>
                            <input type="number" onChange={e => setAmount(e.target.value)} id="editmodal_res_amount" defaultValue={person.amount} disabled/>
                            <label id="editmodal-amount-label" htmlFor="editmodal_res_amount" className="active">Receivable Amount</label>
                        </div>
                        <div className="input-field col l4">
                            <button type="button" onClick={ handleClickEditAmount } className="btn orange"><i className="material-icons ">edit</i></button>
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" onClick={handleClose} className="btn left red col l2 offset-l3  modal-close">
                            <i className="material-icons">close</i>
                        </button>
                        <button className="btn orange col l2 offset-l1 modal-close">Edit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default EditModal;
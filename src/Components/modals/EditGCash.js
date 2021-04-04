import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import $ from 'jquery'

const EditGCash = () => {

    const { state, setGCash } = useContext(GlobalContext)
    const [gcash,setGCashAmount] = useState(state.TotalAmountActive)
    
    useEffect(() => {
        $('#gcashAmount-label').addClass('active')
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
       setGCash(parseInt(gcash))
    }
    const handleCancelButton = () => {
        // const input = document.getElementById('gcashAmount');
        // input.value = amount
    }
    return ( 
        <div id="EditGCash" className="modal">
            <div className="modal-content">
                <h5>Edit GCash Amount</h5>
                <form action="" onSubmit={ handleSubmit } className="container">
                    <div className="row">
                        <div className="input-field col l6 offset-l3">
                            <i className="material-icons prefix">attach_money</i>
                            <input type="number" id="gcashAmount" onChange={(e)=> setGCashAmount(e.target.value)} defaultValue={state.TotalAmountActive}/>
                            <label htmlFor="gcashAmount" id="gcashAmount-label" className="active">GCash Amount</label>
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" onClick={ handleCancelButton } className="btn left red col l2 offset-l3 modal-close">
                            <i className="material-icons">close</i>
                        </button>
                        <button className="btn orange modal-close scol l2 offset-l1">Update</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default EditGCash;
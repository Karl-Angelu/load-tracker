import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import $ from 'jquery'

const EditCashInHand = () => {

    const [cash, setCashAmount] = useState()
    const { state, setCashInHand } = useContext(GlobalContext)

    useEffect(() => {
      $('#cash-in-hand-label').addClass('active')
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setCashInHand(parseInt(cash))
      
    }
    const handleCancelButton = () => {
        // const input = document.getElementById('cashInHand');
        // input.value = amount
    }
    return ( 
        <div id="EditCashInHand" className="modal">
            <div className="modal-content">
                <h5>Edit Cash In Hand</h5>
                <form action="" onSubmit={ handleSubmit} className="container">
                    <div className="row">
                        <div className="input-field col l6 offset-l3">
                            <i className="material-icons prefix">attach_money</i>
                            <input type="number" onChange={ e => setCashAmount(e.target.value) } id="cashInHand" defaultValue={state.TotalAmountActive} />
                            <label htmlFor="cashInHand" id="cash-in-hand-label" className="active">Cash In Hand</label>
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" onClick={ handleCancelButton }className="btn left red col l2 offset-l3 modal-close">
                            <i className="material-icons">close</i>
                        </button>
                        <button className="btn orange modal-close col l3 offset-l1">Update</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default EditCashInHand;
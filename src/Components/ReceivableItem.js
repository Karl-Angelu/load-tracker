import { useContext } from 'react';
import {GlobalContext} from './Context/GlobalState'



const ReceivableItem = ({data}) => {
    const { state,payfull, setActiveRes, setCashInHand, setTotalReceivables } = useContext(GlobalContext)
    const handleOnClickAction= () =>{
        setActiveRes(data)
    }
    const handlePayFull = (payload) =>{
        setCashInHand(parseInt(state.Cash_In_Hand) + parseInt(data.amount),false)
        setTotalReceivables(state.Total_Receivables - parseInt(data.amount),false)
        payfull(payload)
    }

    return ( 
        <>
            <div className="col s3 l3">
               {data.name}
            </div>
            <div className="col s3 l3">
                {data.amount}
            </div>
            <div className="col s3 l6">
                <div className="row">
                    <button onClick={ () => handlePayFull(data) } className="btn orange col l2 offset-l1 waves-effect waves-light">Pay</button>
                    <button onClick={ handleOnClickAction } className="btn orange col l2 offset-l1 waves-effect waves-light modal-trigger" data-target="PayModal"><i className="material-icons white-text">payment</i></button>
                    <button onClick={ handleOnClickAction } className="btn orange col l2 offset-l1 waves-effect waves-light modal-trigger" data-target="AddModal"><i className="material-icons white-text">add</i></button>
                    <button onClick={ handleOnClickAction } className="btn orange col l2 offset-l1 waves-effect waves-light modal-trigger" data-target="EditModal"><i className="material-icons white-text">edit</i></button>
                </div>
            </div>
        </>
     );
}
 
export default ReceivableItem;
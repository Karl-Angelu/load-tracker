import { useContext } from 'react'
import ReceivableItem from './ReceivableItem'
import AddNewModal from './modals/AddNewModal'
import EditModal from './modals/EditModal'
import PayModal from './modals/PayModal'
import {GlobalContext} from './Context/GlobalState'
import AddModal from './modals/AddModal'

const Receivables = () => {
    const {state} = useContext(GlobalContext)
    const receivables = state.Receivables

    // const content = (receivables)=>{
    //     if(receivables.length){
    //         receivables.map(receivable=>{
    //             return(
    //                 <ReceivableItem data={receivable} key={receivable.id} />
    //             )
    //         })
    //     }else{
    //         return(
    //             <h6>No Records Found</h6>
    //         )
    //     }
    // }

    if(receivables.length){
    return ( 
        <>
            <div className="receivables card-panel container">
                <div className="header">
                    <h5 className="center">Receivables</h5>
                    <button className="waves-effect waves-light modal-trigger btn-add btn-floating right orange" data-target="AddNewModal"><i className="material-icons">add</i></button>
                    
                </div>
                <div className="content">
                    <div className="table t-header row">
                        <div className="col s3 l3">
                                Name
                        </div>
                        <div className="col s3 l3">
                                Amount
                        </div>
                        <div className="col s3 l6">
                                Action
                        </div>
                    </div>
                    <div className="table row">
                        {
                            // content(receivables)
                        receivables.map(receivable=>{
                            return(
                                <ReceivableItem data={receivable} key={receivable.id} />
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            {/* Modals */}
            <AddNewModal />
            <PayModal  />
            <AddModal />
            <EditModal />
        </>
     );
    }else{
        return(

        <>
            <div className="receivables card-panel container">
                <div className="header">
                    <h5 className="center">Receivables</h5>
                    <button className="waves-effect waves-light modal-trigger btn-add btn-floating right orange" data-target="AddNewModal"><i className="material-icons">add</i></button>
                    
                </div>
                <div className="content">
                    <div className="table t-header row">
                        <div className="col s3 l3">
                                Name
                        </div>
                        <div className="col s3 l3">
                                Amount
                        </div>
                        <div className="col s3 l6">
                                Action
                        </div>
                    </div>
                    <div className="table row">
                      <h6>No Records Found</h6>
                    </div>
                </div>
            </div>
             {/* Modals */}
             <AddNewModal />
             <PayModal  />
             <AddModal />
             <EditModal />
        </>
        )
     }
}
 
export default Receivables;
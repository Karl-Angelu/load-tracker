import { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';
import HistoryItem from './HistoryItem'
const History = () => {
    const {state} = useContext(GlobalContext)
    return ( 
        <>
            <div className="receivables card-panel container">
                
                <h5 className="center">History</h5>

                <div className="content">
                    <div className="table t-header row">
                        <div className="col s6 l5">
                                Transaction
                        </div>
                        <div className="col s6 l5 offset-l2">
                                Date
                        </div>
                    </div>
                    <div className="table row ">
                       {
                            state.History.map(history => {
                                return (
                                    <HistoryItem data= {history}/>
                                )
                            })  
                       } 
                       
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default History;
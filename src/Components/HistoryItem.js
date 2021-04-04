import moment from 'moment'
const HistoryItem = ({data}) => {
    return ( 
        <>
            <div className="col s6 l5">
                {data.transaction}
            </div>
            <div className="col s6 l5 offset-l2">
                {data.date && moment((data.date).toDate()).calendar()}
            </div>
        </>
     );
}
 
export default HistoryItem;
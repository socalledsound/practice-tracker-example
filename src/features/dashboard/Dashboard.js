import React from 'react'
import { useSelector } from 'react-redux'
import { selectPieces, selectRepertoireLists } from './dashboardSlice'
import RepertoireItem from './RepertoireItem/RepertoireItem'
import AddNewRepertoireListButton from '../../components/AddButton/AddButton'
import Piece from './Piece/Piece'
import styles from './Dashboard.module.css'
const Dashboard = () => {

    const repertoireLists = useSelector(selectRepertoireLists)
    const pieces = useSelector(selectPieces)
    console.log(repertoireLists)
    return ( 
        <div>
            <div className={styles.repertoireContainer}>
                {
                    repertoireLists &&
                    repertoireLists.map( (listItem, idx) => <RepertoireItem key={`rep-list-${idx}`} listItem={listItem}/>)
                }
                <AddNewRepertoireListButton />
            </div>
            <div>
                {
                    pieces.map((piece, idx) => <Piece key={`piece-${idx}`} piece={piece}/>)
                }
            </div>




        </div>
     );
}
 
export default Dashboard;

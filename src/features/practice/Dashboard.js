import React from 'react'
import { useSelector } from 'react-redux'
import { selectRepertoireLists } from './practiceSlice'
import RepertoireList from './RepertoireList/RepertoireList'
import AddNewRepertoireListButton from '../../components/AddButton/AddButton'
const Dashboard = () => {

    const repertoireLists = useSelector(selectRepertoireLists)
    console.log(repertoireLists)
    return ( 
        <div>
            {
                repertoireLists &&
                repertoireLists.map( (listItem, idx) => <RepertoireList key={`rep-list-${idx}`} listItem={listItem}/>)
            }
            hi
            <AddNewRepertoireListButton />



        </div>
     );
}
 
export default Dashboard;

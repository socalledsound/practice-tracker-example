import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Modal from '../../../components/Modal/Modal'
import AddButton from '../../../components/AddButton/AddButton';

const AddRepertoireList = () => {

    const [modal, toggleModal ] = useState(false)
    
    // come to think of it let's have a useModal hook here too

    return ( 
        <div >
            <AddButton updateParent={toggleModal(!modal)}/>
            {
            modal &&
            <Modal />
            }
        </div>
     );
}
 
export default AddRepertoireList;
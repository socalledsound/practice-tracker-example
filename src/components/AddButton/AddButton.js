import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddButton = ({updateParent}) => {
    return ( 
      <div>
            <FontAwesomeIcon
                onClick={updateParent}
                icon={faPlus}
                size="3x"
                style={{ color: "#2A9D8F", alignSelf: "center" }}
            />
      </div>  
     );
}
 
export default AddButton;
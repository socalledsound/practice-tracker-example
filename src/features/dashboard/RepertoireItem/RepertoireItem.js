import React from 'react'
import styles from './RepertoireItem.module.css'
const RepertoireList = ({listItem}) => {
    return ( 
        <div className={styles.repertoireItem}>
            {listItem.name}
        </div>
     );
}
 
export default RepertoireList;
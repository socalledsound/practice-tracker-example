import React from 'react'

const Piece = ({piece}) => {
    console.log(piece)
    return ( 
        <div>
            {piece.title}
        </div>
     );
}
 
export default Piece;
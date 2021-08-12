import React from 'react'
import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal(
   <div>
     this will  be the modal
   </div>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
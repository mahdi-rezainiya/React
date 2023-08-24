import React from 'react';
import './modal.css';

export default function Module(props) {
    return (
    <div className="modal-backdrop">
        <div className="modal" style={{
            border : "4px solid" ,
            borderColor : props.isSalesModal ? "#ff4500" : "#555"
            }}>
            {props.children}
            {/* <button onClick={props.handleClose} className={props.isSalesModal ? "sales-btn" : ""}>close</button> */}
        </div>
    </div>
    )
}
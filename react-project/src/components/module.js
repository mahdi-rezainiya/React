import React from 'react';
import './module.css';

export default function Module(props) {
    return (
    <div className="modal-backdrop">
        <div className="modal" style={{border : "4px solid" , borderColor : "props.isSalesModal ? #ff4500 : #555"}}>
            {props.children}
        </div>
    </div>
    )
}

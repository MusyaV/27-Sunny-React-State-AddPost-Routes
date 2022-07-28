import React from "react";
import s from "./MessageItem.module.css";

const MessageItem = (props) => {
    
    return (
        <div className={s.post}>
            <div className={s.fotoName}>
                <img className={s.imgMes} src={"/img/" + props.src + ".jpg"}/>
                <h4>{props.name}</h4>
            </div>
            <p>{props.message}</p>
        </div>
    )
}

export default MessageItem;
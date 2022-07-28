import React from "react";
import s from "./DialogItem.module.css";





  const DialogItem = (props) => {
    return (
      <div className={s.con}>
        <div className={s.pic}>
          <img src={"/img/" + props.src + ".jpg"} />
        </div>
        <h4>{props.name}</h4>
        <p>{props.mes}</p>
      </div>
    )
  }


export default DialogItem;
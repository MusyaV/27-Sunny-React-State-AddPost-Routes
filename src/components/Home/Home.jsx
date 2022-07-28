import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Home.module.css";



const Home = (props) => {

  let nameElements = props.nameData.map(element => <DialogItem src={element.src} name={element.name} mes={element.mes} />);

  // делаем шаблон для одного контакта

  return (
    <div className={s.home}>
      {nameElements}
    </div>
  );
};

export default Home;
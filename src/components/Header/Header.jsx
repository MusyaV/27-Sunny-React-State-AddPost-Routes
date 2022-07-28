import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.imgLogo} src='/img/sunny.png'></img>
            <h3>SUNNY</h3>
        </header>
    );
};

export default Header;
import React from 'react';
import style from './header.module.css';
import {isAuthRoutes} from "../../Routes/routes"
import Logo from "./Logo/logo";
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <header className={style.header}>
            <Logo />
            <ul className={style.ul}>
                {
                  isAuthRoutes.map(({id, path, name}) => {
                        return(
                            <li key={id}>
                                <NavLink to={path}
                                         className={style.link}
                                         exact>
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    );
};

export default Header;
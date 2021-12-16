import React from 'react';
import {FaReact} from 'react-icons/fa';
import style from './logo.module.css'

const Logo = () => {
    return (
        <div className={style.logo}>
            <FaReact/>
        </div>
    );
};

export default Logo;
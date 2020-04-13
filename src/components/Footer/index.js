import React from 'react';
import classes from './style.module.css';
import { MdCopyright } from "react-icons/md";
import { FaCopyright } from "react-icons/fa";

const Footer = (props) => {
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <div className={classes.line}></div>
                <div>
                    <p>|| Copyright <FaCopyright /> CurlyCodes 2019 ||</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
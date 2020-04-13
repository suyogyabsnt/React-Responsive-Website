import React from 'react';
import classes from './style.module.css';
import '@fortawesome/fontawesome-free'
import { FiAirplay } from "react-icons/fi";

import {GoFile} from "react-icons/go";
import {GoBook} from "react-icons/go";

const Bottom = (props) => {
    return (
        <div className={classes.body}>
            <div className={classes.info}>
            
              <h2>  <FiAirplay/></h2><h1>Technology</h1>
                <p>CoreCode empowers Nepali students by providing the motivation and resources required to succeed in the technical positions.</p>
                </div>
            <div className={classes.info}>
              <h2><GoFile/></h2><h1>Feature</h1>
                <p>Students ages 11 and up are provided with training and mentor programs inorder to close the gender gap in the technological sector in Nepal.</p>
                </div>
            <div className={classes.info}>
            <h2> <GoBook/></h2><h1>Program</h1>
                <p>Students ages 11 and up are provided with training and mentor programs inorder to close the gender gap in the technological sector in Nepal.</p>
                </div>
        </div>

    );
}
export default Bottom;
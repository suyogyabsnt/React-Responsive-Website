import React from 'react';

import Header from '../Header/index'
import classes from './style.module.css'

const FullHeader = (props) => (
    <div className={classes.body}>
       
        
        
        <div className={classes.main}>
            <div className={classes.mainLogo}>CoreCodes</div>
            <h1>Bridging Students and Technology</h1>
            <div className={classes.suscirbeBtn}>Subscribe</div>
        </div>
        
     
        
    </div>
);
export default FullHeader;
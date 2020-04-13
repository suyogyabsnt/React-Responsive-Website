import React from 'react';
import classes from './style.module.css'

const Toggle = props => (
   <button className={classes.toggleButton} onClick={props.click}>
       <div className={classes.toggleButtonLine}/>
       <div className={classes.toggleButtonLine}/>
       <div className={classes.toggleButtonLine}/>
   </button>
   
);
export default Toggle;
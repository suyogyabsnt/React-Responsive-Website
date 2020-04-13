import React from 'react';
import classes from './style.module.css';
import { Link } from "react-router-dom";

const Drawer = (props) => {
    return (
        <div className={classes.body}>
            <div onClick={props.drawClickHandler}><ul className={classes.menuDrawer}>
                <Link className={classes.menuDrawerli} to="/home">Home</Link>
                <Link className={classes.menuDrawerli} to="/aboutus">AboutUs</Link>
                <Link className={classes.menuDrawerli} to="/programs">Programs</Link>
                <Link className={classes.menuDrawerli} to="/cic">Computer In Classes</Link>
                <Link className={classes.menuDrawerli} to="/donate">Donate</Link>
                <Link className={classes.menuDrawerli} to="/blogs">Blogs</Link>
            </ul>
            </div>
            <div className={classes.backDrop} onClick={props.drawClickHandler}></div>
        </div>


    );
}
export default Drawer;
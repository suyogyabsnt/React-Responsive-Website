import React from 'react';
import classes from './style.module.css';
import Drawer from './Drawer';
import Toggle from './Toggle'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={classes.body}>
            <div className={classes.header}>

                <Toggle click={props.click} />
                <div className={classes.logo}>CoreCodes</div>
                <div>
                    <ul className={classes.menu}>
                        <Link className={classes.li} to="/home">Home</Link>
                        <Link className={classes.li} to="/aboutus">AboutUs</Link>
                        <Link className={classes.li} to="/programs">Programs</Link>
                        <Link className={classes.li} to="/cic">Computer In Classes</Link>
                        <Link className={classes.li} to="/donate">Donate</Link>
                        <Link className={classes.li} to="/blogs">Blogs</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header;
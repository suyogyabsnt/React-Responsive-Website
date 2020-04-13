import React from 'react';
import classes from './style.module.css';
import Top from './Top/index';
import Bottom from './Bottom/index'
import FullHeader from '../FullHeader';


const Section1 = (props) => {
    return (
        <div>
            <FullHeader />
            <div className={classes.body}>

                <Top />
                <Bottom />
            </div>
        </div>
    );
}
export default Section1;
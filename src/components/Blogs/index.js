import React from 'react';

import Header from '../Header/index'
import classes from './style.module.css'
import { GiBinoculars, GiPencilBrush, GiTakeMyMoney } from "react-icons/gi";

const About = (props) => (
    <div className={classes.body}>

        <div className={classes.main}>
            <p>Blogs</p>
        </div>
        <div className={classes.box}>
            <div className={classes.content}>

                <h1>Blogssss</h1>
            </div>


        </div>
        <div className={classes.box1}>
            <div className={classes.content}>
                <h1 style={{textAlign:'center'}}>Meet the Founders</h1>
                <img src={'https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/81230038_3482504165109503_222633082941865984_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=2eBzM2ldMygAX_KLS5j&_nc_ht=scontent.fatl1-2.fna&oh=e0c647681a4de29e9e8cb6d3d040165c&oe=5EB79F52'} alt='founder2'/>
            </div>

        </div>



    </div>
);
export default About;
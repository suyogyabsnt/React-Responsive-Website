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

                <h1><GiPencilBrush /><br />Our Mission</h1>
                <p>CoreCodes aims to provide Nepali students with the motivation and skills required to hold technical jobs in Nepal. Be it through 3-hour coding program or the implementation of bigger projects dedicated to achieving long term goals, CurlyCodes aims to make sure that students are exposed to the technical benefits from an early age.
</p>

                <h1><GiBinoculars /><br />Our Vision</h1>
                <p>CoreCodes holds a vision of providing the basic technical knowledge in every schools in Nepal. Five years from today, Nepal will see a revolution in the field of data science and coding. CurlyCodes will provide students with the basic as well as advanced level training to make sure that students are equipped with the right set of technical skills to make sure these job positions won't overpower the manpower at hand.
</p>

                <h1><GiTakeMyMoney /><br />Our Revenue Model</h1>
                <p>The revenue made from the programs will be spent on a biannual basis to donate computers to remote schools in Nepal. These donated computer will be a stepping stone to create more eagerness towards the field of technology. Even though our sessions are life changing, it is important to provide students with the resources so that they can focus on their continuous and sustainable development.</p>
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
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './components/About/index'
import Section1 from './components/Section1';
import Footer from './components/Footer/index';
import Programs from './components/Programs/index'
import ComputerInClasses from './components/ComputerInClasses/index';
import Donate from './components/Donate/index';
import Blogs from './components/Blogs/index'



ReactDOM.render(
  

    <BrowserRouter>
      <App />
  
      <Switch>
       <Route exct path="/home" component={Section1} />
        <Route exct path="/aboutus" component={About} />
        <Route exct path="/programs" component={Programs} />
        <Route exct path="/cic" component={ComputerInClasses} />
        <Route exct path="/donate" component={Donate} />
        <Route exct path="/blogs" component={Blogs} />
      </Switch>

      <Footer />
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

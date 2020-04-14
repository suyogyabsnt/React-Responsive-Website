import React,{Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index'
import FullHeader from './components/FullHeader/index'
import Drawer from './components/Header/Drawer'





 class App extends Component {
   state={
     sideDrawerOpen: false
   }
   drawToggleClickHandler=()=>{
      this.setState((prevState)=>{
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
      })
   }
   render(){
    let drawer=null;
    if(this.state.sideDrawerOpen==true){drawer=<Drawer drawClickHandler={this.drawToggleClickHandler}/>}
    return (
      <div className="App">
         
         {drawer}
          
          <div><Header click={this.drawToggleClickHandler}/></div>
         
         
      </div>
    );}
  }

export default App;

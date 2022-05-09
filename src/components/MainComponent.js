import { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDiteal from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Foteer from './FotterConponent';
import {Routes,Route,Navigate } from 'react-router-dom';



class Main extends Component{

  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES,
    }
  }



  render(){
    const HomePage = ()=>{
      return(
        <Home/>
      )
    }
    return (
      <div>
        <Header/>

        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route  path="/menu" element={<Menu dishes={this.state.dishes}/>} />
          <Route path='*' element={<Navigate to="/home" replace/>}/>
        </Routes>

        <Foteer/>
        </div>
    );
  }
}


export default Main;

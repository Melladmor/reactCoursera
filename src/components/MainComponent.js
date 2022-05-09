import { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDiteal from './DishdetailComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promitions';
import Header from './HeaderComponent';
import Foteer from './FotterConponent';
import {Routes,Route,Navigate } from 'react-router-dom';



class Main extends Component{

  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES,
      comments:COMMENTS,
      leader:LEADERS,
      promotion:PROMOTIONS
    }
  }



  render(){
    
    
    return (
      <div>
        <Header/>

        <Routes>
          <Route  path="/home" 
          element={<Home 
            dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
            promotion={this.state.promotion.filter((promotion)=> promotion.featured)[0]}
            leader={this.state.leader.filter((leader)=>leader.featured)[0]}
            />}
          />

          <Route  path="/menu" element={<Menu dishes={this.state.dishes}/>} />
          <Route path='/contactus' element={<Contact/>}/>
          <Route path='*' element={<Navigate to="/home" replace/>}/>
        </Routes>

        <Foteer/>
        </div>
    );
  }
}


export default Main;

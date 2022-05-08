import { Component } from 'react';
import Menu from './MenuComponent';
import DishDiteal from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Foteer from './FotterConponent';



class Main extends Component{

  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES,
      selectedDish:null
    }
  }

  onDishSelect(dishId){
    this.setState({
        selectedDish:dishId
    })
    }

  render(){
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDiteal dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Foteer/>
        </div>
    );
  }
}


export default Main;

import { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDiteal from './DishdetailComponent';
import {DISHES} from '../shared/dishes'



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
        <Navbar dark color='primary'>
        <Container>
        <NavbarBrand href='/'>
        Ristorante Con Fusion
        </NavbarBrand>
        </Container>
        </Navbar>

        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDiteal dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}


export default Main;

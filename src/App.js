// import logo from './logo.svg';
import { Component } from 'react';
import {Container, Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
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
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
  
}

export default App;


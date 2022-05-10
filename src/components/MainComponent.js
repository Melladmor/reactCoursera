import { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDiteal from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promitions';
import Header from './HeaderComponent';
import Foteer from './FotterConponent';
import {Switch,Route,Redirect } from 'react-router-dom';



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

    const HomePage=()=>{
      return(
        <Home 
            dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
            promotion={this.state.promotion.filter((promotion)=> promotion.featured)[0]}
            leader={this.state.leader.filter((leader)=>leader.featured)[0]}
        />
      )
    }
    
    const DishWithId = ({match}) => {
      return(
          <DishDiteal dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const AboutPage = ()=>{
      return(
        <About leaders={this.state.leader}/>
      )
    }

    return (
      <div>
        <Header/>

        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/aboutus" component={AboutPage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/contactus' component={()=><Contact/>}/>
          <Redirect to="/home"/>
        </Switch>

        <Foteer/>
        </div>
    );
  }
}


export default Main;
          // <Route path='*' component={<Navigate to="/home" replace/>}/>

import { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDiteal from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Foteer from './FotterConponent';
import {Switch,Route,Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return {
      dishes:state.dishes,
      comments:state.comments,
      leader:state.leader,
      promotion:state.promotion
    }
}


class Main extends Component{



 

  render(){

    const HomePage=()=>{
      return(
        <Home 
            dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
            promotion={this.props.promotion.filter((promotion)=> promotion.featured)[0]}
            leader={this.props.leader.filter((leader)=>leader.featured)[0]}
        />
      )
    }
    
    const DishWithId = ({match}) => {
      return(
          <DishDiteal dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const AboutPage = ()=>{
      return(
        <About leaders={this.props.leader}/>
      )
    }

    return (
      <div>
        <Header/>

        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/aboutus" component={AboutPage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/contactus' component={()=><Contact/>}/>
          <Redirect to="/home"/>
        </Switch>

        <Foteer/>
        </div>
    );
  }
}


export default withRouter(connect(mapStateToProps)(Main));
          // <Route path='*' component={<Navigate to="/home" replace/>}/>

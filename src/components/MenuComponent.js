import { Component } from "react";
// import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap'
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
class Menu extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            dishes:DISHES,
            comments:DISHES
        };
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                <DishDetail dishes={this.state.dishes} comments={this.state.comments}/>
                </div>
            </div>
        );
    }
}

export default Menu;
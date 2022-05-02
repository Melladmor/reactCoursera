/* eslint-disable no-undef */
import { Component } from "react";
import {Card, CardBody,CardImg,CardImgOverlay, CardText,CardTitle, List} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props)

        this.state = {
            selectDishes:null,
        };
    }

    onDishSelect(dish){
        this.setState({
            selectDishes:dish,

        })
    };

    renderDish(dish){
        if(dish !=null){
            return(
                <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
            )
        }
    }

    renderComments(dish){
        if(dish !=null){
            

            
                
                
                const commentDish = dish.comments.map((com) => {
                    return(
                    <div key={com.id}>
                    <List type="unstyled" className="mb-4">
                    <li className="mb-1">{com.comment}</li>
                    <li>--{com.author},  {com.date}</li>
                    </List>
                    </div>
                    )
                })

                return(
                    <div className="p-3">
                    <h4>Comments</h4>
                    {commentDish}
                    </div>
                )
            
            

        }else{
            return(
                <div></div>
            )
        }
    }


    render(){
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.onDishSelect(dish)}>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
                </div>
            );
        });



        return(
            <div className="">
                <div className="row">
                {menu}
                </div>
                <div className="row">
                <div className="col-sm-12 col-md-5  m-1">
                {this.renderDish(this.state.selectDishes)}
                </div>
                <div className="col-sm-12 col-md-5  m-1">
                {this.renderComments(this.state.selectDishes)}
                </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;
                    // <div className="col-sm-12 col-md-5  m-1">
                // {this.renderComments(this.state.selectDishes)}
                // </div>
import { Component } from "react";
import {Card,CardImg,CardBody,CardTitle,CardText, List} from 'reactstrap'
class DishDiteal extends Component{
    constructor(props){
        super(props);

        this.state ={

        }
        
    }

    renderDish(dish){
        if(dish !=null)
        {
            return(
            <Card>
            <CardImg src={dish.image} alt={dish.name} top width='100%'/>
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

    renderComments(comments){
        if(comments == null){
            return(
                <div></div>
            )
        };

        const comment = comments.map((com)=>{
            return(
                <List type="unstyled" key={com.id}>
                <li><p>{com.comment}</p></li>
                <li><p>-- {com.author}</p></li>
                <li><p>{new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(com.date)) )}</p></li>
                </List>
            )
        });

        return(
            <div>
            <h4>Comments</h4>
            <div>
            {comment}
            </div>
            </div>
        )
    }

    render(){
        const dish = this.props.dish;

        if(dish ==null)
        {
            return(<div></div>)
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return(
            <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-5 m-1">
            {dishItem}
            </div>
            <div className="col-sm-12 col-md-5 m-1">
            {dishComment}
            </div>
            </div>
            </div>

        )
    }

    

}

export default DishDiteal;
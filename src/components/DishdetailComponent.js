import React from "react";
import {Card,CardImg,CardBody,CardTitle,CardText, List} from 'reactstrap'




        function RenderDish({dish}){
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

        function RenderComments({comments}){
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

        const DishDiteal=(props)=>{
            const dish = props.dish;

            if(dish ==null)
            {
                return(<div></div>)
            }
            return(
                <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-5 m-1">
                <RenderDish dish={dish}/>
                </div>
                <div className="col-sm-12 col-md-5 m-1">
                <RenderComments comments={dish.comments}/>
                </div>
                </div>
                </div>
    
            )
        }

export default DishDiteal;
import React, { Component } from "react";
import {Card,CardImg,CardBody,CardTitle,CardText,Button, List ,Breadcrumb,BreadcrumbItem ,Modal,ModalHeader,ModalBody, Label,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom';
import { Control ,LocalForm,Errors } from 'react-redux-form';


const required = (val)=> val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
    class CommentForm extends Component{
        constructor(props){
            super(props);

            this.state ={
                isModalOpen:false
            };

            this.modalToogle =this.modalToogle.bind(this);
            this.handleCommentSubmit =this.handleCommentSubmit.bind(this);


        }

        modalToogle(){
            this.setState({
                isModalOpen:!this.state.isModalOpen
            })
        }

        handleCommentSubmit(values) {
            this.modalToogle();
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            }



        render(){
            return(
                <>
                <Button outline onClick={this.modalToogle}>
                <i className="fa fa-pencil me-2"></i>
                Submit Comment</Button>


                <Modal isOpen={this.state.isModalOpen} toggle={this.modalToogle}>
                <ModalHeader isOpen={this.state.isModalOpen} toggle={this.modalToogle}>Login</ModalHeader >
                <ModalBody>
                    <LocalForm className="p-2" onSubmit={(values)=>this.handleCommentSubmit(values)}>
                        <Row className="form-group mt-2">
                            <Label htmlFor="rating" className="p-0 mb-2">Rating</Label>
                            <Control.select model='.rating' id="rating" name="rating" className="form-select">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Control.select>
                        </Row>

                        <Row className="form-group mt-3">
                            <Label htmlFor="yourname" className="p-0 mb-2">Your Name</Label>
                            <Control.text model='.yourname' id="yourname" name="yourname" placeholder="Your Name" className="form-control"
                            validators={{
                                required,
                                maxLength:maxLength(15),
                                minLength:minLength(3)
                            }}/>
                            <Errors className="text-danger"
                            model='.yourname'
                            show='touched'
                            messages={{
                                required:'Required ',
                                maxLength:'Must be less than 15 character',
                                minLength:'Must be greater than 2 character'
                            }}/>

                        </Row>

                        <Row className="form-group mt-3">
                            <label htmlFor="comment" className="p-0 mb-2">Comment</label>
                            <Control.textarea model='.comment' id="comment" name="comment" className="form-control" rows={6}></Control.textarea>
                        </Row>

                        <Button type="submit" value='submit' className="bg-primary mt-2 me-auto" >Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>



            </>
            )
        }
        
    }

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
                <>
                <List type="unstyled" key={com.id}>
                <li><p>{com.comment}</p></li>
                <li><p>-- {com.author}</p></li>
                <li><p>{new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(com.date)) )}</p></li>
                </List>
                </>
            )
        });

        return(
            <div>
            <h4>Comments</h4>
            <div>
            {comment}
            </div>
            <div>
            {<CommentForm/>}
            </div>
            </div>
        )
    }

        const DishDiteal=(props)=>{
            
            if(props.dish ==null)
            {
                return(<div></div>)
            }
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        }



export default DishDiteal;
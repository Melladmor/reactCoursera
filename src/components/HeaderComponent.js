import { Component } from "react";
import {Nav, Navbar, NavbarBrand, NavItem,Collapse, NavbarToggler,Modal,Button,ModalHeader,ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);

        this.state ={
            isNavOpen:false,
            isModalOpen:false
        };
        this.toggleNav =this.toggleNav.bind(this);
        this.modalToogle =this.modalToogle.bind(this);
        this.hadleLogin =this.hadleLogin.bind(this);

    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    modalToogle(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }

    hadleLogin(event){
        this.modalToogle();
        alert(
            'UserName: '+this.username.value +"\n"+
            'password: '+this.password.value +"\n"+
            'Remember: '+this.remember.checked
        )
        event.preventDefault();

    }
  
    




    render(){
        return(
            <>
            <Navbar dark fixed="top" expand="md">
            <div className="container d-flex flex-wrap justify-content-between">
            <NavbarBrand className="mr-auto" href="/">
            <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
            </NavbarBrand>
            <NavbarToggler className="ml-auto" onClick={this.toggleNav}/>
            <Collapse navbar isOpen={this.state.isNavOpen}>
                <Nav navbar>
                <NavItem>
                <NavLink className="nav-link"  to='/home'><span className="fa fa-home"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info "></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list "></span> Menu</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card"></span> Contact Us</NavLink>
                </NavItem>
                </Nav>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.modalToogle}>
                        <span className="fa fa-sign-in me-2"></span>
                        Login
                        </Button>
                    </NavItem>
                </Nav>
            </Collapse>
            </div>
            </Navbar>



            
            <div className="jumbotron">
            <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Ristorante Con Fusion</h1>
                    <p>We take inspiration from the Worlds best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
            </div>
            </div>
            </div>

            <Modal isOpen={this.state.isModalOpen} toggle={this.modalToogle}>
                <ModalHeader isOpen={this.state.isModalOpen} toggle={this.modalToogle}>Login</ModalHeader >
                <ModalBody>
                    <Form onSubmit={this.hadleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">User Name</Label>
                            <Input type="text" id="username" name="username" placeholder="User Name" innerRef={(input)=>this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="text" id="password" name="password" placeholder="Password" innerRef={(input)=>this.password = input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" innerRef={(input)=>this.remember = input}/>
                                Remeber Me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value='submit' className="bg-primary" >Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default Header;
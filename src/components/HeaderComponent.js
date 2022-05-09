import { Component } from "react";
import {Nav, Navbar, NavbarBrand, NavItem,Collapse, NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);

        this.state ={
            isNavOpen:false
        };
        this.toggleNav =this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    render(){
        return(
            <>
            <Navbar dark sticky="top" expand="md">
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
                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card "></span> Contact Us</NavLink>
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
            </>
        );
    }
}

export default Header;
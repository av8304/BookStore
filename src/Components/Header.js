import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import "../App.css";
import logo from "../logo.JPG";

const Header = (props) => {
    const style = {
        position: "relative",
        left: "50px"
    };

    return (
        <React.Fragment>
            <Navbar className="navbar-background">
                <NavbarBrand style={style} href="\"><img src={logo} placeholder="LOGO" height="60px" width="60%"></img>  <i style={{position: "relative", top: "7px"}} className="book fas fa-book-open fa-2x"></i></NavbarBrand>
                <NavbarText><i className="fas fa-shopping-cart fa-2x" style={{color: "#fff"}}></i></NavbarText>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;
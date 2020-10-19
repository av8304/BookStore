import React from 'react';
import "../App.css";

const Footer = (props) => {
    const style = {
        position: "relative",
        left: "40%",
        right: "50%",
        color: "#fff", 
        fontSize: "30px"
    };

    return (
        <div className="navbar-background p-3"><span style={style}>&copy; BOOK-STORE, established 2020</span></div>
    );
};

export default Footer;
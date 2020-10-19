import React, { Component } from 'react';
import BOOKS from '../Shared/Books';
import Cart from './Cart';
import Content from './Content';
import Header from './Header';
import "../App.css";
import Footer from './Footer';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: BOOKS
        }
    }

    decrement = (book) => {
        let copy = this.state.books;
        book.quantity -= 1;

        for(let i = 0; i < copy.length; i++) {
            if(copy[i].id == book.id)
                copy[i] = book;
        }

        this.setState({
            books: copy
        })
    };

    increment = (book) => {
        let copy = this.state.books;
        book.quantity += 1;

        for(let i = 0; i < copy.length; i++) {
            if(copy[i].id == book.id)
                copy[i] = book;
        }

        this.setState({
            books: copy
        })
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="bg-color-content">
                    <div className="container p-5">
                        <div className="row">
                            <Content books={this.state.books} increment={this.increment} decrement={this.decrement} />
                            <Cart books={this.state.books} />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
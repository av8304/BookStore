import React from 'react';
import { Card, CardBody, CardFooter, CardImg, CardTitle, Button, CardSubtitle } from 'reactstrap';
import '../App.css';

const Content = ({books, increment, decrement}) => {
    return (
        <div className="col-md-7">
            <div className="row">
                {
                    books.map((book) => (
                        <div className="col-sm-4 mt-5" key={book.id}>
                            <Card className="h-100">
                                <CardImg src={book.cover} top width="15px" height="250px"/>
                                <CardBody>
                                    <CardTitle>{book.title}</CardTitle>
                                    <hr />
                                    <CardSubtitle>{`PAGES: ${book.pages}`}</CardSubtitle>
                                </CardBody>
                                <CardFooter> 
                                    <div className="mb-3">{`₹ ${book.price}`}</div>
                                    <div>
                                        {
                                            book.quantity == 0 
                                            ? <Button className="add-to-cart-button" size="sm" onClick={() => increment(book)}>Add to Cart</Button>
                                            : (
                                                <React.Fragment>
                                                    <Button color="secondary" className="mr-2" onClick={() => decrement(book)}>-</Button>
                                                    {book.quantity}
                                                    <Button color="secondary" className="ml-2" onClick={() => increment(book)}>+</Button>
                                                </React.Fragment>
                                            )
                                        }
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    ))
                }             
            </div>
        </div>
    );
};

export default Content;
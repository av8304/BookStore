import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Table } from 'reactstrap';

const Cart = ({books}) => {
    let total = 0;
    let flag = 0;

    books.map(book => {
        if (book.quantity > 0) {
            total += book.quantity * book.price;
        }

        flag += book.quantity;
    });

    return (
        <div className="offset-md-1 col-md-4">
            <Card className="mt-5" style={{height: "40%"}}>
                <CardHeader>Shopping Cart</CardHeader>
                <CardBody>
                    <table className="table">
                        {
                            flag == 0 
                            ? null
                            : <React.Fragment>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        books.map(book => (
                                            book.quantity > 0 ? <React.Fragment key={book.id}><tr className="m-5"><td>{book.title}</td><td>{book.quantity}</td><td>{book.price}</td></tr></React.Fragment> : null
                                        ))
                                    }
                                </tbody>
                            </React.Fragment>
                        }
                    </table>
                </CardBody>
                <CardFooter>Total<span className="float-right">{`₹ ${total}`}</span></CardFooter>
            </Card>
        </div>
    );
};

export default Cart;
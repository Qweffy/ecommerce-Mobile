import React, { useEffect, useState } from 'react';
import axios from "axios";

const Order = (props) => {
    const { id } = props.match.params;
    const [order, setOrder] = useState({
        price: null,
        products: []
    });

    useEffect(() => {
        getOrder();
    }, [])



    async function getOrder() {
        let response = await axios.get('http://localhost:4000/orders/' + id);
        setOrder(response.data.data);
    }

    return (
        <div className="container mt-3">
            <table className="table table-Light table-striped">
                <thead className="table-secondary">
                    <tr className="text-center">
                        <th>Product</th>
                        <th>Price</th>
                    </tr>                    
                </thead>
                <tbody>
                    {
                        order.products.map(product => {
                            return (
                                <tr className="text-center">
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                </tr>                                
                            )
                        })
                    }
                </tbody>
                <th className="d-flex">Total price: ${order.price}</th>
            </table>
        </div>
    );
};


export default Order;
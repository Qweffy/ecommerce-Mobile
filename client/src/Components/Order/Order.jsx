import React, { useEffect, useState } from 'react';
import axios from "axios";

const Order = (props) => {
    const { id } = props.match.params;
    const [order, setOrder] = useState({});
    const [product, setProduct] = useState([]);

    async function getOrder() {
        let response = await axios.get('http://localhost:4000/orders/' + id);
        console.log(response.data)
        setOrder(response.data);
        setProduct(order.product)
        console.log(product)
    }
    useEffect(() => {
        getOrder();
        console.log()
        console.log(product)
    }, [])

    return (
        <div className="row">
            <div className="col-md-8">
                {/*   {order.products.map(elem => {
                    return (
                        <ul className="list-group">
                            <div className="row list-group-item-action">
                                <li className="col-md-6 list-group-item ">Producto: {elem.name}</li>
                                <li className="col-md-6 list-group-item ">Precio unitario: {elem.price}</li>
                            </div>
                        </ul>
                    )
                })} */}
            </div>
            <div className="col-md-4">
                <h4>Total</h4>
            </div>
        </div>
    );
};


export default Order;
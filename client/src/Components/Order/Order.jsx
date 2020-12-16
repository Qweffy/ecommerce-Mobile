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
/*         console.log(response.data.data)
        console.log(order) */
    }

    return (
        <div className="row">
            { <div className="col-md-8">
                {order.products.map(elem => {
                    return (
                        <ul className="list-group">
                            <div className="row list-group-item-action">
                                <li className="col-md-6 list-group-item ">Producto: {elem.name}</li>
                                <li className="col-md-6 list-group-item ">Precio unitario: {elem.price}</li>
                            </div>
                        </ul>
                    )
                })}
            </div>}
            <div className="col-md-4">
                <h4>Total: {order.price}</h4>
            </div>
        </div>
    );
};


export default Order;
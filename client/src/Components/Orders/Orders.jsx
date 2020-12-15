import React, { useEffect, useState } from "react";
import axios from 'axios';
import Order from '../Order/Order.jsx';

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);

    // Get all orders from DB and asign it to local state
    async function getOrders() {
        let response = await axios.get("http://localhost:4000/orders/");
        setAllOrders(response.data);
    }

    // Call getOrders to get all orders
    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div>
            {
                allOrders.map((order, index) => {
                    return (
                        <Order order={order} key={index} />
                    )
                })
            }
        </div>
    );
};

export default Orders;
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Orders = () => {
    const [allOrders, setAllOrders] = userState([]);

    // Get all orders from DB and asign it to local state
    async function getOrders() {
        let response = await axios.get("http://localhost:4000/orders/");
        setAllOrders(response.data);
    }

    // Call getOrders to get all orders
    useEffect(() => {
        getOrders();
    }, []);
};

export default Orders;
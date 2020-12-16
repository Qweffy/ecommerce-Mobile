import React, { useEffect, useState } from "react";
import axios from 'axios';

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
        <div className="container mt-3">
            <table className="table table-Light table-striped">
                <thead className="table-secondary">
                    <tr className="text-center">
                        <th>Order Id</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Buyer</th>
                        <th>Role</th>
                    </tr>                    
                </thead>
                <tbody>
                    {
                        allOrders.map(order => {
                            return (
                                <tr className="text-center">
                                    <td>{order.id}</td>
                                    <td>${order.price}</td>
                                    <td>{order.state}</td>
                                    <td>{order.user.username}</td>
                                    <td>{order.user.type}</td>
                                </tr>                                
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
import React from "react";

const Order = ({ price, state }) => {
    return (
        <div>
            <tr>
                <td>{price}</td>
                <td>{state}</td>
            </tr>
        </div>
    )
};

export default Order;
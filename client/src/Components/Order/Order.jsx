import React, { useEffect } from 'react';
import axios from "axios";

const Order = () => {


    return (
        <div className="row">
            <div className="col-md-4">
                <h3>Usuario</h3>
                <h4>Total</h4>
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    <div className="row list-group-item-action">
                        <li className="col-md-6 list-group-item ">Producto</li>
                        <li className="col-md-6 list-group-item ">Precio unitario</li>
                    </div>
                    <div className="row list-group-item-action">
                        <li className="col-md-6 list-group-item ">Producto</li>
                        <li className="col-md-6 list-group-item ">Precio unitario</li>
                    </div>
                    <div className="row list-group-item-action">
                        <li className="col-md-6 list-group-item ">Producto</li>
                        <li className="col-md-6 list-group-item ">Precio unitario</li>
                    </div>
                </ul>
            </div>
        </div>


    );
};


export default Order;
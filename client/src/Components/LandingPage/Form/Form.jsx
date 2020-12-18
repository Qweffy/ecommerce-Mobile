import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Form.css';


const Form = () => {
    // Get sugestion options
    const [sugestions, setSugestions] = useState([]);

    async function getSugestions() {
        let response = await axios.get('http://localhost:4000/sugestions/');
        setSugestions(response);
    }

    useEffect(() => {
        getSugestions();
    }, []);

    return (
        <div className="form-background">
            <div className="d-flex">
                <select class="form-select m-2" aria-label="Default select example">
                    {/* Price ranges */}
                    <option selected>Price</option>
                    <option value="1">{sugestions[0]}</option>
                    <option value="1">{sugestions[1]}</option>
                    <option value="1">{sugestions[2]}</option>
                    <option value="1">{sugestions[3]}</option>
                    <option value="1">{sugestions[4]}</option>
                </select>
                <select class="form-select m-2" aria-label="Default select example">
                    {/* Categories: Gaming, etc */}
                    <option selected>Category</option>
                    <option value="1">{sugestions[5]}</option>
                    <option value="1">{sugestions[6]}</option>
                    <option value="1">{sugestions[7]}</option>
                    <option value="1">{sugestions[8]}</option>
                    <option value="1">{sugestions[9]}</option>
                    <option value="1">{sugestions[10]}</option>
                </select>              
            </div>
            <Link to={'/sugestions'}>
                <button className="form-btn mt-2">Search</button>
            </Link>
        </div>
    )
};

export default Form;
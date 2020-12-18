import React from "react";
import { Link } from "react-router-dom";
import './Form.css';


const Form = () => {
    return (
        <div className="form-background">
            <div className="d-flex">
                <select class="form-select m-2" aria-label="Default select example">
                    <option selected>Brand</option>
                    <option value="1">Apple</option>
                    <option value="2">Samsung</option>
                    <option value="3">Motorola</option>
                </select>
                <select class="form-select m-2" aria-label="Default select example">
                    <option selected>Color</option>
                    <option value="1">Black</option>
                    <option value="2">White</option>
                    <option value="3">Grey</option>
                </select>
                <select class="form-select m-2" aria-label="Default select example">
                    <option selected>Memory</option>
                    <option value="1">4 GB</option>
                    <option value="2">8 GB</option>
                    <option value="3">16 GB</option>
                </select>                
            </div>
            {/* <div className="d-flex">
                <select class="form-select m-2" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select m-2" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select m-2" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>                 
            </div> */}
            <Link to={'/sugestions'}>
                <button className="form-btn mt-2">Search</button>
            </Link>
        </div>
    )
};

export default Form;
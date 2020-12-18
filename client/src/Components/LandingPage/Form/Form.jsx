import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Form.css';


const Form = () => {
    // Define selectedSugestions to be passed as props to Sugestions component
    const [selectedSugestions, setSelectedSugestions] = useState([]);

    // Get sugestion options to be displayed in form
    const [sugestions, setSugestions] = useState([
        {
            id: 0,
            name: ''
        },
        {
            id: 1,
            name: ''
        },
        {
            id: 2,
            name: ''
        },
        {
            id: 3,
            name: ''
        },
        {
            id: 4,
            name: ''
        }
    ]);

    useEffect(() => {
        axios.get('http://localhost:4000/sugestions/')
        .then((res) => {
            setSugestions(res.data);
        })
          
    }, []);

    // Handle change in category input
    function loadSugestion(e) {
        if (e.target.checked) {
            setSelectedSugestions([
                ...selectedSugestions,
                e.target.name
            ])
        }

        if (!e.target.checked) {
            setSelectedSugestions(selectedSugestions.filter(s => s !== e.target.name));
        }
    }

    function renderSugestions(sugestion, index) {
        if (index > 4) {
            return (
            <div className="form-check">
                <input 
                type="checkbox" 
                className="form-check-input" 
                name={sugestion.id}  
                onChange={(e) => {loadSugestion(e)}}/>
                <label class="form-check-label" for="gridCheck1">
                    {
                        sugestions[index].name
                    }
                </label>
            </div>
            )
        }

        return;        
    }

    return (
        <div className="form-background">
            <div className="d-flex">
                <select class="form-select m-2" aria-label="Default select example">
                    {/* Price ranges */}
                    <option selected>Price</option>
                    <option value={sugestions[0].id}>{sugestions[0].name}</option>
                    <option value={sugestions[1].id}>{sugestions[1].name}</option>
                    <option value={sugestions[2].id}>{sugestions[2].name}</option>
                    <option value={sugestions[3].id}>{sugestions[3].name}</option>
                    <option value={sugestions[4].id}>{sugestions[4].name}</option>
                </select>
                <div className="form-group row">
                    {/* <label className="col-sm-2 col-form-label">Product categories</label> */}
                    <div className="col-sm-10">
                        <div className="m-1">
                            {
                                sugestions.map((sugestion, index) => renderSugestions(sugestion, index))
                            }
                        </div>
                    </div>
                </div>                              
            </div>
            <Link to={'/sugestions'}>
                <button className="form-btn mt-2">Search</button>
            </Link>
        </div>
    )
};

export default Form;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Form.css';
import { postsugestions } from "../../../store/Actions/Product_Actions.js";
import { useSelector , useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

const Form = () => {
    // Define selectedSugestions to be passed as props to Sugestions component
    const [selectedSugestions, setSelectedSugestions] = useState([]);

    // Get sugestion options to be displayed in form
    const [sugestions, setSugestions] = useState([]);

    const [price, setPrice] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

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

    function renderPrice(sugestion, index){
      if (index <= 4) {
          return (
            <option value={sugestions[index].id}>{sugestions[index].name}</option>
          )
      }

      return;

    }


    useEffect(() => {
   dispatch(postsugestions(selectedSugestions));
    }, [selectedSugestions]);

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


async function search(){
  await setSelectedSugestions([
        price,
        ...selectedSugestions,

    ]);
     history.push("/prueba");

}


    return (
        <div className="form-background">
            <div className="d-flex">
                <select onChange={(e) => setPrice(e.target.value)} class="form-select m-2" aria-label="Default select example">
                    {/* Price ranges */}
                    <option value = {0} >Price</option>
                    {
                        sugestions.map((sugestion, index) => renderPrice(sugestion, index))
                    }

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
                <button onClick = {search} className="form-btn mt-2">Search</button>

        </div>
    )
};

export default Form;

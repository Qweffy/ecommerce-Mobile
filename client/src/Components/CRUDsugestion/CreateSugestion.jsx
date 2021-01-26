import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './CreateSugestion.css'

export default function CreateSugestion() {
  const [sugestion, setsugestion] = useState({});

  const history = useHistory();

  function handleChange(e) {
    setsugestion({
      ...sugestion,
      [e.target.name]: e.target.value,
    });
  }

  function postsugestions() {
    axios
      .post("http://localhost:4000/sugestions/", sugestion)
      .then(function (response) {
      });
  }

  // el prevent default sirve para q no recargue la pagina con el primer post
  return (
    <div className="add-sugestion-container">
      {/* <h3>Add new sugestion</h3> */}
      <form onSubmit={postsugestions}>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">sugestion name</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              placeholder="Insert sugestion name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="name"
              type="text"
              required
            />
            <button type="submit" class="btn btn-primary my-4">
              Add sugestion
            </button>            
          </div>
        </div>
      </form>
    </div>
  );
}

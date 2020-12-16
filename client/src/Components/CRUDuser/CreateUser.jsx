import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateUser() {
  const [user, setUser] = useState({});

  //   const history = useHistory();

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function postuser(e) {
    e.preventDefault();
    console.log(user);
    axios.post("http://localhost:4000/user/create", user);
    //   .then(function (response) {
    //     history.push("/showusers");
    //   });
  }

  // el prevent default sirve para q no recargue la pagina con el primer post
  return (
    <div className="add-category-container">
      {/* <h3>Add new category</h3> */}
      <form onSubmit={postuser}>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">User name</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              placeholder="Insert category name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="name"
              type="text"
              required
            />
            <button type="submit" class="btn btn-primary my-4">
              Add user
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

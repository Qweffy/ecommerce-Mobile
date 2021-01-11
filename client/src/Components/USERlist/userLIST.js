import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./userLIST.css";

const UserLIST = () => {
  const [selectUser, setSelectUser] = useState({
    id: "",
    givenNamename: "",
    familyNamename: "",
    email: "",
    isAdmin: false,
  });

  const [allUsers, setAllUsers] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (allUsers.length === 0) {
      getUser();
    }
    getUser();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true);
    setSelectUser(user);
  };

  async function getUser() {
    var funcGet = await axios.get("http://localhost:4000/user/", {
      headers: { authorization: localStorage.getItem("token") },
    });
    setAllUsers(funcGet.data);
  }

  function handlerEdit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/user/${selectUser.id}`, selectUser, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        var prod = allUsers.findIndex((user) => user.id === res.data.data.id);
        allUsers[prod] = res.data.data;

        handleClose();
      });
  }

  function handlerDelete(id) {
    axios
      .delete(`http://localhost:4000/user/${id}`, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        var news = allUsers.filter((elemt) => elemt.id !== res.data.data.id);
        setAllUsers(news);
      });
  }

  function handleAdmin(e) {
    axios
      .post("http://localhost:4000/auth/promote", {
        id: selectUser.id,
        isAdmin: e.target.checked,
      })
      .then((res) => {
        setAllUsers(
          allUsers.map((user) => {
            if (user.id === selectUser.id) {
              return { ...user, isAdmin: res.data.data.isAdmin };
            } else {
              return user;
            }
          })
        );
        setSelectUser({
          ...selectUser,
          isAdmin: res.data.data.isAdmin,
        });
      });
  }

  return (
    <div className=" container all-users-container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-8">
          <div className=" d-flex bg-dark p-4 all-users-table">
            <Link to="/createuser">
              <button type="button" className="btn btn-secondary btn-sm p-2">
                <i class="fas fa-plus-circle me-2"></i>
                Add new user
              </button>
            </Link>
            <div></div>
            <div></div>
          </div>
          <table className="table table-Light table-striped">
            <thead className="table-secondary">
              <tr className="text-center">
                <th scope="col"></th>
                <th scope="col">User Id</th>
                <th scope="col">Name</th>
                <th scope="col">Lastname</th>
                <th scope="col">Mail</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => {
                const { id, givenName, familyName, email } = user;
                return (
                  <tr className="text-center all-users-content" key={index}>
                    <td className=" d-flex justify-content-between">
                      <button
                        onClick={() => handleShow(user)}
                        type="button"
                        className="btn btn-primary"
                      >
                        <i className="far fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handlerDelete(user.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td>{id}</td>
                    <td>{givenName}</td>
                    <td>{familyName}</td>
                    <td>{email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlerEdit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Id</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder={selectUser.id}
                  type="text"
                  readOnly
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder={selectUser.givenName}
                  name="givenName"
                  type="text"
                  readOnly
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Last name</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder={selectUser.familyName}
                  name="givenName"
                  type="text"
                  readOnly
                />
              </div>
            </div>
            <div class="form-check form-switch form-group row">
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Admin
              </label>
              {selectUser.isAdmin ? (
                <input
                  class="form-check-input"
                  type="checkbox"
                  /* id="flexSwitchCheckDefault" */
                  onChange={handleAdmin}
                  checked
                />
              ) : (
                <input
                  class="form-check-input"
                  type="checkbox"
                  /*  id="flexSwitchCheckDefault" */
                  onChange={handleAdmin}
                />
              )}
            </div>

            <button onClick={handleClose} className="btn btn-secondary mb-2">
              Close
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserLIST;

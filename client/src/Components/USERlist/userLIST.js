import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserLIST = () => {
  const [selectUser, setSelectUser] = useState({
    id: "",
    name: "",
    lastname: "",
    mail: "",
  });

  const [allProducts, setAllProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (allProducts.length === 0) {
      getProducts();
    }
    getProducts();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setSelectUser(product);
  };

  function handleChange(e) {
    setSelectUser({
      ...selectUser,
      [e.target.name]: e.target.value,
    });
  }

  async function getProducts() {
    var funcGet = await axios.get("http://localhost:4000/user/all");
    setAllProducts(funcGet.data);
  }

  function handlerEdit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/user/modify/${selectUser.id}`, selectUser)
      .then((res) => {
        var prod = allProducts.findIndex(
          (product) => product.id === res.data.data.id
        );
        allProducts[prod] = res.data.data;
        handleClose();
      });
  }

  function handlerDelete(id) {
    axios.delete(`http://localhost:4000/user/delete/${id}`).then((res) => {
      var news = allProducts.filter((elemt) => elemt.id !== res.data.data.id);
      setAllProducts(news);
    });
  }

  return (
    <div className=" container mt-3 ">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-8">
          <div className=" d-flex bg-dark p-4">
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
              {allProducts.map((producto, index) => {
                const { id, name, lastname, mail } = producto;
                return (
                  <tr className="text-center" key={index}>
                    <td className=" d-flex justify-content-between">
                      <button
                        onClick={() => handleShow(producto)}
                        type="button"
                        className="btn btn-primary"
                      >
                        <i className="far fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handlerDelete(id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{lastname}</td>
                    <td>{mail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit product</Modal.Title>
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
                  value={selectUser.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Lastname</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  value={selectUser.lastname}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="lastname"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Mail</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  value={selectUser.mail}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="mail"
                  type="mail"
                  required
                />
              </div>
            </div>

            <button onClick={handleClose} className="btn btn-secondary mb-2">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary mb-2">
              Edit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserLIST;

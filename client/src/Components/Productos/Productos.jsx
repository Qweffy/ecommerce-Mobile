import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Productos = () => {
  const [selectProduct, setSelectProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    img: "",
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
    setSelectProduct(product);
  };

  function handleChange(e) {
    setSelectProduct({
      ...selectProduct,
      [e.target.name]: e.target.value,
    });
  }

  async function getProducts() {
    var funcGet = await axios.get("http://localhost:4000/products/");
    setAllProducts(funcGet.data);
  }

  function handlerEdit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/products/${selectProduct.id}`, selectProduct)
      .then((res) => {
        var prod = allProducts.findIndex(
          (product) => product.id === res.data.data.id
        );
        allProducts[prod] = res.data.data;
        handleClose();
      });
  }

  function handlerDelete(id) {
    axios.delete(`http://localhost:4000/products/${id}`).then((res) => {
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
            <Link to="/createproduct">
              <button type="button" className="btn btn-secondary btn-sm p-2">
                <i class="fas fa-plus-circle me-2"></i>
                Add new product
              </button>
            </Link>
            <div></div>
            <div></div>
          </div>
          <table className="table table-Light table-striped">
            <thead className="table-secondary">
              <tr className="text-center">
                <th scope="col"></th>
                <th scope="col">Product Id</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((producto, index) => {
                const { id, name, description, price, stock } = producto;
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
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>{stock}</td>
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
                  placeholder={selectProduct.id}
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
                  value={selectProduct.name}
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
              <label className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  value={selectProduct.description}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="description"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Price</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  value={selectProduct.price}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="price"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Stock</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  value={selectProduct.stock}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="stock"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Image</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  value={selectProduct.img}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="img"
                  type="text"
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

export default Productos;

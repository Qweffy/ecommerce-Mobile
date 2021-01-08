import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faChartPie,
    faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import AddToCart from "../AddToCart/AddToCart.jsx"
import AddToCartInvite from "../AddToCart/AddToCartInvite.jsx"
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
    const { name, price, img, id, stock, ram, storage, camara } = product;
      const { user } = useSelector((state) => state.auth);
    let btnDisabled = false;

    if (stock === 0) btnDisabled = true;

    function renderaddtocartinvite(){
      return (
        <div>
        <AddToCartInvite product={product} id={id} btnDisabled={btnDisabled} />
        </div>
      )
    }

    function renderaddtocartuser(){
      return (
        <div>
        <AddToCart id={id} btnDisabled={btnDisabled}/>
        </div>
      )
    }

    return (
        <div className="product-card pb-2 pt-3 px-1 d-flex">
            <img src={img} alt="img not found" className="product-img mx-0" />
            <div className="product-info p-2 justify-content-between mx-1 mt-1">
                <h4>{name}</h4>
                <div className="d-flex mx-1 my-2">
                    <div className="d-flex align-self-center">
                        <FontAwesomeIcon icon={faCamera} />
                    </div>
                    <div>
                        <p className="product-details">{camara}</p>
                        <p className="product-details">Camera</p>   
                    </div>
                </div>
                <div className="d-flex mx-1 my-2">
                    <div className="d-flex align-self-center">
                        <FontAwesomeIcon icon={faChartPie} />
                    </div>                    
                    <div>
                        <p className="product-details">{storage}</p>
                        <p className="product-details">Internal memory</p>   
                    </div>
                </div>
                <div className="d-flex mx-1 my-2">
                    <div className="d-flex align-self-center">
                        <FontAwesomeIcon icon={faMicrochip} />
                    </div>                     
                    <div>
                        <p className="product-details">{ram}</p>
                        <p className="product-details">RAM</p>   
                    </div>
                </div>
                <h3 className="mx-1 mt-4"><strong>${price}</strong></h3>
            </div>
            {user===undefined? renderaddtocartinvite() : renderaddtocartuser()}
        </div>
    );
}

// Buy button

{/* <div className="mx-1 my-0">
    <AddToCart id={id} btnDisabled={btnDisabled}/>
    <AddToCartInvite product={product} id={id} btnDisabled={btnDisabled} />
</div> */}

export default ProductCard;

import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faChartPie,
    faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    const { name, price, img, id, stock, ram, storage, camara } = product;
    let btnDisabled = false;

    if (stock === 0) btnDisabled = true;

    return (
        <div className="product-card pb-2 pt-3 px-1 m-3 d-flex">
            <img src={img} alt="img not found" className="product-img mx-0" />
            <div className="product-info p-2 justify-content-between mx-1 mt-1">
                <h4>{name}</h4>
                <div className="d-flex m-2">
                    <FontAwesomeIcon icon={faCamera} />
                    <div>
                        <p className="my-0 mx-2">{camara}</p>
                        <p className="my-0 mx-2">Camera</p>   
                    </div>
                </div>
                <div className="d-flex m-2">
                    <FontAwesomeIcon icon={faChartPie} />
                    <div>
                        <p className="my-0 mx-2">{storage}</p>
                        <p className="my-0 mx-2">Internal memory</p>   
                    </div>
                </div>
                <div className="d-flex m-2">
                    <FontAwesomeIcon icon={faMicrochip} />
                    <div>
                        <p className="my-0 mx-2">{ram}</p>
                        <p className="my-0 mx-2">RAM</p>   
                    </div>
                </div>
                <h5 className="product-price"><strong>${price}</strong></h5>
            </div>            
        </div>
    );
}

// Buy button

{/* <div className="mx-1 my-0">
    <AddToCart id={id} btnDisabled={btnDisabled}/>
    <AddToCartInvite product={product} id={id} btnDisabled={btnDisabled} />  
</div> */}

export default ProductCard;

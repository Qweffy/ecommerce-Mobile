import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard.jsx";
import Banner from './Banner/Banner.jsx';

const LandingPage = () => {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        let response = await axios.get("http://localhost:4000/products/");
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Banner />
            <div className="products-grid m-5">
                {
                    products.map((product, index) => {
                        return (
                            <div key={index}>
                            <ProductCard product={product} />
                            </div>
                        );
                    })
                }
            </div>            
        </div>
    )
};

export default LandingPage;
import React, { useEffect , useState} from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard.jsx';
import CategoryCard from '../CategoryCard/CategoryCard.jsx';
import './Catalogue.css';

const Catalogue = () => {
    // Get list of products and categories from DB
    const [allProducts, setAllProducts] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/products/')
        .then((products) => {
            setAllProducts(allProducts.concat(products.data));
        })

        axios.get('http://localhost:4000/category/')
        .then((categories) => {
            setAllCategories(allCategories.concat(categories.data));
        })
    }, []);

    return (
        <div className="m-4">
            <div className="d-flex">
                <div>
                    <CategoryCard categories={allCategories}/>
                </div>
                <div className="products-grid">
                    {
                        allProducts.map((product, index) => {
                            return (
                                <div key={index}>
                                    <ProductCard product={product}/>
                                </div>
                            )
                        })
                    }
                </div>                
            </div>
        </div>
    );
}

export default Catalogue;
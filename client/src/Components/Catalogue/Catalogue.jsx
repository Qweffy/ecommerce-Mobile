import React, { useEffect , useState} from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard.jsx';

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
        <div className='container m-4'>
            <div className="d-flex">
                <div className="categories-column border-right">
                    <div className="categories-header m-3">Categories</div>
                    <div className="categories-list">
                        {
                            allCategories.map((category, index) => {
                                return (
                                    <h3 key={index}>{category.name}</h3>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="cards-category">
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
import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Catalogue = () => {
    // Get store state
    const state = useSelector((state) => state );
    const { products, categories } = state;

    return (
        <div className='container m-4'>
            <div className="d-flex">
                <div className="categories-column border-right">
                    <div className="categories-header m-3">Categories</div>
                    <div className="categories-list">
                        {
                            categories.map((category, index) => {
                                return <h3 key={index}>{category.name}</h3>
                            })
                        }
                    </div>
                </div>
                <div className="cards-category">
                    {
                        products.map(product => {
                            return (
                                <div>
                                    <ProductCard />
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
import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({categories}) => {
    return (
        <div className="mx-5 px-1 py-3 justify-content-center">
            <h4>Categories</h4>
            {
                categories.map(category => {
                    return (
                        <p className="border-bottom p-1">{category.name}</p>
                    )
                })
            }
        </div>
    );
}

export default CategoryCard;
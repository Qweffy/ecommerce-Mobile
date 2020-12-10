import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({categories}) => {
    return (
        <div className="mx-5">
            <h4>Categories</h4>
            {
                categories.map(category => {
                    return (
                        <h4 className="border-bottom py-3 px-1">{category.name}</h4>
                    )
                })
            }
        </div>
    );
}

export default CategoryCard;
import React, { useState } from 'react';
import './CategoryCard.css';

const CategoryCard = ({ categories, onCategoryToggle }) => {   
    
    return (
        <div className="mx-5 px-1 py-3 justify-content-center">
            <h4>Categories</h4>
            {
                categories.map(category => {
                    return (
                        <p onClick={() => onCategoryToggle(category.name)} className="border-bottom p-1">{category.name}</p>
                    )
                })
            }
        </div>
    );
}

export default CategoryCard;
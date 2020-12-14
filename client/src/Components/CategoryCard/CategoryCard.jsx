import React, { useState } from 'react';
import './CategoryCard.css';

const CategoryCard = ({ categories, onCategoryToggle }) => {

    return (
        <div className="categories-col mx-5 px-5 py-3 justify-content-center">
            <h5>Filtered by</h5>
            {
                categories.map(category => {
                    return (
                        <div className="my-3 d-flex align-items-center">
                            <label className="checkbox-inline">
                                <input type="checkbox" 
                                onClick={() => onCategoryToggle(category.name)} 
                                data-toggle="toggle" />
                            </label>
                            <span className="category-name p-3">{category.name}</span>                           
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CategoryCard;
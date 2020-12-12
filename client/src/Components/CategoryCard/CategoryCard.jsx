import React, { useState } from 'react';
import './CategoryCard.css';

const CategoryCard = ({ categories, onCategoryToggle }) => {

    return (
        <div className="mx-5 px-1 py-3 justify-content-center">
            <h4>Categories</h4>
            {
                categories.map(category => {
                    return (
                        <label class="checkbox-inline">
                            <input type="checkbox" 
                            onClick={() => onCategoryToggle(category.name)} 
                            data-toggle="toggle" />{category.name}
                        </label>
                    )
                })
            }
        </div>
    );
}

export default CategoryCard;
import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({categories}) => {
    return (
        <div>
            {
                categories.map(category => {
                    return (
                        <h4>{category.name}</h4>
                    )
                })
            }
        </div>
    );
}

export default CategoryCard;
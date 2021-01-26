import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import './CategoryCard.css';

const CategoryCard = ({ categories, onCategoryToggle }) => {

    return (
        <div className="categories-col justify-content-center">
            <h5> <FontAwesomeIcon icon={faFilter} /> Filtros de búsqueda</h5>
            <div>
              <h5>Marca</h5>
              {
                  categories.map((category, id) => {
                      return (
                          <div key={id} className="my-3 d-flex align-items-center all-categorys-card">
                              <input type="checkbox" 
                              onClick={() => onCategoryToggle(category.name)} 
                              data-toggle="toggle" id={`filt${id}`}/>
                              <label htmlFor={`filt${id}`} className="checkbox-inline">{category.name}</label>
                          </div>
                      )   
                  })
              }
            </div>
        </div>
    );
}

export default CategoryCard;
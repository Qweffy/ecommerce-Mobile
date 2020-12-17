import React from "react";
import './Banner.css';
import Form from '../Form/Form.jsx';

const Banner = () => {
    return (
        <div className="banner d-flex">
            <div className="form-background">
                <Form />
            </div>
        </div>
    )
};

export default Banner;
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

const Sugestions = () => {
const sugestions = useSelector(state => state.sugestions);


function prueba() {
  console.log(sugestions);
}

    return (
        <div>
        <button onClick = {prueba} className="form-btn mt-2">Prueba</button>
        </div>
    )
};

export default Sugestions;

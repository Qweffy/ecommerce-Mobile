import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import './CounterReviews.css'

const CountReviews = () => {
  const user = useSelector((state) => state.auth.user);
  const [reviews, setReviews] = useState()

  const getUserReviews = async ()=>{
    let response = await axios.get(`http://localhost:4000/products/reviews/${user.id}`);
    console.log(response)
    setReviews(response.data.data);
  }

  useEffect(()=>{
    getUserReviews();
  }, [])

  return ( 
    <div className='conten-review'>
      <h1>Tus Reviews</h1>
      <div className='all-orders-us'>
        {reviews && reviews.map(reviews=>{
          console.log(reviews)
          let date = reviews.createdAt.slice(0, -15);
          let short = reviews.description;
          let longDesc = reviews.description.substr(0, 12);
          return(
            <div key={reviews.id} className='individual-order'>
              <div className='order-top'>
                <h5>Creada el {date} </h5>
                <button>Ver mas ...</button>
              </div>
              <div className="order-bot">
                <div className='review-user'>
                  <img src={reviews.product.img} alt="Img not found" />
                  <h5>{reviews.product.name}</h5>
                  <h5> Raiting  <span> {reviews.rating} </span> </h5>
                  <h5> Descripcion 
                     {reviews.description.length > 30 ? <span> {longDesc} </span> 
                      : <span> {short} </span>  }
                  </h5>
                </div> 
                <div>
                  <button>Borrar Reviews</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default CountReviews;
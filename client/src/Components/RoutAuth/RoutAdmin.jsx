import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const RoutAdmin = ({Component}) => {
  const {user} = useSelector(state => state.auth);

  if(user && user.isAdmin){
    return <Component />
  }
  else if(user){
    return <div>No</div>
  }
  return ( 
    <Redirect to={'./login'} />
  );
}
 
export default RoutAdmin;
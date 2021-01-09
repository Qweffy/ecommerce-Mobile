import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const RoutClient = ({Component}) => {
  const {user} = useSelector(state => state.auth);

  if(!user){
    return <Redirect to={'./login'} />
  }

  return ( 
      <Component />
   );
}
 
export default RoutClient;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Message, Panel } from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faChevronRight,
  faStreetView,
  faHistory,
  faSlidersH,
  faInfo,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import CountReviews from './Count/Reviews/CountReviews';
import CountSettings from './Count/Settings/Settings';
import CountSupport from './Count/Support/Support';
import CountShoppings from './Count/Shopping/Shoppings';
import actions from "../../store/Actions/authactions.js";
import './Css/me.css'

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { replace } = useHistory();
  const [opSelect, setOpSelect] = useState('shopping')

  const change = option =>{
    if(option === 'shopping'){
      return setOpSelect(option)
    }
    if(option === 'yourOrder'){
      return setOpSelect(option)
    }
    if(option === 'reviews'){
      return setOpSelect(option)
    }
    if(option === 'settings'){
      return setOpSelect(option)
    }
    if(option === 'support'){
      return setOpSelect(option)
    }
  }

  function logout(){
    dispatch(actions.setUser(null));
    window.localStorage.removeItem("token");
    replace("/");
  }

  return (
    <div className="info-user">
      <div className="bar-left">
        <Avatar
          circle
          size="lg"
          src={user.photoURL || "https://hajiri.co/uploads/no_image.jpg"}
          className='avatar-img'
        />
        <span className='name'>{`${user.givenName} ${user.familyName}`}</span>
        <div className='count-option' onClick={()=>change('shopping')}>
          <span className='option-hover'></span>
          <div className='icon'><FontAwesomeIcon icon={faShoppingBasket } /></div>
          <span className='option-text'>My Shopping</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className='count-option' onClick={()=>change('yourOrder')}>
          <span className='option-hover'></span>
          <div className='icon'><FontAwesomeIcon icon={faStreetView } /></div>
          <span className='option-text'>Track your order</span>
          <FontAwesomeIcon icon={faChevronRight } />
        </div>
        <div className='count-option' onClick={()=>change('reviews')}>
          <span className='option-hover'></span>
          <div className='icon'><FontAwesomeIcon icon={faHistory } /></div>
          <span className='option-text'>My Reviews</span>
          <FontAwesomeIcon icon={faChevronRight } />
        </div>
        <div className='count-option' onClick={()=>change('settings')}>
          <span className='option-hover'></span>
          <div className='icon'><FontAwesomeIcon icon={faSlidersH } /></div>
          <span className='option-text'>Settings</span>
          <FontAwesomeIcon icon={faChevronRight } />
        </div>
        <div className='count-option option-support' onClick={()=>change('support')}>
          <span className='option-hover'></span>
          <div className='icon'><FontAwesomeIcon icon={faInfo } /></div>
          <span className='option-text'>Support</span>
          <FontAwesomeIcon icon={faChevronRight } />
        </div>
        <div className='count-option' onClick = {logout} >
          <span className='option-hover'></span>
          <div className='icon'><FontAwesomeIcon icon={faSignOutAlt } /></div>
          <span className='option-text'>Log Out</span>
        </div>
      </div>
      <div className='user-me'>
        {opSelect === 'shopping' ? (
          <CountShoppings/>
        ): null}
        {opSelect === 'yourOrder' ? (
          <div>yourOrder</div>
        ): null}
        {opSelect === 'reviews' ? (
          <CountReviews/>
        ): null}
        {opSelect === 'settings' ? (
          <CountSettings />
        ): null}
        {opSelect === 'support' ? (
          <CountSupport />
        ): null}
      </div>
    </div>
  );
}

export default App;

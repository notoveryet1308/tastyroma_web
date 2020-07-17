import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { openSideBar } from '../../../Redux/action/openSidebar';
import Logout from '../../common/Logout';
import {
  SideMenu,
  BackBtnContainer,
  NavMenu,
  Navlink,
  Wrapper
} from './style';

function Index() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userReducer);
  const isOpen = useSelector(state => state.sideBar.isOpen);
  const onClickHandler = () => {
    dispatch(openSideBar());
  }
  return (
    <SideMenu handleSideMenu={isOpen ? "100%" : "0"}>
      <BackBtnContainer onClick={onClickHandler}>
        <i class="fas fa-times"></i>
      </BackBtnContainer>
      <NavMenu>
        <div className="makecolumn">
          <Navlink to="/menu-category">Menu</Navlink>
          <Navlink to="/contact-us">Contact us</Navlink>
          <Navlink to="/about-us">About us</Navlink>
        </div>
        <div className="makecolumn">
          <Navlink to="/cart" onClick={onClickHandler}>Cart</Navlink>
          {currentUser.userActive === null &&
            <Wrapper>
              <Navlink to="/login">Login</Navlink>
              <Navlink to="/signup">Sign up</Navlink>
            </Wrapper>
          }
          {
            currentUser.userActive !== null &&
            <Wrapper>
              <Navlink to="/profile">Profile</Navlink>
              <Logout
                backgroundColor="#000"
                textColor="#ffff"
                margin="0 .4rem"
                size="20px"
              />
            </Wrapper>
          }
        </div>
      </NavMenu>
    </SideMenu>
  )
}

export default Index

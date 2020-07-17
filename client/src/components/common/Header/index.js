import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Logout from '../Logout';
import Logo from '../Logo';
import { navMainList } from './utils';
import {
  Container,
  Header,
  NavMenu,
  Navlink,
  Divider,
  Wrapper
} from './style';

function Index({ notHome }) {
  const currentUser = useSelector(state => state.userReducer.userActive);
  const [overlayHeader, setOverlay] = useState(false);
  useEffect(() => {
    if (!notHome) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) setOverlay(true)
        else setOverlay(false)
      })
    }
  }, [overlayHeader]);

  return (
    <>
      {
        !notHome ? <Container
          overlay={overlayHeader ? '#fff' : "#000"}
        >
          <Header>
            <Logo />
            <NavMenu>
              {navMainList.map(menu => <Navlink
                changeNavColor={overlayHeader ? "#000" : "#fff"}
                activeClassName="active"
                to={menu.link}>{menu.name}</Navlink>)}
            </NavMenu>
            <NavMenu>
              <Navlink
                changeNavColor={overlayHeader ? "#000" : "#fff"}
                activeClassName="active"
                to="/cart"
              >
                Cart
          </Navlink>
              <Divider
                changeBarColor={overlayHeader ? "#000" : "#fff"}
              />
              {currentUser === null ? <Wrapper>
                <Navlink
                  changeNavColor={overlayHeader ? "#000" : "#fff"}
                  notHome={notHome ? "#000" : null}
                  to="/login">Login</Navlink>
                <Navlink
                  changeNavColor={overlayHeader ? "#000" : "#fff"}
                  to="/signup">Sign up</Navlink>
              </Wrapper> :
                <Wrapper>
                  <Navlink
                    changeNavColor={overlayHeader ? "#000" : "#fff"}
                    notHome={notHome ? "#000" : null}
                    to="/profile">Profile</Navlink>
                  <Logout
                    textColor={overlayHeader ? "#000" : "#fff"}
                    backgroundColor={overlayHeader ? '#fff' : "#000"}
                    size="16px"
                  />
                </Wrapper>}
            </NavMenu>
          </Header>
        </Container> :
          <Container
            overlay={'#fff'}
          >
            <Header>
              <Logo />
              <NavMenu>
                {navMainList.map(menu => <Navlink
                  changeNavColor={"#000"}
                  activeClassName="active"
                  to={menu.link}>{menu.name}</Navlink>)}
              </NavMenu>
              <NavMenu>
                <Navlink
                  changeNavColor={"#000"}
                  activeClassName="active"
                  to="/cart"
                >
                  Cart
          </Navlink>
                <Divider
                  changeBarColor={"#000"}
                />
                {currentUser === null ?
                  <Wrapper>
                    <Navlink
                      changeNavColor={"#000"}
                      to="/login">Login</Navlink>
                    <Navlink
                      changeNavColor={"#000"}
                      to="/signup">Sign up</Navlink>
                  </Wrapper> :
                  <Wrapper>
                    <Navlink
                      changeNavColor="#000"
                      to="/profile">Profile</Navlink>
                    <Logout
                      textColor="#000"
                      backgroundColor='#fff'
                      size="16px"
                    />
                  </Wrapper>}
              </NavMenu>
            </Header>
          </Container>
      }

    </>
  )
}

export default withRouter(Index)

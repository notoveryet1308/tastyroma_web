import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../Redux/action/user';

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.background};
  margin:  ${props => props.margin};
  
`
const Span = styled.span`
    font-family:'roboto';
    font-size: ${props=> props.size};
    color: ${props => props.color};
    cursor: pointer;
`

function Index({ backgroundColor, textColor, margin , size}) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <LogoutWrapper
      background={backgroundColor}
      margin={margin}
    >
      <Span
        color={textColor}
        onClick={handleLogout}
        size={size}
      >
        Logout
      </Span>
    </LogoutWrapper>
  )
}

export default Index

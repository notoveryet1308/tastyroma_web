import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
 position: fixed;
 width: 100%;
 height: 65px;
 display: block;
 z-index:1;
 background: ${ (props => props.overlay)};
 box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
 @media (max-width: 768px){
   display: none;
 }
`
export const Header = styled.header`
 width: 89%;
 height: 100%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
export const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Navlink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-family: 'roboto';
  font-size: 16px;
  color: ${(props=> props.changeNavColor) || (props=> props.notHome)} ;
  margin: 0 .4rem;
  &::after{
    content: '';
    position: absolute;
    top:70%;
    width: 0;
    height: 0;
    display: block;
    background: rgba(255, 115, 81, .7);
    transition: all 300ms ease-in-out;
    background-blend-mode: darken;
    
  }
  &:hover::after{
    content: '';
    width: 90%;
    height: 6px;
    margin: 0 auto;
  }
`
export const Divider = styled.div`
  width: 3px;
  height: 25px;
  background: ${props => props.changeBarColor};
  margin:0 .3rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
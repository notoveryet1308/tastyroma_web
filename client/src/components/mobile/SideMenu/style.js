import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideMenu = styled.div`
  position: fixed;
  top:0;
  right:0;
  width: ${props => props.handleSideMenu} ;
  height: 100vh;
  overflow: hidden;
  background: #000;
  transition: width 300ms ease-in-out;
  z-index: 2;
`
export const BackBtnContainer = styled.div`
 width: 85%;
 height: 65px;
 margin: 0 auto;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 cursor: pointer;
 .fas{
   color: #fff;
   font-size: 35px;
 }
`
export const NavMenu = styled.nav`
  width:80%;
  margin: 3rem auto;
  display: flex;
  justify-content: space-around;
  .makecolumn{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`
export const Navlink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-family: 'roboto';
  font-size: 20px;
  color: #fff;
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
    width: 40px;
    height: 6px;
    margin: 0 auto;
  }
`
export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`
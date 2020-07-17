import styled from 'styled-components';

export const Conatiner = styled.div`
 position: fixed;
 width: 100%;
 height: 65px;
 z-index: 1;
 padding-top: 1rem;
 background: ${props => props.overlay};
 display: block;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
 @media (min-width:768px) {
   display: none;
 }
 
`
export const Header = styled.header`
 width: 90%;
 height: 100%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 
`
export const SandwichBarConatiner = styled.div`
  width: 42px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .fas {
    margin: 0;
    font-size: 35px;
    color: ${props => props.chnageBarColor};
  }
`
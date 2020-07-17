import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  margin-left: 1.2rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width:768px){
    margin: 0 auto;
  }
`
export const ScrollWrapper = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-clip-box: padding-box;
  scroll-behavior: smooth;
  box-sizing: content-box; 
  margin-top: 1rem;
 

  &::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
	   background-color: rgb(255, 255, 255);
  }
  
  &::-webkit-scrollbar{
	  height: 0px;
  	background-color: rgb(255, 255, 255);
  }
  
  &::-webkit-scrollbar-thumb{
	  background-color: #ffffff;
  }
   
   @media (max-width:767px){
    &:after{
     content: '';
     position: absolute;
     top: 30%;
     right: 0;
     display: block;
     width: 13px;
     height:131px;
     background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,#F0F3F0 95%,#F0F3F0);
    }
  }
  @media (min-width:768px){
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`
export const MenuInfo = styled.div`
  width: 150px;
  height: 125px;
  margin: .5rem;
  border-radius: 10px;
  display: inline-block;
  background-size: cover;
  background-position: top;
  cursor: pointer;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${props => props.img});
  text-align: center;
  .menuCatTitle {
    font-family: 'Lato', sans-serif;
    display: inline-block;
    font-size: 18px;
    text-transform: capitalize;
    margin-top: 3rem;
    color: #fff;
    /* font-weight: 500; */
    letter-spacing: 1px;

  }

  @media (min-width: 768px){
    width: 31.5%;
    height: 200px;
    .menuCatTitle {
      font-size: 25px;
      margin-top: 6rem;
    }
  }
`
export const Label = styled.h3`
  font-size: 20px;
  letter-spacing: 1px;
`

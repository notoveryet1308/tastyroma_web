import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  width: 22%;
 
  /* background: #eee; */
  position: relative;
  margin: 1rem 1rem;


  @media (max-width: 1201px){
    width: 21%;
    /* margin-left: 1.4rem; */
  }
  @media (max-width: 1100px){
    width: 28.5%;
    margin-left: 1.4rem;
  }
  @media (max-width: 904px){
    width: 27%;
  }
  @media (max-width: 750px){
    width: 26%;
  }
  @media (max-width: 684px){
    width: 23%;
  }
  @media (max-width: 650px){
    width: 100%;
  }
`
export const textOpacityAnimation = keyframes`
  0%{
    opacity: 0;
  }
  70%{
    opacity: .2;
  }
  100%{
    opacity:1;
  }
`

export const MenuDisplayBox = styled.div`
  position: relative;
  width: 100%px;
  height: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: -1px -1px  7px rgba(0, 0, 0, .3);
  border-radius: 10px;
  
  @media (max-width: 650px){
    flex-direction: row;
    height:150px ;
    justify-content: space-between;
    margin-left: .5rem;
  }
`
export const MenuDisplayImage = styled.img`
  width: 100%;
  height: 65%;
  border-radius: 10px 10px 0 0;
  
  @media (max-width: 650px){
    width: 30%;
    height: 150px;
    border-radius: 10px;
  }
  
`
export const AddItemBox = styled.div`
 position: absolute;
 top: 65%;
 right:0%;
 width: ${props => props.openAddBox};
 height: 30%;
 border-radius: 0 0 10px 10px;
 transition: width 500ms ease-in-out;
 /* z-index: 1; */
 /* @media (max-width: 913px){
    top: 73%;
  } */
 @media (max-width: 768px){
    top: 65%;
    height: 35%;
  }
@media (max-width: 650px){
    position:relative;
    top:0%;
    height: 100%;
    width: ${props => props.smallDisplayWidth};
    transition: none;
    padding-right: ${props => props.padding};
  }
`
export const BackToMenuInfo = styled.div`
  width: 95%;
  margin: 3px auto;
  height: 20px;
  /* padding-left: 1rem; */
  /* background: #333; */
  display: ${props => props.addBackBtn};
  opacity: ${props => props.opactiy};
  justify-content: flex-end;
  align-items: center;
  .fa-long-arrow-alt-right{
    display: inline-block;
    color: #B9B;
    font-size: 30px;
    padding-top: 15px;
    cursor: pointer;
  }
  /* animation: ${textOpacityAnimation} 300ms ease-in; */
  @media (max-width: 650px){
    margin-top: 1rem;
  }
`
export const MenuDisplayInfoBox = styled.div`
  position: relative;
  width: 95%;
  height: 30%;
  margin: 10px auto;
  padding:  1rem 0 0 1rem;
  display: ${props => props.display};
  justify-content: flex-start;
  flex-direction: column;
  font-family: 'roboto';
  .menuname{
    font-size:16px;
    font-family: 'Lato', sans-serif;
    margin: 3px 0;
    text-transform: capitalize;
    font-weight: 700;

  }
  .menutype{
    font-size: 14px;
    color: rgba(155, 155, 155, 1);
    font-family: inherit;
    text-transform: capitalize;

  }
  .menurating{
    font-size: 15px;
    font-family: inherit;
    display: flex;
    align-items: center;
    font-weight: 700;
    .star{
      margin-left: .4rem;
    }
  }
  .menuprice{
    font-size: 16px;
    margin: 3px 0;
    font-family: inherit;

  }
  .addToCart{
    position: absolute;
    top: 58%;
    right:2%;
    background: #5C6CFD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .2rem .5rem;
     font-family: inherit;
     color: #fff;
     border-radius: 4px;
     cursor: pointer;
    text-transform: capitalize;

  }
  @media (max-width: 650px){
    width: 50%;
    height: 100%;
    margin-top: 1.5rem;
    .addToCart{
      top: 45%;
      right: 0%;
    }
  }
  
`
export const PriceInfoBox = styled.div`
  width: 95%;
  margin: 5px auto;
  display: ${props => props.display};
  animation: ${textOpacityAnimation} .5s linear;
  @media (max-width: 768px){
    width: 100%;
  }
  @media (max-width: 650px){
    width: 100%;
    height: 100%;
    margin-top: .5rem;
    animation: none;
  }

`
export const RadioBoxDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 650px){
    justify-content: space-between;
    padding: 0 1rem;
  }
`
export const RadioWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 8rem;
  @media (max-width: 914px){
    margin-right: 6rem;
  }
  @media (max-width: 768px){
    margin-right: 6rem;
  }
  @media (max-width: 638px){
    margin-right: 4.5rem;
  }
  @media (max-width: 650px){
    margin: 0;
  }
`
export const RadioInput = styled.input`
  width: 70px;
  color: #000;
  border: 1px solid black;
  margin-right: .5rem;
  outline: none;
  @media (max-width: 768px){
    width: 200px;
  }
`
export const Label = styled.span`
  font-size: 16px;
  font-family: 'roboto';
  color: ${props => props.color};
  .fa-rupee-sign{
    color:#251A24;
    margin-right: 4px;
    font-size: 13px;
  }
  @media (max-width: 768px){
    font-size: 14px;
  }
`
export const QuantityPickerBox = styled.div`
  position: absolute;
  top: 65%;
  right: 10%;
  width: ${props => props.width};
  height: 30px;
  display: ${props => props.display};
  border: 2px solid #68C8D6;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 914px){
    right: 5%;
  }
  @media (max-width: 650px){
    margin-right: .8rem;
  }
`
export const Minus = styled.div`
   height: 100%;
   padding: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-right: 2px solid #68C8D6;
  .fa-minus{
    font-size: 15px;
  }
`
export const Quantity = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   .numberInput{
     border: none;
     outline: none;
     background: inherit;
     text-align: center;
     width: 30px;
     font-family: 'roboto';
     font-size: 16px;
   }
`
export const Plus = styled.div`
   height: 100%;
   padding: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-left: 2px solid #68C8D6;
   .fa-plus{
     font-size: 15px;
   }
`
import React from 'react';
import styled from 'styled-components';

import IMAGES from '../../../images'

const CartMenu = styled.div`
 position: relative;
 background: #fff;
 width: 45%;
 height: 150px;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 border-radius: 10px;
 box-shadow: 0px 0px 7px rgba(45, 45, 46, 0.47);
 margin-bottom: 1.5rem;
 .img{
   width: 150px;
   height: 150px;
   border-radius: 10px;
   margin-right: 4rem;
 } 

 @media (max-width: 768px){
   width: 100%;
   margin: 1rem 0;
   .img{
     width: 120px;
     height: 150px;
   }
 }
`
const MenuInfo = styled.div`
  font-family: 'roboto';
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  flex-direction: column;

  .name{
    font-size: 16px;
    color: #333;
    margin-bottom: .3rem;
    font-family:'Lato', sans-serif;
    font-weight: 700;
    
  }
  .quantity{
    font-size: 16px;
    font-family: inherit;
    color: #615B5B;
    margin-bottom: .5rem;
  }
  .price{
    font-size: 16px;
    font-family: inherit;
    color:#615B5B;
    .fa-rupee-sign{
      color: inherit;
      font-size: 15px;
      margin-right: .2rem;
    }
  }
`


export const modifyName = (name) => {
  let nameTest = name.split(" ");
  let newname = nameTest.join("");
  newname = newname.toLowerCase();
  return newname;
}

function Index({name, quantity, price}) {

  let modifiedname = modifyName(name)
  return (
    <CartMenu>
      <img
        src={IMAGES[modifiedname]}
        alt={name}
        className="img"
      />
      <MenuInfo>
        <p className="name">{name}</p>
        <p className="quantity">{quantity}</p>
        <p className="price"><i className="fas fa-rupee-sign"></i>{price}</p>
      </MenuInfo>
    </CartMenu>
  )
}

export default Index

import React from 'react';
import { useSelector } from 'react-redux';

import SideMenu from '../../components/mobile/SideMenu';
import MobHeader from '../../components/mobile/header';
import Header from '../../components/common/Header';
import CartMenu from '../../components/common/CartMenu';
import IMAGES from '../../images'
import styled from 'styled-components';

const CartContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0; 
`
const MenuWrapper = styled.div`
  width: 60%;
  margin: 7rem auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 769px){
    width: 85%;
  }
  @media (min-width: 1200px){
    width: 70%;
  }
  @media (max-width: 768px){
    width: 90%;
    flex-direction: column;
  }
  
`
const PayNowBtn = styled.div`
  cursor: pointer;
  width: 50%;
  padding: .8rem 0;
  margin: 0 auto;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(13, 20, 179, 0.71);
  box-shadow: 2px 2px 10px rgba(72, 89, 240, 0.99);
  border-radius: 5px;
  color: #fff;

  font-family: 'roboto';
  @media (max-width: 768px){
    width: 90%;
  }
`

function Index() {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  let totalPrice = 0;
  for(let i=0; i< cartItems.length; i++){
     totalPrice += cartItems[i].price;
  }
  return (
    <CartContainer>
      <SideMenu />
      <MobHeader notHome={true} />
      <Header notHome={true} />
      <MenuWrapper>
        {cartItems.map(data => (
          <CartMenu  
             name={data.menuname} 
             price={data.price} 
             quantity={data.quantity}
             totalPrice={totalPrice}
          /> )
          )
         }
      </MenuWrapper>
      <PayNowBtn>Pay {totalPrice} INR</PayNowBtn>
    </CartContainer>
  )
}

export default Index

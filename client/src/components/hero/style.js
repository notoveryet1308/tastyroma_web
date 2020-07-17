import styled from 'styled-components';
import heroPoster from '../../img/heroPoster.jpg';

export const HeroContainer = styled.div`
 position: relative;
 width: 100%;
 height: 70vh;
 background-image: url(${heroPoster});
 background-size:cover;
 background-position: top;
 @media (min-width: 768px) {
   height: 97vh;
 }
`
export const ContentWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background:#333; */
  padding-top: 5rem;
  @media screen and (max-width: 400px){
    width: 90%;
  }
`
export const SpanIt = styled.span`
   display: none;
   font-family:'Lato';
   @media (min-width: 768px){
     display: inline;
   }
`
export const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 20px;
  color: #fff;
  letter-spacing: 1.5px;
  font-weight: 400;
  @media  (min-width: 768px) {
    font-size: 26px;
  }
`
export const H2 = styled.h2`
  font-size: 17px;
  color: #fff;
  margin: 1.5rem 1rem;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  @media  (min-width: 768px) {
    margin-top: 2.5rem;
    font-size: 25px;
  }
`
export const ButtonConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  @media  (min-width: 768px) {
    margin-top: 2.5rem;
  }
`
export const MenuBtn = styled.button`
  background: rgba(255, 245, 6, 0.88);
  color: #000;
  padding: .5rem .7rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background:  rgba(255, 245, 6, 0.60);
  }
  @media  (min-width: 768px) {
    font-size: 20px;
  }
`
export const OrderNowBtn = styled.button`
 background: rgba(255, 36, 36, 0.88);
  color: #fff;
  padding: .5rem .7rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 1.5rem;
  &:hover {
    background:  rgba(255, 36, 36, 0.60);
  }
  @media  (min-width: 768px) {
    font-size: 20px;
  }
`
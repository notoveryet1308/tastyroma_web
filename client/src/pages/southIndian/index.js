import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { southIndianMenuInitailize } from '../../Redux/action/southIndian';
import MobHeader from '../../components/mobile/header';
import Header from '../../components/common/Header';
import SideMenu from '../../components/mobile/SideMenu';
import Loading from '../../components/common/Loading';
import MenuCard from '../../components/common/MenuCard';
import IMAGES from './../../images';

import poster426 from '../../img/southIndianPoster/southPoster426.jpg';
import poster591 from '../../img/southIndianPoster/southindiaPosterGimp600.jpg';
import poster728 from '../../img/southIndianPoster/southIndian728.jpg';
import poster1260 from '../../img/southIndianPoster/southIndian1260.jpg';




const SouthIndianContainer = styled.div`
 position: relative;
`
const Section = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageHolder = styled.div`
  width: 90%;
  margin-top: 6rem;
  border-radius: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  
  background-position: center;
  background-size: cover;
  .text-info{
    font-size: 22px;
    color: white;
    letter-spacing: 1px;
  }
  @media (max-width: 499px){
     background-image: linear-gradient(rgba(21, 45, 170, 0.45), rgba(21, 45, 170, 0.45)), url(${poster426});
     height: 30vh;
     .text-info{
       font-size: 15px;
     }
      
  }
  @media (min-width: 500px){
     background-image: linear-gradient(rgba(21, 45, 170, 0.45), rgba(21, 45, 170, 0.45)), url(${poster591});
     height: 30vh;
     .text-info{
       font-size: 16px;
     }
      
  }
  @media (min-width: 743px){
     background-image: linear-gradient(rgba(21, 45, 170, 0.45), rgba(21, 45, 170, 0.45)), url(${poster728});
      height: 30vh;
      .text-info{
        font-size: 22px;
        color: white;
       letter-spacing: 1px;
     }
  }

  @media (min-width: 744px){
     background-image: linear-gradient(rgba(21, 45, 170, 0.45), rgba(21, 45, 170, 0.45)), url(${poster1260});
      /* height: 65vh; */
      height: 45vh;
  }
`
const Spanit = styled.span`
  color: yellow;
`
const MenuTitleBanner = styled.div`
   width: 90%;
   /* height: 40px; */
   margin: 2rem auto;
   margin-bottom: 0rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   /* background: #333; */
`
const MenuTitle = styled.h2`
   font-size: 18px;
   color: #000;
   letter-spacing: 1px;
   @media (min-width: 768px){
     font-size: 20px;
   }
`
const MenuSection = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  flex-wrap: wrap;
  flex: auto;
  @media (max-width: 650px){
    margin: 2rem auto;
  }
`

function Index() {
  const dispatch = useDispatch();
  const southIndianMenu = useSelector(state => state.southIndianReducer);

  useLayoutEffect(() => {
    dispatch(southIndianMenuInitailize());
  }, [])
  return (
    <SouthIndianContainer>
      <SideMenu />
      <MobHeader notHome={true} />
      <Header notHome={true} />
      <Section>
        <ImageHolder>
          <h1 className="text-info">Tasty and delicious <Spanit>South Indian </Spanit>.</h1>
        </ImageHolder>
      </Section>
      <MenuTitleBanner>
        <MenuTitle>South Indian Menus</MenuTitle>
      </MenuTitleBanner>
      <MenuSection>
        {southIndianMenu.loading && <Loading />}
        {!southIndianMenu.loading && southIndianMenu.data.map(menu => < MenuCard key={menu._id} {...menu} images={IMAGES} />)}
      </MenuSection>
    </SouthIndianContainer>
  )
}

export default Index

import React, { useLayoutEffect, useState } from 'react';
import MobHeader from './../../components/mobile/header';
import SideMenu from './../../components/mobile/SideMenu';
import Header from '../../components/common/Header';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { desiItemFetchInitialize } from '../../Redux/action/desi';
import { foodTypeList } from './utils';
import MenuCard from '../../components/common/MenuCard';
import Loading from '../../components/common/Loading';
import IMAGES from '../../images';

import desi_w6azfv_c_scale_w_383 from '../../img/desiposter/desi_w6azfv_c_scale,w_383.jpg';
import desi_w6azfv_c_scale_w_521 from '../../img/desiposter/desi_w6azfv_c_scale,w_521.jpg';
import desi_w6azfv_c_scale_w_743 from '../../img/desiposter/desi_w6azfv_c_scale,w_743.jpg';
import desi_w6azfv_c_scale_w_1302 from '../../img/desiposter/desi_w6azfv_c_scale,w_1302.jpg';



const DesiContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
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
     background-image: linear-gradient(rgba(21, 45, 170, 0.45), rgba(21, 45, 170, 0.45)), url(${desi_w6azfv_c_scale_w_383});
     height: 30vh;
     .text-info{
       font-size: 15px;
     }
      
  }
  @media (min-width: 500px){
     background-image: linear-gradient(rgba(21, 45, 170, 0.45), rgba(21, 45, 170, 0.45)), url(${desi_w6azfv_c_scale_w_521});
     height: 30vh;
     .text-info{
       font-size: 16px;
     }
      
  }
  @media (min-width: 743px){
     background-image: linear-gradient(rgba(21, 45, 170, 0.45), rgba(21, 45, 170, 0.45)), url(${desi_w6azfv_c_scale_w_743});
      height: 30vh;
      .text-info{
        font-size: 22px;
        color: white;
       letter-spacing: 1px;
     }
  }

  @media (min-width: 744px){
     background-image: linear-gradient(rgba(21, 45, 170, 0.45), rgba(21, 45, 170, 0.45)), url(${desi_w6azfv_c_scale_w_1302});
      /* height: 65vh; */
      height: 45vh;
  }
`
const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`


const SpanIt = styled.span`
  color: yellow;
`
const MenuTitleBanner = styled.div`
   width: 90%;
   /* height: 40px; */
   margin: 2rem auto;
   margin-bottom: .7rem;
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
const VegNonVegBox = styled.div`
  width:100px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-right: .5rem;
`
const VegSelector = styled.span`
  font-size: 16px;
  color: ${props => props.color};
  cursor: pointer;
  font-family:'roboto';

`
const NonVegSelector = styled.span`
  font-size: 16px;
  color: ${props => props.color};
  cursor:pointer;
  font-family:'roboto';
`
const FoodTypeBox = styled.div`
  width: 45%;
  margin: 0 auto;
  /* background: #333; */
  justify-content: space-around;
  margin-top: 1.5rem;
  @media (max-width:1150px){
    width: 60%;
  }
  @media (max-width: 880px){
    width: 70%;
  }

  @media (min-width: 768px){
    display: flex;
  }

  @media (max-width: 767px){
    width: 90%;
    display: block;
    overflow-x: scroll;
    white-space: nowrap;
  overflow-clip-box: padding-box;
  scroll-behavior: smooth;
  box-sizing: content-box; 
  text-align: center;
  &::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    
	background-color: rgb(255, 255, 255);
}

&::-webkit-scrollbar
{
	height: 0px;
	background-color: rgb(255, 255, 255);
}

&::-webkit-scrollbar-thumb
{
	background-color: #ffffff;
}
  }
  
`
const FoodType = styled.div`
  display: flex;
  margin: 0 .5rem;
  justify-content: center;
  align-items: center;
  background: rgba(104, 200, 214, 1);
  padding: .2rem .8rem;
  font-family:"roboto";
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
  @media (max-width: 767px){
    width: 100px;
    display: inline-block;
  }
`
const MenuSection = styled.div`
  width: 90%;
  margin: 4rem auto;
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
  const [vegFilter, setVegFilter] = useState(true);
  const dispatch = useDispatch();
  const desiItems = useSelector(state => state.desiReducer);
  useLayoutEffect(() => {
    dispatch(desiItemFetchInitialize());
  }, [])

  // console.log(desiItems.data);
  const showVegOnly = () => {
    setVegFilter(true);
  }
  const showNonVegONly = () => {
    setVegFilter(false);
  }

  return (
    <DesiContainer>
      <SideMenu />
      <MobHeader notHome={true} />
      <Header notHome={true} />
      <Section>
        <ImageHolder >
          <h1 className="text-info">LOVE FOR <SpanIt>DESI</SpanIt> FOOD IS INEVITABLE.</h1>
        </ImageHolder>
      </Section>
      <MenuTitleBanner>
        <MenuTitle>Desi Menu List</MenuTitle>
        <VegNonVegBox>
          <VegSelector
            onClick={showVegOnly}
            color={vegFilter ? "#615EFF" : "#989292"}
          >
            veg
          </VegSelector>
          <NonVegSelector
            onClick={showNonVegONly}
            color= {!vegFilter ? "#615EFF" : "#989292" }
          >
            non-veg
          </NonVegSelector>
        </VegNonVegBox>
      </MenuTitleBanner>
      <FoodTypeBox>
        {
          foodTypeList.map((data, _index) => <FoodType key={_index}>{data.type}</FoodType>)
        }
      </FoodTypeBox>
      {desiItems.loading ? <Loading/> :
        <MenuSection>
          {vegFilter && desiItems.data.map(d => d.isVeg && <MenuCard key={d._id} {...d} images={IMAGES} />)}
          {!vegFilter && desiItems.data.map(d => !d.isVeg && <MenuCard key={d._id} {...d} images={IMAGES} />)}

        </MenuSection>}
    </DesiContainer>
  )
}

export default Index;

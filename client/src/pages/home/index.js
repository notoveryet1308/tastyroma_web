import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Header from '../../components/mobile/header';
import Hero from '../../components/hero';
import MiniDescription from '../../components/common/MiniDes';

import MenuCategory from '../../components/MenuCategory';
import WebHeader from '../../components/common/Header';
import SideMenu from '../../components/mobile/SideMenu';
import Specialmenu from '../../components/SpecailMenu';

const Section = styled.section`
  width: 100%;
  height: auto;
  position: relative;
`
const HomeContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`



function Index() {
  return (
    <HomeContainer>
      <SideMenu />
      <Section>
        <Header notHome={false} />
        <WebHeader notHome={false} />
        <Hero />
      </Section>
      <Section>
        <MiniDescription />
      </Section>
      <Section>
        <MenuCategory />
        <Specialmenu />
      </Section>
    </HomeContainer>
  )
}

export default Index;

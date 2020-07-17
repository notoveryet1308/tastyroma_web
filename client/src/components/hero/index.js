import React from 'react'

import {
  HeroContainer,
  ContentWrapper,
  H1,
  SpanIt,
  H2,
  ButtonConatiner,
  MenuBtn,
  OrderNowBtn
} from './style';

function index() {
  return (
    <HeroContainer>
      <ContentWrapper>
        <H1>We bring you whole new delicious & tasty foods that you won't forget. <SpanIt>
          Visit us or Order Online. Free delivery.
        </SpanIt></H1>
        <H2>Healthy | Tasty | Affordable</H2>
        <ButtonConatiner>
          <MenuBtn>Enjoy our delicious food</MenuBtn>
          {/* <OrderNowBtn>ORDER NOW</OrderNowBtn> */}
        </ButtonConatiner>
      </ContentWrapper>
    </HeroContainer>
  )
}

export default index;

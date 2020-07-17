import React from 'react';
import styled from 'styled-components';

const MinidesContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 2rem auto;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px){
    justify-content: center;
    align-items: center;
  }
`
const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`
const TextInfo = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  text-align: center;
  color: #262726;
  letter-spacing: .8px;
  @media (min-width:768px){
    font-size: 18px;
  }
`
const HorizontalLine = styled.div`
  width: 25%;
  height: 5px;
  background-color: rgba(203, 4, 4, 0.46);
  margin-right: 1rem;
  display: none;
  @media (max-width:768px){
    display: block;
  }
`
const Title = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  @media (min-width:768px){
    font-size: 22px;
  }
`
function index() {
  return (
    <MinidesContainer>
      <FlexWrapper>
        <HorizontalLine />
        <Title>We are Tastyroma.</Title>
      </FlexWrapper>
      <TextInfo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est tincidunt integer elit gravida amet pharetra netus tempor. Ultrices proin adipiscing pellentesqu. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, porro, cum voluptatum pariatur illum quae sunt iure in recusandae ut id? Consectetur, doloremque? Minus dolores temporibus explicabo nulla, tempore at!
      </TextInfo>

    </MinidesContainer>
  )
}

export default index

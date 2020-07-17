import React from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const LogoWrapper = styled.div`
  position: relative;
  width: 145px;
  height: 37px;
  background-color: #CB0404;
  cursor: pointer;
`
const H1 = styled.h1`
  margin-top: 10px; 
  display: inline-block;
  font-size: 20px !important;
  color: #fff;
  letter-spacing: 1px;
  padding-left: 5px;
  
`
function Index({history}) {
  return (
    <LogoWrapper onClick= {()=> history.push('/')}>
      <H1>Tastyroma.</H1>
    </LogoWrapper>
  )
}

export default withRouter(Index);

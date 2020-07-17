import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../common/Logo';
import { openSideBar } from '../../../Redux/action/openSidebar';
import {
  Conatiner,
  Header,
  SandwichBarConatiner
} from './style';

function Index({ notHome }) {
  const dispatch = useDispatch();
  const [overlayHeader, setOverlay] = useState(false);
  useEffect(() => {
    if (!notHome) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) setOverlay(true)
        else setOverlay(false)
      })
    }
  }, [overlayHeader])

  const onClickHandler = (e) => {
    dispatch(openSideBar());
  }

  return (
    <>{
      !notHome ? <Conatiner overlay={overlayHeader ? '#fff' : "#000"}>
        <Header>
          <Logo />
          <SandwichBarConatiner
            chnageBarColor={overlayHeader ? "#000" : "#fff"}
            onClick={onClickHandler}
          >
            <i className="fas fa-bars"></i>
          </SandwichBarConatiner>
        </Header>
      </Conatiner> :
        <Conatiner overlay={'#fff'}>
          <Header>
            <Logo />
            <SandwichBarConatiner
              chnageBarColor={ "#000"}
              onClick={onClickHandler}
            >
              <i className="fas fa-bars"></i>
            </SandwichBarConatiner>
          </Header>
        </Conatiner>
    }
    </>
  )
}

export default Index;

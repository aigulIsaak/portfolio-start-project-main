import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll} from 'react-scroll';

export const GoTopBtn = () => {

  const [showBtn,setshowBtn]=useState(false)
  useEffect( ()=> {
    window.addEventListener('scroll',()=> {
      if(window.scrollY > 200){
        setshowBtn(true)
      }else{
        setshowBtn(false)
      }
    })
  })
    
  
  return (
    <>
    {showBtn &&(
 <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
 <Icon iconId={'goTopBtn'} height={'25'} width={'26'} viewBox={'0 0 26 25'}/>
</StyledGoTopBtn>
    )}
    </>
  );
};

const StyledGoTopBtn =styled.button`
padding:8px;
color:white;
background-color:rgba(0,0,0,0.3);
position:fixed;

right:30px;
bottom:30px;

`
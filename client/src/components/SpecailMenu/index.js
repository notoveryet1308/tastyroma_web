import React from 'react';
import Menucard from '../common/MenuCard';
import styled from 'styled-components';
const Conatiner = styled.div`
  width:100%;
  position: relative;
`
const SpecialmenuWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
export const Label = styled.h3`
  font-size: 20px;
  letter-spacing: 1px;
`
export const Menucontent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 1rem 0;
`
// export const Menucard = styled.div`
//   width: 47%;
//   height: 180px;
//   background: #333;
//   border-radius: 10px;
//   margin: .5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 615px){
//     width: 46%;
//   }

//   @media (max-width: 465px){
//     width: 43.5%;
//   }
//   @media (max-width: 353px){
//     height: 150px;
//   }
// `
// export const MenuLabel = styled.h1`
//   font-size: 18px;
//   font-family:"Lato", sans-serif;
//   color:#fff;
// `

function Index() {

  return (
    <Conatiner>
      <SpecialmenuWrapper>
        <Label>Our speciality</Label>
        <Menucontent>
          <Menucard
            price={[500]}
            type="Special"
            isVeg={false}
            rating="0"
            _id="1"
            name="Chicken Biryani"
          />
          <Menucard
            price={[900]}
            type="Special"
            isVeg={false}
            rating="0"
            _id="2"
            name="Lemon Lavender Short Bread"
          />
          
           <Menucard
            price={[600]}
            type="Special"
            isVeg={false}
            rating="0"
            _id="4"
            name="Masala Roasted Chicken"
          />
           <Menucard
            price={[450, 900 ]}
            type="Special"
            isVeg={false}
            rating="0"
            _id="5"
            name="Mutton Biryani"
          />
           <Menucard
            price={[400]}
            type="Special"
            isVeg={true}
            rating="0"
            _id="3"
            name="Creamy Dal Makhani"
          />
           <Menucard
            price={[350, 500 ]}
            type="Special"
            isVeg={true}
            rating="0"
            _id="6"
            name="Veg Biryani"
          />
        </Menucontent>
      </SpecialmenuWrapper>


    </Conatiner>
  )
}

export default Index

// price, name, type, isVeg, rating, _id, images
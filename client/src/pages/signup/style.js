import styled from 'styled-components';
import signupbackground from '../../img/signupbackground.jpg';

export const SignupContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  align-items: center;
`
export const SignupImage = styled.div`
  width: 100%;
  height:40vh;
  /* display: flex;
  justify-content: flex-end; */
  background-image: linear-gradient( rgba(37, 64, 64, 0.5),  rgba(37, 64, 64, 0.5)),
                    url(${signupbackground});
  background-position: 0;
  background-size: cover;
   @media (max-width: 768px){
    width: 100%;
    height: 30vh;
  }
`
export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(20, 6, 6, 0.4);
`
export const BackgroundInfo = styled.h2`
  font-family: 'Sansita';
  font-size: 35px;
  color: #fff;
  font-style: italic;
  @media (max-width: 768px){
    font-size: 22px;
  }
`

export const LoginLinkOption = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: .5rem auto;
 color: #524F4F;
 font-family: 'roboto';
 .loginlink {
    color: #312F2F;
    font-family: 'roboto';
    text-decoration: underline;
    margin: 0 .5rem;
  }
  @media (min-width: 768px){
     width: 80%;
  }
  @media (max-width: 767px){
     width: 90%;
     font-size: 14px;
  }
`
export const SignupWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  /* background: #eee; */
  margin: 0 auto;
  
  @media (max-width: 768px){
    width: 90%;
  }
`

export const JoinTastyroma = styled.div`
  font-family:'roboto';
  margin: 2rem auto;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 22px;
  background: #FDDD8A;
  padding: .5rem 2rem;
  border-radius: 5px;
  @media (min-width: 768px){
    width: 80%;
  }
  @media (max-width: 767px){
    width: 100%;
    font-size: 18px;
  }
  @media (max-width: 440px){
    width: 100%;
    font-size: 17px;
  }
`
export const InputBox = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 1rem auto;
    margin-bottom: 0rem;
    .flex-wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .forgot-password{
        color: rgba(106, 102, 102, 1);
        font-family: 'roboto';
        text-decoration: underline;
        font-weight: 300;
        margin-right: .5rem;
      }
    }
   .label{
     font-size: 20px;
     font-family: 'roboto';
     margin: 10px 0;
     color: #534E4E;
     .min-char{
       color: #CFCFCF;
       font-size: 14px;
       font-family:'roboto';
     }
   }
   .input{
     background: rgba(231, 227, 227, 1);
     padding: 0 10px;
     caret-color: purple;
     border: none;
     border-radius: 5px;
     height: 35px;
     outline: none;
     font-family:'roboto';
     font-size: 18px;
     color: #5A5C93;
     
   }
   @media (min-width: 768px){
    width: 80%;
  }
   @media (max-width: 768px){
     .label{
        font-size: 18px;
     }
     .flex-wrapper{
       .forgot-password{
         font-size: 14px;
       }
     }
   }
`
export const SignupBtnBox = styled.button`
  margin: 2rem auto;
  margin-bottom: 1rem;
  font-size: 20px;
  font-family:'roboto';
  width: 100%;
  height: 35px;
  background-color: rgba(97, 94, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  &:hover{
    background-color: rgba(97, 94, 255, .8);
    transition: background-color 300ms ease;
  }
  @media (min-width: 768px){
    width: 80%;
    
  }
`
export const NameInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 768px){
    width: 80%;
  }
`
export const MarginDiv = styled.div`
  width:30px;
  height: 100%;
`
export const Form = styled.form``
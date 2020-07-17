import React, { useState, useLayoutEffect } from 'react'
import { Link , Redirect, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../Redux/action/user';

import PulseLoading from '../../components/common/PulseLoading';

import {
  SignupContainer,
  SignupImage,
  Wrapper,
  BackgroundInfo,
  SignupWrapper,
  JoinTastyroma,
  LoginLinkOption,
  Form,
  NameInputBox,
  InputBox,
  SignupBtnBox,
  MarginDiv
} from './style';

function Index({history}) {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userReducer);

  const [userdata, setUserdata] = useState(null);
  const [firstname, setFirstname] = useState("Rahul");
  const [lastname, setLastname] = useState("Raj");
  const [email, setEmail] = useState("rahulraz1308@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [passwordConfirm, setPasswordConfirm] = useState("12345678");

  const handleChangeInput = (e) => {
    if (e.target.name === 'firstname') setFirstname(e.target.value);
    if (e.target.name === 'lastname') setLastname(e.target.value);
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
    if (e.target.name === 'passwordConfirm') setPasswordConfirm(e.target.value);

  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setUserdata({
      name: `${firstname} ${lastname}`,

      email,
      password,
      passwordConfirm
    })
  }

  useLayoutEffect(() => {
    if (userdata) dispatch(signin(userdata));
  }, [userdata])

  return (
    <SignupContainer>
      <SignupImage>
        <Wrapper>
          <BackgroundInfo>
            Let's begin something special
           </BackgroundInfo>
        </Wrapper>
        <SignupWrapper>
          <JoinTastyroma>Join Tastyroma</JoinTastyroma>
          <LoginLinkOption>
            Already have an account ?
            <Link
              className="loginlink"
              to="/login"
            >
              Login
              </Link>
          </LoginLinkOption>
          <Form onSubmit={onSubmitHandler}>
            <NameInputBox>
              <InputBox>
                <span className="label">First name</span>
                <input
                  className="input"
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={handleChangeInput}
                  required
                />
              </InputBox>
              <MarginDiv />
              <InputBox>
                <span className="label">Last name</span>
                <input
                  className="input"
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={handleChangeInput}
                  required
                />
              </InputBox>
            </NameInputBox>
            <InputBox>
              <span className="label">
                Email
              </span>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                required
              />
            </InputBox>
            <InputBox>
              <span className="label">
                Password &nbsp; <span className='min-char'>(min 8 char.)</span>
              </span>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={handleChangeInput}
                required
              />
            </InputBox>
            <InputBox>
              <span className="label">
                Confirm Password
              </span>
              <input
                className="input"
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={handleChangeInput}
                required
              />
            </InputBox>
            <SignupBtnBox type='submit'>
              {userState.signIn ? <PulseLoading /> : "Signup"}
            </SignupBtnBox>
            {
              userState.userActive !== null && <Redirect to={history.goBack()} />
            }
          </Form>
        </SignupWrapper>
      </SignupImage>

    </SignupContainer>
  )
}

export default withRouter(Index)

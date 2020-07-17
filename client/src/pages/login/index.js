import React, { useState, useEffect } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../Redux/action/user';
import PulseLoader from '../../components/common/PulseLoading';
import {
  LoginContainer,
  LoginImage,
  Wrapper,
  BackgroundInfo,
  LoginWrapper,
  WelcomebackTag,
  Form,
  InputBox,
  LoginBtnBox,
  SignupLinkOption
} from './style';


function Index({history}) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userReducer);

  const [logindata, setLogindata] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogindata({
      email,
      password
    });
  }

  useEffect(() => {
    if (logindata) dispatch(login(logindata));
  }, [logindata])

  return (
    <LoginContainer>
      <LoginImage>
        <Wrapper>
          <BackgroundInfo>
            Better Food Better Life.
          </BackgroundInfo>
        </Wrapper>
      </LoginImage>
      <LoginWrapper>
        <WelcomebackTag>Welcome Back !</WelcomebackTag>
        <Form onSubmit={handleSubmit}>
          <InputBox>
            <span className="label">Email</span>
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </InputBox>
          <InputBox>
            <div className="flex-wrapper">
              <span className="label">Password</span>
              <Link
                to='/forgot-password'
                className="forgot-password"
              >Forgot Password ?
            </Link>
            </div>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </InputBox>
          <LoginBtnBox
            type='submit'
          >
          {
            currentUser.login ? <PulseLoader /> :
            "Login"
          }
          </LoginBtnBox>
          {currentUser.userActive !== null && <Redirect to={history.goBack()} />}
          <SignupLinkOption>
            Don't have an account ?
            <Link
              className="joinlink"
              to="/signup">Join</Link>
          </SignupLinkOption>
        </Form>
         
      </LoginWrapper>
    </LoginContainer>
  )
}

export default withRouter(Index);

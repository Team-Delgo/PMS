import React,{useState,useCallback} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userActions } from '../redux/slices/userSlice';
import {tokenActions} from'../redux/slices/tokenSlice';
import './Login.css'

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassWord] = useState("")
  const dispatch = useDispatch();

 const emailHandler = useCallback((e)=>{
    setEmail(e.target.value)
 },[])
 const passwordHandler = useCallback((e)=>{
  setPassWord(e.target.value)
},[])

  const loginHandler = async () => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        email: email,
        password: password,
      });
      console.log('result',result)
      const { code, data } = result.data;
      if (code === 200) {
        dispatch(
          userActions.signin({
            user: {
              adminId: data.adminId,
              email: data.email,
              name: data.name,
              password: data.password,
              phoneNo: data.phoneNo,
              registDt: data.registDt
            }
          }),
        );
        const accessToken = result.headers.authorization_access;
        const refreshToken = result.headers.authorization_refresh;
        dispatch(
          tokenActions.setToken(accessToken),
        );
        localStorage.setItem('refreshToken', refreshToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="background">
      <div>
        <div className="delgo-login">델고 로그인</div>
        <div>
          <input
            className="input-id"
            type="text"
            placeholder="아이디"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div>
          <input
            className="input-password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <div>
          <button type="button" className="login-button" onClick={loginHandler}>GO</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
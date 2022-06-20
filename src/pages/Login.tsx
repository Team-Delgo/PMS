import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="background">
      <div>
        <div className="delgo-login">델고 로그인</div>
        <div>
          <input className="input-id" type="text" placeholder="아이디" />
        </div>
        <div>
          <input
            className="input-password"
            type="text"
            placeholder="비밀번호"
          />
        </div>
        <div>
          <button className="login-button">GO</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
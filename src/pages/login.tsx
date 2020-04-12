import React, { useState, useEffect } from 'react';
import './login.less';
import LoginForm from '@/components/LoginForm';
import { connect, history } from 'umi';

const Login = props => {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (props.login.isLogin) {
      history.replace('/config');
    }
  });

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="title">
          <h1>login</h1>
        </div>
        <div className="login-content">
          <div className="tab-wrapper">
            {['账号登录', '扫码登录'].map((item, index) => (
              <div
                key={index}
                className={`tab-item ${index === tab ? 'active' : ''}`}
                onClick={() => setTab(index)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="login-body">
            {tab == 0 ? <LoginForm {...props} /> : <LoginForm />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(({ login }) => ({
  login,
}))(Login);

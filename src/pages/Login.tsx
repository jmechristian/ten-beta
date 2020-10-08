import React from 'react';
import { Button, Layout, Input, Space, Row, Col } from 'antd';
import { GoogleLogin } from 'react-google-login';
import './Login.css';

const Login: React.FC = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <Layout className='login-container'>
      <Layout.Content className='login-content'>
        <Space direction='vertical' size='large' style={{ width: '100%' }}>
          <Row justify='center'>
            <Col xs={18}>
              <div className='logo-type text-center'>TEN</div>
            </Col>
          </Row>
          <Row justify='center'>
            <Col xs={18}>
              <Input type='email' />
            </Col>
          </Row>
          <Row justify='center'>
            <Col xs={18}>
              <Input.Password placeholder='Enter Password' />
            </Col>
          </Row>
          <Row justify='center'>
            <Col xs={18}>
              <Button type='primary' block href='/start'>
                Login
              </Button>
            </Col>
          </Row>
          <Row justify='center'>
            <Col xs={18}>
              <GoogleLogin
                clientId='90416358328-8cdq0lqt5cp0eqco58f98igaj8im8gll.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </Col>
          </Row>
          <Row justify='center'>
            <Col xs={18}>
              <div className='text-center'>Don't have an account?</div>
            </Col>
          </Row>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Login;

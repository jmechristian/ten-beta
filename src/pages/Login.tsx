import React from 'react';
import { Button, Layout, Input, Space, Row, Col } from 'antd';
import './Login.css';

const Login: React.FC = () => {
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
              <div className='text-center'>Don't have an account?</div>
            </Col>
          </Row>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Login;

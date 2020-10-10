import React from 'react';
import { Input, Row, Col } from 'antd';

interface SignupProps {
  email: string;
  password: string;
  setEmail: any;
  setPassword: any;
  emailError: string;
  passwordError: string;
}

const Signup: React.FC<SignupProps> = props => {
  return (
    <>
      <Row justify='center'>
        <Col xs={18}>
          <Input
            type='email'
            placeholder='Email'
            value={props.email}
            onChange={e => props.setEmail(e.target.value)}
            className='mb-16'
          />
          {props.emailError && <p>{props.emailError}</p>}
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={18}>
          <Input.Password
            placeholder='Password'
            onChange={e => props.setPassword(e.target.value)}
            className='mb-16'
            value={props.password}
          />
          {props.passwordError && <p>{props.passwordError}</p>}
        </Col>
      </Row>
    </>
  );
};

export default Signup;

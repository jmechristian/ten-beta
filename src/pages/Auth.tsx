import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Layout, Space, Row, Col } from 'antd';
import FormContext from '../data/FormContext';
import Login from '../components/Login';
import Signup from '../components/Signup';
import './Auth.css';
import fire from '../firebase';

const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [login, setLogin] = useState(true);
  const history = useHistory();
  const formCtx = useContext(FormContext);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    if (formCtx.user) {
      history.push('/start');
    }

    fire.auth().onAuthStateChanged(user => {
      if (formCtx.user) {
        clearInputs();
        formCtx.setUsers(user);
      } else {
        formCtx.setUsers('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Layout className='login-container'>
      <Layout.Content className='login-content'>
        <Space direction='vertical' size='large' style={{ width: '100%' }}>
          <Row justify='center'>
            <Col xs={18}>
              <div className='logo-type text-center'>TEN</div>
            </Col>
          </Row>
          {login ? (
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              emailError={emailError}
              passwordError={passwordError}
            />
          ) : (
            <Signup
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              emailError={emailError}
              passwordError={passwordError}
            />
          )}

          <Row justify='center'>
            <Col xs={18}>
              <Button
                type='primary'
                block
                onClick={login ? handleLogin : handleSignup}
              >
                {login ? 'Login' : 'Sign Up'}
              </Button>
            </Col>
          </Row>
          <Row justify='center'>
            <Col xs={18}>
              <div className='text-center'>
                {login ? (
                  <>
                    Don't have an account?
                    <span
                      style={{ color: 'white' }}
                      onClick={() => setLogin(!login)}
                    >
                      &nbsp;Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?
                    <span
                      style={{ color: 'white' }}
                      onClick={() => setLogin(!login)}
                    >
                      &nbsp;Sign In
                    </span>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Auth;

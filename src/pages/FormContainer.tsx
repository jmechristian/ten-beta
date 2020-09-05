import React, { useState, useContext } from 'react';
import { Layout, Space, Row, Col, Button, Progress } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import FormContext from '../data/FormContext';

import Resentful from '../components/Resentful';
import Fearful from '../components/Fearful';
import Selfish from '../components/Selfish';
import Dishonest from '../components/Dishonest';
import Obessing from '../components/Obsessing';
import Secrets from '../components/Secrets';
import Harm from '../components/Harm';
import Kindly from '../components/Kindly';
import CheckList from '../components/Checklist';

import './FormContainer.css';

const FormContainer: React.FC = () => {
  const formCtx = useContext(FormContext);
  const [current, setCurrent] = useState(0);

  const steps = [
    <Resentful onSave={formCtx.saveForm} />,
    <Fearful />,
    <Selfish />,
    <Dishonest />,
    <Obessing />,
    <Secrets />,
    <Harm />,
    <Kindly />,
    <CheckList />,
  ];

  const nextHandler = () => {
    setCurrent(prevState => prevState + 1);
  };

  const backHandler = () => {
    setCurrent(prevState => prevState - 1);
  };

  const submitHandler = () => {
    console.log('Done!');
  };

  return (
    <Layout className='form-container'>
      <Layout.Header style={{ padding: '0px 24px' }}>
        <Row
          align='middle'
          justify='space-between'
          className='full-width'
          style={{ height: '100%' }}
        >
          <Link to='/start'>
            <ArrowLeftOutlined style={{ fontSize: '18px', color: 'white' }} />
          </Link>
          <Progress
            showInfo={false}
            percent={(current / (steps.length - 1)) * 100}
            style={{ width: '85%' }}
          />
        </Row>
      </Layout.Header>
      <Layout.Content className='form-content padding-h'>
        <Space direction='vertical' className='full-width' size='large'>
          <Row>{steps[current]}</Row>
          <Row justify='space-between'>
            <Col>
              {current > 0 && (
                <Button onClick={backHandler} type='primary'>
                  Previous
                </Button>
              )}
            </Col>
            <Col>
              {current < steps.length - 1 && (
                <Button type='primary' onClick={nextHandler}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type='primary' onClick={submitHandler}>
                  Done
                </Button>
              )}
            </Col>
          </Row>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default FormContainer;

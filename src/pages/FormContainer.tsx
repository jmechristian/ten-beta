import React, { useState } from 'react';
import { Layout, Space, Row, Col, Button, Progress } from 'antd';
import Resentful from '../components/Resentful';
import Fearful from '../components/Fearful';
import Selfish from '../components/Selfish';
import Dishonest from '../components/Dishonest';
import Obessing from '../components/Obsessing';
import Secrets from '../components/Secrets';
import Harm from '../components/Harm';
import Kindly from '../components/Kindly';

import './FormContainer.css';

const FormContainer: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    <Resentful />,
    <Fearful />,
    <Selfish />,
    <Dishonest />,
    <Obessing />,
    <Secrets />,
    <Harm />,
    <Kindly />,
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
      <Layout.Header>
        <Progress
          showInfo={false}
          percent={(current / (steps.length - 1)) * 100}
        />
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

import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Layout, Space, Row, Col, Button, Progress, Spin } from 'antd';
import { Link } from 'react-router-dom';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckOutlined,
  HomeFilled,
} from '@ant-design/icons';
import FormContext from '../data/FormContext';

import Resentful from '../components/Resentful';
import Fearful from '../components/Fearful';
import Selfish from '../components/Selfish';
import Dishonest from '../components/Dishonest';
import Obsessing from '../components/Obsessing';
import Secrets from '../components/Secrets';
import Harm from '../components/Harm';
import Kindly from '../components/Kindly';
import CheckList from '../components/Checklist';

import './FormContainer.css';

const FormContainer: React.FC = () => {
  const formCtx = useContext(FormContext);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const steps = [
    <Resentful onSave={formCtx.saveForm} />,
    <Fearful onSave={formCtx.saveForm} />,
    <Selfish onSave={formCtx.saveForm} />,
    <Dishonest onSave={formCtx.saveForm} />,
    <Obsessing onSave={formCtx.saveForm} />,
    <Secrets onSave={formCtx.saveForm} />,
    <Harm onSave={formCtx.saveForm} />,
    <Kindly onSave={formCtx.saveForm} />,
    <CheckList />,
  ];

  const nextHandler = () => {
    setCurrent(prevState => prevState + 1);
  };

  const backHandler = () => {
    setCurrent(prevState => prevState - 1);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const submitted = new Date();
    try {
      await axios.post('https://step-ten-server.herokuapp.com/api/entries/', {
        submitted,
        entry: formCtx.entry,
        checklist: formCtx.checklist,
      });
      setLoading(false);
      formCtx.clearForm();
      history.push('/entries');
    } catch (err) {}
    setLoading(false);
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
            <HomeFilled style={{ fontSize: '18px', color: 'white' }} />
          </Link>
          <Progress
            percent={(current / (steps.length - 1)) * 100}
            style={{ width: '90%' }}
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            strokeLinecap='square'
            trailColor='#e6e6e6'
          />
        </Row>
      </Layout.Header>
      <Layout.Content className='form-content padding-h'>
        <Space direction='vertical' className='full-width' size='large'>
          <Spin spinning={loading}>
            <Row>{steps[current]}</Row>
          </Spin>
          <Row justify='space-between'>
            <Col>
              {current > 0 && (
                <Button onClick={backHandler} type='link' ghost>
                  <ArrowLeftOutlined
                    style={{ fontSize: '36px', color: 'black' }}
                  />
                </Button>
              )}
            </Col>
            <Col>
              {current < steps.length - 1 && (
                <Button type='link' onClick={nextHandler} ghost>
                  <ArrowRightOutlined
                    style={{ fontSize: '36px', color: 'black' }}
                  />
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type='link' onClick={submitHandler} ghost>
                  <CheckOutlined style={{ fontSize: '36px', color: 'black' }} />
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

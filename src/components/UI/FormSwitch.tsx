import React from 'react';
import { Row, Switch, Divider } from 'antd';

interface SwitchProps {
  title: string;
}

const FormSwitch: React.FC<SwitchProps> = props => {
  return (
    <>
      <Row justify='space-between'>
        <div style={{ fontSize: '14px', fontWeight: 'bolder' }}>
          {props.title}
        </div>
        <div>
          <Switch />
        </div>
      </Row>
      <Divider style={{ margin: '4px 0px' }} />
    </>
  );
};

export default FormSwitch;

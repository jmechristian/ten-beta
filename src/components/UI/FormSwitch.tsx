import React, { useContext } from 'react';
import { Row, Switch, Divider } from 'antd';
import FormContext from '../../data/FormContext';

interface SwitchProps {
  title: string;
  value: string;
  isChecked: boolean;
}

const FormSwitch: React.FC<SwitchProps> = props => {
  const formCtx = useContext(FormContext);
  return (
    <>
      <Row justify='space-between'>
        <div style={{ fontSize: '14px', fontWeight: 'bolder' }}>
          {props.title}
        </div>
        <div>
          <Switch
            onChange={checked =>
              formCtx.updateChecklist(`${props.value}`, checked)
            }
            checked={props.isChecked}
          />
        </div>
      </Row>
      <Divider style={{ margin: '4px 0px' }} />
    </>
  );
};

export default FormSwitch;

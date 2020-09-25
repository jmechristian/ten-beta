import React, { useContext } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import FormContext from '../data/FormContext';
import { Space } from 'antd';

interface FormProps {
  onSave: (value: string, name: string) => void;
}

const Dishonest: React.FC<FormProps> = props => {
  const formCtx = useContext(FormContext);

  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Was I dishonest?</div>
      <TextArea
        rows={10}
        onChange={e => props.onSave('dishonest', e.target.value.toString())}
        value={formCtx.entry.dishonest}
        name='dishonest'
      />
    </Space>
  );
};

export default Dishonest;

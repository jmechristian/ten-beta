import React, { useContext } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import FormContext from '../data/FormContext';
import { Space } from 'antd';

interface FormProps {
  onSave: (value: string, name: string) => void;
}

const Secrets: React.FC<FormProps> = props => {
  const formCtx = useContext(FormContext);
  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Am I keeping any secrets?</div>
      <TextArea
        rows={10}
        onChange={e => props.onSave('secrets', e.target.value.toString())}
        value={formCtx.entry.secrets}
        name='secrets'
      />
    </Space>
  );
};

export default Secrets;

import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';

import './EntryBox.css';

const EntryBox: React.FC = () => {
  return (
    <Col xs={8}>
      <Link to='/entries/eid'>
        <div className='date-box'>
          <div className='inner-box text-center'>
            <div className='month-day'>AUG</div>
            <div className='day-number'>21</div>
            <div className='month-day'>SAT</div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default EntryBox;

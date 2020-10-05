import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import './EntryBox.css';

interface EntryProps {
  date: Date;
  id: string;
}

const EntryBox: React.FC<EntryProps> = props => {
  return (
    <Col xs={8}>
      <Link to={`/entries/${props.id}`}>
        <div className='date-box'>
          <div className='inner-box text-center'>
            <div className='month-day'>
              <Moment format='MMM'>{props.date}</Moment>
            </div>
            <div className='day-number'>
              <Moment format='DD'>{props.date}</Moment>
            </div>
            <div className='month-day'>
              <Moment format='ddd'>{props.date}</Moment>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default EntryBox;

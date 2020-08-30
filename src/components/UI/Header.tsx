import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'antd';
import { CalendarFilled } from '@ant-design/icons';

interface Icon {
  icon?: any;
  url: string;
}

const Header: React.FC<Icon> = props => {
  return (
    <PageHeader
      title='Hello, Jamie'
      avatar={{ src: 'https://randomuser.me/api/portraits/men/32.jpg' }}
      extra={
        <Link
          to={props.url}
          style={{ color: 'white', fontSize: '18px', margin: '4px 0px' }}
        >
          {props.icon}
        </Link>
      }
      style={{ background: 'black', color: 'white' }}
    />
  );
};

export default Header;

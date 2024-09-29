import { Icon } from 'antd';
import React from 'react';

const IconText = ({ type, text, score }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} name={text} />
    {`${text}: ${score}/5`}
  </span>
);

export default IconText;

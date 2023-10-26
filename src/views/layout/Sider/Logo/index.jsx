import logo from '@/assets/images/logo.svg';
import React from 'react';
import './index.less';
const Logo = () => {
  return (
    <div className="sidebar-logo-container">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <h1 className="sidebar-title">高天阳前端简历</h1>
    </div>
  );
};

export default Logo;

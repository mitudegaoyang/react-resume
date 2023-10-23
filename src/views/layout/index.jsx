import { Layout } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import Header from './Header';
import RightPanel from './RightPanel';
import Sider from './Sider';
import TagsView from './TagsView';
const Main = (props) => {
  const { tagsView } = props;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout
        onScroll={(e) => {
          window.$scrollTop = e.target.scrollTop;
          window.$scrollHeight = e.target.scrollHeight;
          window.$clientHeight = e.target.clientHeight;
        }}
      >
        <Header />
        {tagsView ? <TagsView /> : null}
        <Content />
        <RightPanel />
      </Layout>
    </Layout>
  );
};
export default connect((state) => state.settings)(Main);

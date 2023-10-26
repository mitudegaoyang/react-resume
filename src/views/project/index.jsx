import { deleteItem, editItem, projectList } from '@/api/project';
import ImagePreview from '@/components/ImagePreview';
import {
  Avatar,
  Button,
  Card,
  Collapse,
  Form,
  Icon,
  Input,
  List,
  Pagination,
  Select,
  Tag,
  message
} from 'antd';
import React, { Component } from 'react';
import './index.less';
// import EditForm from './forms/editForm';
const { Panel } = Collapse;
const statusEnum = {
  active: { label: '内网上线', color: 'blue' },
  published: { label: '已上线', color: 'green' },
  close: { label: '已下线', color: '' }
};
const tagsEnum = {
  react: { label: 'React', color: '#61dafb' },
  vue: { label: 'Vue', color: '#4fc08d' },
  antd: { label: 'antd', color: '#0170fe' },
  iView: { label: 'iView', color: '#2d8cf0' },
  vux: { label: 'Vux', color: '#35495e' },
  elementUI: { label: 'ElementUI', color: '#409efe' },
  vueElementAdmin: { label: 'vue-element-admin', color: '#4caf50' },
  weex: { label: 'Weex', color: '#3aabf4' },
  singleSpa: { label: 'single-spa', color: '#ee689f' },
  ice: { label: 'ice', color: '#6047de' },
  echarts: { label: 'echarts', color: '#e43961' },
  cloudCharts: { label: 'cloud-charts', color: '#ff8200' },
  formilyjs: { label: 'formilyjs', color: '#4d1db5' },
  html: { label: 'HTML5', color: '#f60' },
  css: { label: 'CSS3', color: '#f90' },
  js: { label: 'js', color: '#ffda3f' },
  jsp: { label: 'JSP', color: '#2952a4' },
  angular: { label: 'angular', color: '#eb5a5c' },
  fuse: { label: 'Fuse-angular', color: '#2877c1' },
  emotion: { label: 'emotion', color: '#c43bad' },
  tggLargeScreen: { label: 'tgg-large-screen', color: '#612aaa' }
};
class TableComponent extends Component {
  _isMounted = false; // 这个变量是用来标志当前组件是否挂载
  state = {
    list: [],
    loading: false,
    total: 0,
    listQuery: {
      pageNumber: 1,
      pageSize: 10,
      title: '',
      star: '',
      status: ''
    },
    editModalVisible: false,
    editModalLoading: false,
    currentRowData: {
      id: 0,
      author: '',
      date: '',
      readings: 0,
      star: '★',
      status: 'published',
      title: ''
    }
  };
  fetchData = () => {
    this.setState({ loading: true });
    projectList(this.state.listQuery).then((response) => {
      this.setState({ loading: false });
      const list = response.data.data.items;
      const total = response.data.data.total;
      if (this._isMounted) {
        this.setState({ list, total });
      }
    });
  };
  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  filterTitleChange = (e) => {
    let value = e.target.value;
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        title: value
      }
    }));
  };
  filterStatusChange = (value) => {
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        status: value
      }
    }));
  };
  filterTagsChange = (value) => {
    this.setState((state) => ({
      listQuery: {
        ...state.listQuery,
        tags: value
      }
    }));
  };
  changePage = (pageNumber, pageSize) => {
    this.setState(
      (state) => ({
        listQuery: {
          ...state.listQuery,
          pageNumber
        }
      }),
      () => {
        this.fetchData();
      }
    );
  };
  changePageSize = (current, pageSize) => {
    this.setState(
      (state) => ({
        listQuery: {
          ...state.listQuery,
          pageNumber: 1,
          pageSize
        }
      }),
      () => {
        this.fetchData();
      }
    );
  };
  handleDelete = (row) => {
    deleteItem({ id: row.id }).then((res) => {
      message.success('删除成功');
      this.fetchData();
    });
  };
  handleEdit = (row) => {
    this.setState({
      currentRowData: Object.assign({}, row),
      editModalVisible: true
    });
  };

  handleOk = (_) => {
    const { form } = this.formRef.props;
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        ...fieldsValue,
        star: ''.padStart(fieldsValue['star'], '★'),
        date: fieldsValue['date'].format('YYYY-MM-DD HH:mm:ss')
      };
      this.setState({ editModalLoading: true });
      editItem(values)
        .then((response) => {
          form.resetFields();
          this.setState({ editModalVisible: false, editModalLoading: false });
          message.success('编辑成功!');
          this.fetchData();
        })
        .catch((e) => {
          message.success('编辑失败,请重试!');
        });
    });
  };

  handleCancel = (_) => {
    this.setState({
      editModalVisible: false
    });
  };

  render() {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return (
      <div className="app-container project-container">
        <Collapse defaultActiveKey={['1']}>
          <Panel header="筛选" key="1">
            <Form layout="inline">
              <Form.Item label="标题:">
                <Input onChange={this.filterTitleChange} allowClear placeholder="请输入标题" />
              </Form.Item>
              <Form.Item label="标签:">
                <Select
                  style={{ width: 220 }}
                  onChange={this.filterTagsChange}
                  allowClear
                  placeholder="请选择标签"
                >
                  {Object.keys(tagsEnum).map((item) => {
                    return (
                      <Select.Option value={item} key={item}>
                        {tagsEnum[item].label}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item label="状态:">
                <Select
                  style={{ width: 120 }}
                  onChange={this.filterStatusChange}
                  allowClear
                  placeholder="请选择状态"
                >
                  {Object.keys(statusEnum).map((item) => {
                    return (
                      <Select.Option value={item} key={item}>
                        {statusEnum[item].label}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" icon="search" onClick={this.fetchData}>
                  搜索
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
        <br />
        <Card>
          <List
            itemLayout="vertical"
            size="large"
            pagination={false}
            dataSource={this.state.list}
            loading={this.state.loading}
            // footer={
            //   <div>
            //     <b>ant design</b> footer part
            //   </div>
            // }
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                  <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                  <IconText type="message" text="2" key="list-vertical-message" />
                ]}
                extra={
                  item.img && (
                    <ImagePreview key={item.title} width={272} alt="logo" src={item.img} />
                  )
                }
              >
                <List.Item.Meta
                  avatar={
                    item.company.src ? (
                      <Avatar src={item.company.src} />
                    ) : (
                      <Avatar
                        style={{
                          backgroundColor: item.company.color,
                          verticalAlign: 'middle',
                          opacity: 0.8
                        }}
                        src={item.company.src}
                      >
                        {item.company.name}
                      </Avatar>
                    )
                  }
                  title={
                    <>
                      {item.href ? <a href={item.href}>{item.title}</a> : <span>{item.title}</span>}
                      <span className="status-wrapper"> ({statusEnum[item.status].label})</span>
                    </>
                  }
                  description={
                    <>
                      {item.tags.map((tag) => {
                        return (
                          <Tag color={tagsEnum[tag].color} key={tag}>
                            {tagsEnum[tag].label}
                          </Tag>
                        );
                      })}
                      <span className="date-wrapper">{item.date}</span>
                    </>
                  }
                />
                {item.description.map((ditem, index) => {
                  return <p key={index}>{ditem}</p>;
                })}
                <ul className="content-wrapper">
                  {item.content.map((citem, index) => {
                    return <li key={index}>{citem}</li>;
                  })}
                </ul>
              </List.Item>
            )}
          />
        </Card>
        <br />
        <Pagination
          total={this.state.total}
          pageSizeOptions={['10', '20', '40']}
          showTotal={(total) => `共${total}条数据`}
          onChange={this.changePage}
          current={this.state.listQuery.pageNumber}
          onShowSizeChange={this.changePageSize}
          showSizeChanger
          showQuickJumper
          hideOnSinglePage={false}
        />
        {/* <EditForm
          currentRowData={this.state.currentRowData}
          wrappedComponentRef={(formRef) => (this.formRef = formRef)}
          visible={this.state.editModalVisible}
          confirmLoading={this.state.editModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        /> */}
      </div>
    );
  }
}

export default TableComponent;

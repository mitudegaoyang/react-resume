import { projectList } from '@/api/project';
import { statusEnum, tagsEnum } from '@/config/constants';
import { Card, Collapse, List, Pagination } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import FilterForm from './FilterForm';
import './index.less';
import ListItem from './ListItem';

const { Panel } = Collapse;

const TableComponent = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [listQuery, setListQuery] = useState({
    pageNumber: 1,
    pageSize: 10,
    title: '',
    star: '',
    status: '',
    tags: ''
  });

  const filterOptions = useMemo(
    () => ({
      status: Object.keys(statusEnum).map((item) => ({
        value: item,
        label: statusEnum[item].label
      })),
      tags: Object.keys(tagsEnum).map((item) => ({
        value: item,
        label: tagsEnum[item].label
      }))
    }),
    []
  );

  const handleFilterChange = (key, value) => {
    setListQuery((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const changePage = (pageNumber, pageSize) => {
    setListQuery((prev) => ({
      ...prev,
      pageNumber
    }));
  };
  const changePageSize = (current, pageSize) => {
    setListQuery((prev) => ({
      ...prev,
      pageNumber: 1,
      pageSize
    }));
  };

  // Fetch data
  useEffect(() => {
    let isMounted = true;

    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const response = await projectList(listQuery);
        if (!isMounted) return; // 如果组件已卸载，则不更新状态
        setLoading(false);
        let { items: list, total } = response.data.data;
        setList(list);
        setTotal(total);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchDataAsync();

    return () => {
      isMounted = false;
    };
  }, [listQuery]); // 依赖项数组

  return (
    <div className="app-container project-container">
      <Collapse defaultActiveKey={['filter']}>
        <Panel header="筛选" key="filter">
          <FilterForm onFilterChange={handleFilterChange} options={filterOptions} />
        </Panel>
      </Collapse>
      <br />
      <Card>
        <List
          itemLayout="vertical"
          size="large"
          pagination={false}
          dataSource={list}
          loading={loading}
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
          renderItem={(item) => (
            <ListItem item={item} statusEnum={statusEnum} tagsEnum={tagsEnum} />
          )}
        />
      </Card>
      <br />
      <Pagination
        total={total}
        pageSizeOptions={['10', '20', '40']}
        showTotal={(total) => `共${total}条数据`}
        onChange={changePage}
        current={listQuery.pageNumber}
        onShowSizeChange={changePageSize}
        showSizeChanger
        showQuickJumper
        hideOnSinglePage={false}
      />
      {/* <EditForm
          currentRowData={currentRowData}
          wrappedComponentRef={(formRef) => (this.formRef = formRef)}
          visible={editModalVisible}
          confirmLoading={editModalLoading}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        /> */}
    </div>
  );
};

export default TableComponent;

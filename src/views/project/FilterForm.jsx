import { Form, Input, Select } from 'antd';
import _ from 'lodash';
import React, { memo, useCallback } from 'react';

const FilterForm = memo(({ onFilterChange, options }) => {
  // 使用 lodash 的 debounce 函数来创建一个防抖的 handleTitleChange 函数
  const handleTitleChange = useCallback(
    _.debounce((value) => {
      onFilterChange('title', value);
    }, 1000), // 1000 毫秒（1 秒）
    [onFilterChange]
  );

  const handleStatusChange = (value) => {
    onFilterChange('status', value);
  };

  const handleTagsChange = (value) => {
    onFilterChange('tags', value);
  };

  return (
    <Form layout="inline">
      <Form.Item label="标题:">
        <Input
          onChange={(e) => handleTitleChange(e.target.value)}
          allowClear
          placeholder="请输入标题"
        />
      </Form.Item>
      <Form.Item label="标签:">
        <Select
          style={{ width: 220 }}
          onChange={handleTagsChange}
          allowClear
          placeholder="请选择标签"
        >
          {options.tags.map((item) => {
            return (
              <Select.Option value={item.value} key={item.value}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="状态:">
        <Select
          style={{ width: 120 }}
          onChange={handleStatusChange}
          allowClear
          placeholder="请选择状态"
        >
          {options.status.map((item) => {
            return (
              <Select.Option value={item.value} key={item.value}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      {/* <Form.Item>
          <Button type="primary" icon="search" onClick={fetchData}>
            搜索
          </Button>
        </Form.Item> */}
    </Form>
  );
});

export default FilterForm;

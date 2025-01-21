import { Button, Card, Form, InputNumber, List, Select, Switch } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less'; // 导入样式作为模块
import { distributeRedEnvelope } from './utils';

const { Option } = Select;

const RedEnvelopeDistributor = () => {
  const [totalAmount, setTotalAmount] = useState(100); // 总金额
  const [numPeople, setNumPeople] = useState(10); // 参与人数
  const [distributionType, setDistributionType] = useState('linear-decrease'); // 分配类型
  const [results, setResults] = useState([]); // 分配结果
  const [isDescending, setIsDescending] = useState(true); // 排序方式，默认为倒序

  const handleSubmit = (event) => {
    // event.preventDefault();
    try {
      const amounts = distributeRedEnvelope(totalAmount, numPeople, 0.01, distributionType);
      console.log(amounts);
      setResults(amounts);
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleSortOrder = (value) => {
    setIsDescending(value);
    // 对结果进行重新排序
    if (results.length > 0) {
      const sortedResults = [...results].sort((a, b) => (value ? b - a : a - b));
      setResults(sortedResults);
    }
  };

  return (
    <div className="app-container">
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Item label="总金额">
            <InputNumber
              min={0}
              value={totalAmount}
              onChange={(value) => setTotalAmount(value)}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item label="参与人数">
            <InputNumber
              min={1}
              value={numPeople}
              onChange={(value) => setNumPeople(value)}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item label="分配类型">
            <Select
              value={distributionType}
              onChange={setDistributionType}
              style={{ width: '100%' }}
            >
              <Option value="normal">正态分布</Option>
              <Option value="extreme">两极分布</Option>
              <Option value="random">随机分布</Option>
              <Option value="uniform">均匀分布</Option>
              <Option value="linear-decrease">线性递减</Option>
              <Option value="exponential">指数分布</Option>
              <Option value="multi-peak">多峰分布</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              分配红包
            </Button>
          </Form.Item>
        </Form>
        <h2>分配结果:</h2>
        <List
          header={
            <Switch
              checkedChildren="倒序"
              unCheckedChildren="正序"
              defaultChecked
              onChange={toggleSortOrder}
            />
          }
          bordered
          dataSource={results}
          renderItem={(item, index) => (
            <List.Item key={index} className={styles['list-item']}>
              <div className={styles.normal}>
                第{isDescending ? results.length - index : index + 1}位:
              </div>
              <div className={styles.bold}>红包金额: {item.toFixed(2)}元</div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default RedEnvelopeDistributor;

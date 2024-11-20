import { Button, Card, Form, InputNumber, List } from 'antd';
import React, { useEffect, useState } from 'react';
import { calculateMonthlyValues, getInitialValue } from './utils';
const Calculator = () => {
  const [initialAmount, setInitialAmount] = useState(getInitialValue('initialAmount', 0)); // 初始金额
  const [invest, setInvest] = useState(getInitialValue('invest', 1000)); // 每月定投金额
  const [rate, setRate] = useState(getInitialValue('rate', 10)); // 年化收益率
  const [period, setPeriod] = useState(getInitialValue('period', 11)); // 投资期限
  const [values, setValues] = useState([]); // 计算结果

  const handleSubmit = (event) => {
    event.preventDefault();
    const monthlyValues = calculateMonthlyValues(invest, rate, period, initialAmount);
    setValues(monthlyValues);
  };

  useEffect(() => {
    // 监听输入值的变化，并将新的值保存到 localStorage
    localStorage.setItem('initialAmount', initialAmount);
    localStorage.setItem('invest', invest);
    localStorage.setItem('rate', rate);
    localStorage.setItem('period', period);
  }, [invest, rate, period]);

  return (
    <div className="app-container">
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form.Item name="initialAmount" label="初始金额">
            <InputNumber
              min={0}
              value={initialAmount}
              onChange={(value) => setInitialAmount(value)}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item name="invest" label="每月定投金额">
            <InputNumber
              min={0}
              value={invest}
              onChange={(value) => setInvest(value)}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item name="rate" label="年化收益率(%)">
            <InputNumber
              min={0}
              value={rate}
              onChange={(value) => setRate(value)}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item name="months" label="累计月份">
            <InputNumber
              min={1}
              value={period}
              onChange={(value) => setPeriod(value)}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              计算
            </Button>
          </Form.Item>
        </Form>
        <h2>计算结果:</h2>
        <List
          bordered
          dataSource={values}
          renderItem={(value, index) => (
            <List.Item>
              第{index + 1}个月初的账户价值: {value}
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Calculator;
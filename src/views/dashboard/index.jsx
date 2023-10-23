import React from 'react';
import ScrollAnimation from './components/ScrollAnimation';
import './index.less';

const Dashboard = () => {
  return (
    <div className="app-container">
      <ScrollAnimation />

      {/* <a
        href="https://github.com/NLRX-WJC/react-antd-admin-template"
        target="_blank"
        rel="noopener noreferrer"
        className="github-corner"
      ></a> */}

      {/* <PanelGroup handleSetLineChartData={handleSetLineChartData} />

      <LineChart
        chartData={lineChartData}
        styles={{
          padding: 12,
          backgroundColor: '#fff',
          marginBottom: '25px'
        }}
      />

      <Row gutter={32}>
        <Col xs={24} sm={24} lg={8}>
          <div className="chart-wrapper">
            <RaddarChart />
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="chart-wrapper">
            <PieChart />
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="chart-wrapper">
            <BarChart />
          </div>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{ paddingRight: '8px', marginBottom: '30px' }}
        >
          <TransactionTable />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ marginBottom: '30px' }}>
          <BoxCard />
        </Col>
      </Row> */}
    </div>
  );
};

export default Dashboard;

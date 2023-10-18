import EXPCONFIG from '@/config/expConfig.ts'; // 引如工作经历数据
import { Card, Icon, Timeline } from 'antd';
import dayjs from 'dayjs';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';

const data = [
  {
    title: 'Author',
    key: 'author',
    dataIndex: 'author',
    width: 100,
    align: 'center',
    info: 'Create a services site 2015-09-01',
    dot: <Icon type="clock-circle-o" style={{ fontSize: '16px' }} />
  }
];

class Experience extends Component {
  state = {
    chart: null
  };

  render() {
    return (
      <div className="app-container">
        <Card title="工作经历">
          <Timeline mode="alternate">
            {EXPCONFIG.map((item, index) => {
              return (
                <Timeline.Item color={index % 2 === 0 ? '#FFAD2C' : '#50ABF8'} dot={item.dot}>
                  <div
                    className="time-wrapper"
                    style={{ color: index % 2 === 0 ? '#FFAD2C' : '#50ABF8' }}
                  >
                    {`${dayjs(item.startTime).format('YYYY.MM')} - ${
                      dayjs(item.endTime).format('YYYY.MM') !== 'Invalid date'
                        ? dayjs(item.endTime).format('YYYY.MM')
                        : '至今'
                    }
                    `}
                  </div>
                  <p>
                    <span className="title-wrapper">{item.title}</span>
                    <span className="job-wrapper">{item.job}</span>
                  </p>
                  <p className="content-wrapper">{item.content}</p>
                  {item.describe.map((dItem) => {
                    return <p className="describe-wrapper">{dItem}</p>;
                  })}
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Card>
      </div>
    );
  }
}

export default connect((state) => state.app)(Experience);

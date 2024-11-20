import TECHNOLOGYCONFIG from '@/config/technologyConfig.ts'; // 引如工作经历数据
import echarts from '@/lib/echarts';
import { debounce } from '@/utils';
import { Card } from 'antd';
import 'echarts-wordcloud';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordCloudChart extends Component {
  state = {
    chart: null
  };

  componentDidMount() {
    debounce(this.initChart.bind(this), 300)();
    window.addEventListener('resize', () => this.resize());
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.sidebarCollapsed !== this.props.sidebarCollapsed) {
      this.resize();
    }
  }

  componentWillUnmount() {
    this.dispose();
  }

  resize() {
    const chart = this.state.chart;
    if (chart) {
      debounce(chart.resize.bind(this), 300)();
    }
  }

  dispose() {
    if (!this.state.chart) {
      return;
    }
    window.removeEventListener('resize', () => this.resize()); // 移除窗口，变化时重置图表
    this.setState({ chart: null });
  }

  setOptions() {
    const data = TECHNOLOGYCONFIG;

    let maskImage = new Image(); //可以根据图片形状生成有形状的词云图
    maskImage.src = require('@/assets/images/cloud.png');
    maskImage.onload = () => {
      this.state.chart.setOption({
        backgroundColor: '#fff',
        grid: {
          left: '25%',
          right: '25%'
        },
        title: {
          text: '',
          top: '16px',
          left: '24px',
          textStyle: {
            fontSize: 16,
            color: '#000',
            fontWeight: 'normal'
          }
        },
        series: [
          {
            type: 'wordCloud',
            left: '10%', // X轴偏移量
            top: '0%', // Y轴偏移量
            width: '80%', // canvas宽度大小
            height: '100%', // canvas高度大小
            sizeRange: [12, 50], //  词典字体大小范围配置
            rotationRange: [0, 0], // 词典字体旋转角度配置，默认不旋转
            gridSize: 25, // 词典字体间距配置
            layoutAnimation: true, // 为false词典过度会阻塞
            maskImage: maskImage,
            textStyle: {
              // 词典样式配置
              normal: {
                color() {
                  // 颜色随机渐变
                  let colors = [
                    '#c04851',
                    '#f1939c',
                    '#2b73af',
                    '#0f59a4',
                    '#c3d7df',
                    '#1ba784',
                    '#8cc269',
                    '#fed71a',
                    '#ff9900',
                    '#f26b7f'
                  ];
                  return colors[parseInt(Math.random() * 10)];
                }
              }
            },
            // 渲染词典数据
            data: data
          }
        ],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay(idx) {
          return idx * 20;
        },
        animationDelayUpdate(idx) {
          return idx * 20;
        }
      });
    };
  }

  initChart() {
    if (!this.el) return;
    this.setState({ chart: echarts.init(this.el, 'macarons') }, () => {
      this.setOptions();
    });
  }
  render() {
    return (
      <div className="app-container">
        <Card title="擅长技术">
          <div style={{ width: '100%', height: 'calc(100vh - 250px)' }}>
            <div style={{ width: '100%', height: '100%' }} ref={(el) => (this.el = el)}></div>
          </div>
        </Card>
      </div>
    );
  }
}

export default connect((state) => state.app)(WordCloudChart);

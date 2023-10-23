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
    const data = [
      {
        value: '50', // 词典大小配置
        name: '前端工程师', // 词典名称配置
        textStyle: {
          // 单独配置某个词典样式
          shadowBlur: 4,
          shadowOffsetY: 14,
          color: '#fff'
        }
      },
      { value: '30', name: 'Html5' },
      { value: '30', name: 'Css3' },
      { value: '30', name: 'Vue' },
      { value: '30', name: 'React' },
      { value: '30', name: 'JS' },
      { value: '30', name: 'AJAX' },
      { value: '30', name: 'ES6' },
      { value: '30', name: '持续集成' },
      { value: '30', name: 'Git' },
      { value: '30', name: 'PS' },
      { value: '25', name: 'Html' },
      { value: '20', name: '标签与属性' },
      { value: '20', name: '语义化' },
      { value: '20', name: '元素类型(块级、行内等)' },
      { value: '20', name: 'viewport' },
      { value: '20', name: 'web Compinents' },
      { value: '25', name: 'Css' },
      { value: '20', name: '选择器' },
      { value: '20', name: '样式权重' },
      { value: '20', name: '常用样式' },
      { value: '20', name: '布局' },
      { value: '15', name: '盒子模型' },
      { value: '15', name: '水平垂直居中' },
      { value: '15', name: '相对、绝对、固定定位' },
      { value: '15', name: 'inline-block' },
      { value: '15', name: 'float' },
      { value: '15', name: 'flex' },
      { value: '20', name: '适配方案' },
      { value: '15', name: '等比适配' },
      { value: '10', name: 'fexlble' },
      { value: '10', name: 'viewport' },
      { value: '15', name: '流式布局' },
      { value: '15', name: '媒体查询' },
      { value: '20', name: '过渡' },
      { value: '20', name: '动画' },
      { value: '20', name: 'css预处理' },
      { value: '15', name: 'Less' },
      { value: '15', name: 'Sass' },
      { value: '20', name: '兼容性问题' },
      { value: '25', name: 'Javascript' },
      { value: '20', name: '语言' },
      { value: '15', name: '变量、函数、对象' },
      { value: '15', name: 'this' },
      { value: '15', name: '闭包' },
      { value: '15', name: 'new' },
      { value: '15', name: '面向对象' },
      { value: '10', name: '构造函数(call、apply)' },
      { value: '10', name: '原型链' },
      { value: '10', name: '混合模式' },
      { value: '15', name: '单线程异步运行机理' },
      { value: '20', name: 'api(基于浏览器)' },
      { value: '15', name: 'DOM' },
      { value: '15', name: '事件' },
      { value: '10', name: '移动端' },
      { value: '10', name: 'PC端' },
      { value: '15', name: 'AJAX' },
      { value: '10', name: '基于XMLHttpRequest' },
      { value: '10', name: 'Fetch(注意兼容性)' },
      { value: '15', name: 'canvas' },
      { value: '15', name: 'websocket' },
      { value: '15', name: 'webgl' },
      { value: '10', name: 'three.js' },
      { value: '15', name: '本地存储' },
      { value: '10', name: 'cookie' },
      { value: '10', name: 'LocalStorage' },
      { value: '20', name: '编程模式' },
      { value: '15', name: '函数式编程' },
      { value: '15', name: 'AMD' },
      { value: '15', name: 'CMD' },
      { value: '15', name: '流程控制' },
      { value: '10', name: 'Promise' },
      { value: '10', name: 'Tapable' },
      { value: '15', name: '应用状态(数据控制)容器' },
      { value: '10', name: 'redux' },
      { value: '15', name: '其他设计模式' },
      { value: '10', name: '工厂模式' },
      { value: '10', name: '单例模式' },
      { value: '10', name: '模块模式' },
      { value: '10', name: '代理模式' },
      { value: '10', name: '职责链模式' },
      { value: '10', name: '命令模式' },
      { value: '10', name: '模板方法模式' },
      { value: '10', name: '策略模式' },
      { value: '10', name: '订阅模式' },
      { value: '10', name: '中介者模式' },
      { value: '10', name: '适配器模式' },
      { value: '20', name: 'ES6' },
      { value: '20', name: '框架' },
      { value: '15', name: '提升效率(语法糖)' },
      { value: '10', name: 'lodash.js' },
      { value: '10', name: 'dayjs' },
      { value: '10', name: 'moment.js' },
      { value: '10', name: 'jquery/zepto' },
      { value: '10', name: 'underscore' },
      { value: '15', name: '模块加载' },
      { value: '10', name: 'requireJs' },
      { value: '10', name: 'webpack' },
      { value: '15', name: 'UI框架' },
      { value: '10', name: 'antd' },
      { value: '10', name: 'antd admin' },
      { value: '10', name: 'ElementUI' },
      { value: '10', name: 'ElementUI admin' },
      { value: '10', name: 'iView' },
      { value: '10', name: 'Vux' },
      { value: '10', name: 'bootstrap' },
      { value: '10', name: 'Fuse' },
      { value: '15', name: 'webgl(3d动画)' },
      { value: '10', name: 'tree.js' },
      { value: '15', name: 'M*M' },
      { value: '10', name: 'vue' },
      { value: '10', name: 'react' },
      { value: '10', name: 'redux' },
      { value: '15', name: '前段工程化' },
      { value: '10', name: '依赖管理' },
      { value: '5', name: 'npm' },
      { value: '5', name: 'yarn' },
      { value: '10', name: '流程控制' },
      { value: '5', name: 'gulp' },
      { value: '5', name: 'webpack' },
      { value: '20', name: 'nodejs' },
      { value: '15', name: 'express' },
      { value: '25', name: '综合能力' },
      { value: '20', name: '浏览器运行机理' },
      { value: '20', name: '性能优化' },
      { value: '15', name: '静态资源优化' },
      { value: '15', name: '接口合并、首屏直接出' },
      { value: '15', name: '渲染速度优化' },
      { value: '20', name: '代码调试' },
      { value: '15', name: 'chrome: dev tools/inspect' },
      { value: '15', name: 'safari调试iOS' },
      { value: '15', name: 'HBuilder' },
      { value: '15', name: 'charles抓包' },
      { value: '20', name: '跨域' },
      { value: '15', name: 'JSONP' },
      { value: '15', name: 'cors' },
      { value: '20', name: 'http' },
      { value: '20', name: '编程习惯' },
      { value: '20', name: '混合编程' },
      { value: '15', name: 'js与native通信机制' },
      { value: '15', name: 'h5+' },
      { value: '20', name: 'react native(入门)' },
      { value: '20', name: '持续集成' },
      { value: '15', name: 'gitLab' },
      { value: '15', name: 'jenkins' },
      { value: '25', name: '软件' },
      { value: '20', name: 'IDE' },
      { value: '15', name: 'VScode' },
      { value: '15', name: 'WebStorm' },
      { value: '20', name: '版本控制' },
      { value: '15', name: 'Git' },
      { value: '15', name: 'Svn' },
      { value: '20', name: '产品设计' },
      { value: '15', name: 'Axure' },
      { value: '15', name: 'js.design' },
      { value: '15', name: 'Photoshop' },
      { value: '20', name: '远程' },
      { value: '15', name: 'ssh' },
      { value: '15', name: 'sftp' }
    ];

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

export interface StatusItem {
  label: string;
  color: string;
}

export interface TagItem {
  label: string;
  color: string;
}

export const statusEnum: { [key: string]: StatusItem } = {
  active: { label: '内网上线', color: 'blue' },
  published: { label: '已上线', color: 'green' },
  close: { label: '已下线', color: '' }
};

export const tagsEnum: { [key: string]: TagItem } = {
  react: { label: 'React', color: '#61dafb' },
  vue: { label: 'Vue', color: '#4fc08d' },
  uniApp: { label: 'uni-app', color: '#42b983' },
  uniCloud: { label: 'uni-cloud', color: '#e96900' },
  weChat: { label: 'WeChat', color: '#2bae67' },
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

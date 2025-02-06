const BASECONFIG = [
  {
    title: '智慧分析平台',
    status: 'active',
    tags: ['react', 'antd', 'echarts'],
    date: '2024/10 至',
    img: 'https://s21.ax1x.com/2025/01/20/pEkxKqf.png',
    href: '',
    description: [
      '中诚信国际智慧分析平台专为金融机构、企业和投资者设计，提供深度数据挖掘和专业信用评级服务，助力复杂金融环境下的明智决策。平台涵盖企业融资、政府公共融资、金融机构、结构融资、非标产品、主权及熊猫债评级等领域，集成首页、主体、区域和工具四大核心功能。',
      '首页展示当前用户的个性化信息。主体模块深入分析企业信用状况，包括概览、股权结构、信用评级、经营和财务表现等。区域模块分析各地行业分布、经济和财政状况，揭示主体情况、政府和环境评分及研究报告。工具模块包含五个子功能：主体信用评分、政府信用评分、区域环境评分、同行业对比和区域数据对比，支持多角度数据分析和精准决策。',
      '通过大数据管理和高效处理，平台将原始数据转化为高附加值的信息产品，提升业务水平和服务质量，促进金融行业的透明度和稳定性。中诚信国际凭借一体化解决方案，在快速变化的市场中保持领先，提供强大且易用的信用分析工具，确保用户能快速获取并分析所需信息，适用于撰写信用评估报告、扫描企业信用状况、查看区域信用指数或进行领域信用指标分析等多种场景。'
    ],
    content: [
      '基于 Ant Design 组件库，进行系统组件的二次封装；',
      '使用 Bizcharts 来实现数据可视化图表，为用户提供直观地数据分析；',
      '使用 Echarts 实现地图相关的可视化功能；',
      '使用 classnames 在 React 组件中方便地处理 className 字符串，提高了代码的可读性和可维护性；',
      '封装筛选组件、对比列表组件、树形表格组件等，提高代码复用性及可维护性；'
    ],
    company: {
      name: '榜置科技',
      src: 'https://img.bosszhipin.com/beijin/upload/com/workfeel/20221110/7bf6f160950405e985797b212d50f841b95544d8930c39af577154f3f25bda84b415762965a35a22.jpg?x-oss-process=image/resize,w_100,limit_0'
    },
    score: { difficulty: 5, duration: 3, experience: 5 }
  },
  {
    title: '推荐美图小程序',
    status: 'published',
    tags: ['uniApp', 'uniCloud', 'weChat'],
    date: '2024/3 至 2024/4',
    img: 'https://s21.ax1x.com/2024/08/26/pAkix9P.png',
    // href: 'https://www.gaotianyang.top/archives/20231120bdee9ed5/',
    href: '',
    description: [
      '推荐美图小程序是一款基于uni-app框架开发的高性能壁纸应用，支持多个平台，为用户提供便捷、丰富的壁纸资源体验。其特点包括简洁美观的UI设计、流畅的操作体验和丰富的功能。',
      '在开发过程中，注重组件封装和样式定义，提升了代码的可读性和可维护性。封装了自定义样式轮播图组件、公共头部组件（动态计算顶部高度，适配不同机型）、分类标题组件（使用插槽实现内容自定义）以及专题列表组件等。这些组件的封装不仅提高了代码的重用性，也使得页面结构更加清晰。',
      '在样式定义方面，使用scss进行样式的编写，通过样式嵌套和样式变量的使用，使得样式代码更加整洁、有序，便于后续的维护和扩展。',
      '为了提升用户的交互体验并优化网络请求，采用了多种技术手段。例如，使用骨架屏在数据加载前显示一个基本的页面结构，让用户感知到页面正在加载；图片懒加载技术则减少了首屏加载的图片数量，加快了页面的渲染速度；列表上拉加载更多功能让用户可以按需加载更多内容，无需一次性加载所有数据；详情页图片按需加载则进一步减少了不必要的网络请求。',
      '针对图片加载速度慢、资源过大的问题，小程序特别引入了图片压缩功能。在上传图片到服务器前，会对图片进行压缩并额外存储缩略图。在列表页加载缩略图，而在详情页再加载原图，从而大大加快了图片的加载速度，提升了用户体验。同时，小程序对公共接口进行了请求限制，保障了应用的安全稳定运行，并支持用户登录，确保用户数据的安全。'
    ],
    content: [
      '基于 uni-app，实现各页面布局及特效；',
      '使用 uni-cloud 实现项目接口URL化；',
      '使用 uni-ui 实现页面基础功能；',
      '使用 uv-ui 实现页面一些扩展功能；',
      '使用 mp-html 插件实现富文本内容展示；',
      '使用 z-paging 插件实现下拉列表功能；'
    ],
    company: {
      name: '个',
      src: ''
    },
    score: { difficulty: 4, duration: 2, experience: 5 }
  },
  {
    title: '医院预算管理',
    status: 'active',
    tags: ['react', 'antd', 'singleSpa', 'emotion'],
    date: '2023/7 至 2023/9',
    img: 'https://s11.ax1x.com/2023/09/26/pP7xSPJ.png',
    href: 'https://www.gaotianyang.top/archives/20231120bdee9ed5/',
    // href: 'https://www.gaotianyang.top/projects/cbms/index.html',
    // href: 'http://192.168.5.184:8080/console',
    description: [
      '全面预算管理系统覆盖预算目标制定、编制、执行、控制、调整、分析、考核等一系列预算管理活动，通过本系统，实现对医院的决策目标已量化方式进行资源配置，使医院的整个经营活动得到协调运转。',
      '系统与医院HIS、HRP/HERP、绩效评价、成本管理、经营分析等系统，在数据、流程、模块等层面进行交互，推进医院业财融合有效开展。',
      '系统通过数据接口采集、外部文件上传、手工数据录入等方式，获取医院运营、工作量、经济、病案、医保等相关数据以及行业数据和标杆数据，并利用预测模型算法对医院预算进行科学、合理的预测工作。'
    ],
    content: [
      '基于 Ant Design Pro 组件，实现各页面布局及特效；',
      '使用 single-spa 实现微服务项目架构；',
      '使用 emotion 实现 JS 编写 css 样式；'
    ],
    company: {
      name: '蓬涞数据',
      src: 'https://img.bosszhipin.com/beijin/upload/com/img/20200507/0d819690df8f20c2b63b1e21c7543d55f4b8a06c408a69b236d996b0c5531650.jpg?x-oss-process=image/auto-orient,1/watermark,size_18,t_50,color_FFFFFF,text_QOacrOWbvueUseivpeWFrOWPuOazqOWGjOeUqOaIt-S4iuS8oA==,type_ZHJvaWRzYW5zZmFsbGJhY2s'
    },
    score: { difficulty: 5, duration: 2, experience: 4 }
  },
  {
    title: '日常质量管理',
    status: 'active',
    tags: ['react', 'antd', 'singleSpa', 'cloudCharts'],
    date: '2023/4 至 2023/7',
    img: 'https://s11.ax1x.com/2023/09/26/pP7vvaF.png',
    href: 'https://www.gaotianyang.top/archives/20231120671c213d/',
    // href: 'https://www.gaotianyang.top/projects/dhqs/index.html',
    // href: 'http://192.168.5.172:9091',
    description: [
      '医院日常质量管理系统在满足医院对医疗质量监测和患者安全管理的要求，依从相关法规和国际标准，为医院管理者提供有效的质控工具。',
      '系统从产品概念提出、结构设计、技术研发。都吸引了众多医疗管理专家、质量管理专业人士参与其中。',
      '产品以使用者导向、智慧化功能为核心理念，不断推进系统研发工作。通过在交互设计、视觉设计、架构设计、数据处理等方面考虑质量管理的特点，我们强化了系统在“可视性、警示性、流畅性”等方面，适宜客户的人性化使用需求和“专业、岗位、任务”所需要的个性化使用需求。',
      '这些努力旨在让质量管理者能够快速、便捷、高效地进行工作。'
    ],
    content: [
      '基于 Ant Design Pro 组件，实现各页面布局及特效；',
      '使用 single-spa 实现微服务项目架构；',
      '使用 cloud-charts 实现图表的展示；',
      '使用 classnames 在 React 组件中方便地处理 className 字符串；',
      '使用 eventemitter2 在组件间进行事件传递；'
    ],
    company: {
      name: '蓬涞数据',
      src: 'https://img.bosszhipin.com/beijin/upload/com/img/20200507/0d819690df8f20c2b63b1e21c7543d55f4b8a06c408a69b236d996b0c5531650.jpg?x-oss-process=image/auto-orient,1/watermark,size_18,t_50,color_FFFFFF,text_QOacrOWbvueUseivpeWFrOWPuOazqOWGjOeUqOaIt-S4iuS8oA==,type_ZHJvaWRzYW5zZmFsbGJhY2s'
    },
    score: { difficulty: 4, duration: 3, experience: 4 }
  },
  {
    title: '高质量发展建设管理',
    status: 'active',
    tags: ['react', 'antd', 'singleSpa', 'cloudCharts', 'tggLargeScreen'],
    date: '2022/10 至 2022/12',
    img: 'https://s11.ax1x.com/2023/09/26/pP7vx54.png',
    href: 'https://www.gaotianyang.top/archives/20231120ca98070b/',
    // href: 'https://www.gaotianyang.top/projects/pmp/index.html',
    // href: 'http://192.168.5.172:8101',
    description: [
      '高质量发展建设管理是一个从规划到产出的管理闭环，起点是战略规划，终点是成果产出，以目标管理和差异管理作为两大抓手，其特点就是“要事优先，异常先见”，目标引领，动态纠偏。',
      '模块包括运营指标驾驶舱、领导组织体系、高质量发展框架、建设进度管理等多个模块。以满足不同医院的需求，并有助于实现医疗行业的可持续发展和改进。',
      '该系统是一个全面的解决方案，帮助医院提高高质量发展建设、优化资源利用、提高医疗质量，并确保医院合规运营。这有助于实现医疗高质量发展的目标，提供更好的医疗服务，保障患者的健康和安全。'
    ],
    content: [
      '基于 Ant Design Pro 组件，实现各页面布局及特效；',
      '使用 single-spa 实现微服务项目架构；',
      '使用 cloud-charts 实现图表的展示；',
      '使用 classnames 在 React 组件中方便地处理 className 字符串；',
      '使用 tgg-large-screen 解决大屏满屏等比无压缩自适应需求；'
    ],
    company: {
      name: '蓬涞数据',
      src: 'https://img.bosszhipin.com/beijin/upload/com/img/20200507/0d819690df8f20c2b63b1e21c7543d55f4b8a06c408a69b236d996b0c5531650.jpg?x-oss-process=image/auto-orient,1/watermark,size_18,t_50,color_FFFFFF,text_QOacrOWbvueUseivpeWFrOWPuOazqOWGjOeUqOaIt-S4iuS8oA==,type_ZHJvaWRzYW5zZmFsbGJhY2s'
    },
    score: { difficulty: 4, duration: 2, experience: 5 }
  },
  {
    title: '全面质量管理',
    status: 'active',
    tags: ['react', 'antd', 'singleSpa', 'cloudCharts', 'formilyjs'],
    date: '2022/6 至 2023/6',
    img: 'https://s11.ax1x.com/2023/09/26/pP7vjVU.png',
    href: 'https://www.gaotianyang.top/archives/20231120c020518/',
    // href: 'https://www.gaotianyang.top/projects/qms/index.html',
    // href: 'https://192.168.5.172',
    description: [
      '医院全面质量管理系统，是为医院等级评审提供一个智能、便捷的管理平台。',
      '通过对评审流程的优化和自动化，我们成功实现了评审标准的制定、医院自评、评审任务分解、资料上报与审核、评审进度掌控、评审条款督导、整改措施反馈等多个环节的管理。',
      '同时，系统还包含了委员会管理、医务管理、护理管理、医院院感管理等多个功能模块，以全方位支持医院的全面质量管理需求。'
    ],
    company: {
      name: '蓬涞数据',
      src: 'https://img.bosszhipin.com/beijin/upload/com/img/20200507/0d819690df8f20c2b63b1e21c7543d55f4b8a06c408a69b236d996b0c5531650.jpg?x-oss-process=image/auto-orient,1/watermark,size_18,t_50,color_FFFFFF,text_QOacrOWbvueUseivpeWFrOWPuOazqOWGjOeUqOaIt-S4iuS8oA==,type_ZHJvaWRzYW5zZmFsbGJhY2s'
    },
    content: [
      '基于 Ant Design Pro 组件，实现各页面布局及特效；',
      '使用 single-spa 实现微服务项目架构；',
      '使用 cloud-charts 实现图表的展示；',
      '使用 formilyjs 实现表单的快速搭建；',
      '使用 classnames 在 React 组件中方便地处理 className 字符串；',
      '使用 eventemitter2 在组件间进行事件传递；'
    ],
    score: { difficulty: 5, duration: 5, experience: 5 }
  },
  {
    title: '亿欧数据',
    status: 'published',
    tags: ['vue', 'antd', 'echarts'],
    date: '2021/4 至 2022/6',
    img: 'https://s1.ax1x.com/2022/05/28/XKAcVg.png',
    href: 'https://data.iyiou.com',
    // href: 'https://data.iyiou.com/share/briefing/sTwN2aP01X',
    description: [
      '亿欧数据的产品定位是为能引领科技与产业发展的组织，提供好用的行业洞察工具，有效的商业决策工具。',
      '包括首页、情报监测、行业分析、企业分析、数据分析、工作台等模块。',
      '本产品帮助亿欧公司进行能力升级，把日常业务开展的过程中形成的标准化流程、结构化数据和高质量方法论。',
      '通过大数据仓库，将这些数据有效的存储和管理起来，以这些数据为支撑，建立数据产品化，推动公司数字化浪潮。',
      '产品从用户使用场景出发，共分为写市场简报、扫描企业信息、查看领域信息、领域指标分析、高效在线作图五大场景。'
    ],
    content: [
      '基于 Ant Design of Vue 组件，实现各页面布局及特效；',
      '使用 wangeditor 实现富文本编辑器；',
      '使用 Echarts 实现图表的展示；',
      '编写高级筛选等公共组件，对系统进行模块化组件化开发；',
      '使用 SSR 技术，提高产品的首屏加载速度，优化 SEO，增加产品的曝光率和流量；'
    ],
    company: {
      name: '亿欧EqualOcean',
      src: 'https://img.bosszhipin.com/beijin/mcs/chatphoto/20190304/1626535fe31f3e078dc5a77212e5ec7b425f6c7b973154f345e2b67e14af560f_s.jpg?x-oss-process=image/resize,w_120,limit_0'
    },
    score: { difficulty: 5, duration: 5, experience: 4 }
  },
  {
    title: 'AICS 智慧工地',
    status: 'published',
    tags: ['react', 'antd', 'ice'],
    date: '2020/9 至 2020/10',
    img: 'https://z3.ax1x.com/2021/01/30/ykcprj.png',
    description: [
      '智慧工地是利用物联网技术，集成各类智能终端设备对建设项目现场劳务工人实现高效管理的综合信息化系统。',
      '包括环境监测、智能分析、视频监控、塔基监测、实名制劳务管理。项目分为前台商城、订单管理、个人订单三大部分。',
      '智慧工地依托物联网、大数据、云计算、人工智能、移动计算，建立云端大数据管理平台，形成“端+云+大数据”的业务体系和新的管理模式，建立智慧工地综合管理平台，打通一线操作与远程监管的数据链条。'
    ],
    content: [
      '使用飞冰ice-stark实现了微前端解决方案；',
      '基于 Antd组件进行二次封装，实现各页面布局及特效；',
      '使用 Dayjs实现日期处理及展示；',
      '编写步骤条组件，进行步骤条定制开发；'
    ],
    company: {
      name: '日海智能',
      src: 'https://img.bosszhipin.com/beijin/upload/com/workfeel/20210914/7bf6f160950405e984763b1b5902e7e343b3921030806ad35b2d4ec716841b1de8d4323f306eff7c.jpg?x-oss-process=image/resize,w_120,limit_0'
    },
    score: { difficulty: 4, duration: 2, experience: 4 }
  },
  {
    title: 'DataMaxPro数据可视化应用',
    status: 'published',
    tags: ['react', 'antd'],
    date: '2020/8 至 2020/12',
    img: 'https://z3.ax1x.com/2021/01/30/ykcEGT.png',
    description: [
      'DataMaxPro数据可视化是使用可视化应用的方式来分析并展示庞杂数据的产品。',
      'DataMaxPro旨让更多人看到数据可视化的魅力，帮助非专业的工程师通过图形化的界面轻松搭建专业水准的可视化应用。',
      '精心预设多种行业模板，极致展示数据魅力。采用拖拽式自由布局，无需编码，全图形化编辑，快速可视化制作。',
      '满足您会议展示、业务监控、风险预警、地理信息分析等多种业务场景的展示需求。'
    ],
    content: [
      '使用antd组件实现各页面布局及特效；',
      '编写功能组件，实现组件的复用；',
      '使用bizcharts实现可视化图表格；',
      '使用graphql实现智能搜索接口；',
      '引入高德地图实现地图功能；',
      '引入西瓜视频实现视频播放功能；'
    ],
    company: {
      name: '日海智能',
      src: 'https://img.bosszhipin.com/beijin/upload/com/workfeel/20210914/7bf6f160950405e984763b1b5902e7e343b3921030806ad35b2d4ec716841b1de8d4323f306eff7c.jpg?x-oss-process=image/resize,w_120,limit_0'
    },
    score: { difficulty: 5, duration: 4, experience: 4 }
  },
  {
    title: 'AICube智盒管理系统',
    status: 'published',
    tags: ['react', 'antd', 'ice'],
    date: '2020/3 至 2020/12',
    img: 'https://z3.ax1x.com/2021/01/30/ykcSMQ.png',
    description: [
      'AICube智盒管理系统是部署于智盒上的设备管理界面，配合AIMS智能媒体服务系统，实现云加端控制。',
      '项目共分为概览、摄像头管理、系统管理几个模块。',
      'AICube智盒管理系统是一个提供智盒状态管理、设备接入、智盒设置的云产品。',
      '通过该系统可以更加便捷高效的对智盒及其子设备进行各种操作。'
    ],
    content: [
      '使用飞冰 ice-stark 实现了微前端解决方案；',
      '基于 Antd组件进行二次封装，实现各页面布局及特效；',
      '使用 rematch 实现状态管理；',
      '使用 react-spring 实现微应用首次加载过渡动画；',
      '使用 Dayjs实现日期处理及展示；'
    ],
    company: {
      name: '日海智能',
      src: 'https://img.bosszhipin.com/beijin/upload/com/workfeel/20210914/7bf6f160950405e984763b1b5902e7e343b3921030806ad35b2d4ec716841b1de8d4323f306eff7c.jpg?x-oss-process=image/resize,w_120,limit_0'
    },
    score: { difficulty: 4, duration: 4, experience: 4 }
  },
  {
    title: 'AIMS智能媒体服务',
    status: 'published',
    tags: ['react', 'antd', 'ice'],
    date: '2020/3 至 2021/4',
    img: 'https://z3.ax1x.com/2021/01/30/ykcPZn.png',
    description: [
      '使用antd、react进行迭代开发。项目分为概览、全息档案、智能搜索、布控预警、设备、媒资管理、系统管理几个模块。本人在项目中担任前端开发。',
      '智能媒体服务平台是一个提供设备接入、视频流上云、媒资管理、视频 AI、智能搜索功能的云产品。',
      '旨在帮助视频厂商快速将存量或者新增的媒体设备上云。平台还提供了丰富的视频算法，以及云边协同的视频智能服务。'
    ],
    content: [
      '使用飞冰 ice-stark 实现了微前端解决方案；',
      '基于 Antd组件进行二次封装，实现各页面布局及特效；',
      '使用 graphql 进行海量数据的筛选查询；',
      '使用高德地图开放API引入高德地图；',
      '使用 watermark 给敏感信息添加水印；',
      '使用 websocket 实现告警推送监听；'
    ],
    company: {
      name: '日海智能',
      src: 'https://img.bosszhipin.com/beijin/upload/com/workfeel/20210914/7bf6f160950405e984763b1b5902e7e343b3921030806ad35b2d4ec716841b1de8d4323f306eff7c.jpg?x-oss-process=image/resize,w_120,limit_0'
    },
    score: { difficulty: 4, duration: 5, experience: 4 }
  },
  {
    title: 'AIoT感知平台',
    status: 'published',
    tags: ['react', 'antd', 'ice'],
    date: '2019/9 至 2020/3',
    img: 'https://z3.ax1x.com/2021/01/30/ykcZzF.png',
    description: [
      '使用antd、react实现项目的迭代开发。项目共分为概览、产品、设备、告警、规则、工单、应用、系统管理几个模块。本人在项目中担任前端开发。',
      '项目使用子应用模式开发，模块间独立开发部署。',
      '感知平台为设备提供安全可靠的连接通信能力，向下连接海量设备，支撑设备数据采集上云。',
      '向上提供云端 API，应用服务通过 API 调用开放平台功能，实现远程控制。帮助用户快速构筑物联网应用。'
    ],
    content: [
      '使用飞冰 ice-stark 实现了微前端解决方案；',
      '基于 Antd 组件进行二次封装，实现各页面布局及特效；',
      '使用 rematch 实现状态管理；',
      '使用 react-router-dom 进行路由配置；',
      '使用 react-intl 实现多语言；',
      '编写功能组件，实现组件的复用；',
      '使用西瓜视频播放器开放API进行视频播放；',
      '使用 BizCharts 实现平台数据图表展示；'
    ],
    company: {
      name: '日海智能',
      src: 'https://img.bosszhipin.com/beijin/upload/com/workfeel/20210914/7bf6f160950405e984763b1b5902e7e343b3921030806ad35b2d4ec716841b1de8d4323f306eff7c.jpg?x-oss-process=image/resize,w_120,limit_0'
    },
    score: { difficulty: 5, duration: 5, experience: 5 }
  },
  {
    title: '鱼猫金服PC版重构',
    status: 'close',
    tags: ['vue', 'iView'],
    date: '2019/2 至 2019/8',
    img: 'https://z3.ax1x.com/2021/01/30/ykcrJf.png',
    description: [
      '使用iView、vue实现官网PC版的重新构建。项目共分为首页、项目、活动、个人中心几个模块。本人在项目中担任前端开发。',
      '在开发过程中，还需要注意IE兼容性的影响。'
    ],
    content: [
      '使用iView组件实现各页面布局及特效；',
      '使用vue-baidu-map引入百度地图；',
      '在vue-router中编写公共方法进行页面置顶及加载效果；',
      '编写公共组件，进行登录状态判断及展示；',
      '使用C3 的animation新特性实现公告滚动效果；'
    ],
    company: {
      name: '鱼猫金服',
      src: 'https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F32fa828ba61ea8d3385ea0109b0a304e251f58a2%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1697821200&t=6097042254d7774a68b1b5ef28486633'
    },
    score: { difficulty: 4, duration: 3, experience: 4 }
  },
  {
    title: '鱼猫金服微信版官网重构',
    status: 'close',
    tags: ['vue', 'vux'],
    date: '2018/9 至 2019/8',
    img: 'https://z3.ax1x.com/2021/01/30/ykc2Lj.png',
    description: [
      '使用Vux、Vue实现官网微信版的重新构建。项目共分为首页、项目、活动、个人中心几个模块。',
      '本人在项目中担任前端开发。'
    ],
    content: [
      '使用Vux组件实现各页面布局及特效；',
      '使用fullpage.js实现全屏滚动特效；',
      '使用Vue.js Clipboard实现一键复制；',
      '使用Scroller组件实现下拉刷新上拉加载更多；',
      '使用ifarme嵌入及jQ实现公告详情渲染；'
    ],
    company: {
      name: '鱼猫金服',
      src: 'https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F32fa828ba61ea8d3385ea0109b0a304e251f58a2%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1697821200&t=6097042254d7774a68b1b5ef28486633'
    },
    score: { difficulty: 4, duration: 4, experience: 3 }
  },
  {
    title: '鱼猫金服业务推广活动页面',
    status: 'close',
    tags: ['vue', 'css', 'js'],
    date: '2019/5 至 2019/5',
    img: 'https://z3.ax1x.com/2021/01/30/ykc0ot.png',
    description: ['使用Vue、C3实现官网节日宣传活动页面的构建。'],
    content: [
      '使用mobile-util.js适配移动端；',
      '使用Animate.css添加页面动效；',
      '使用原生js实现触发跳动逻辑；',
      '使用Axios与后台进行数据交互，渲染用户获奖情况；'
    ],
    company: {
      name: '鱼猫金服',
      src: 'https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F32fa828ba61ea8d3385ea0109b0a304e251f58a2%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1697821200&t=6097042254d7774a68b1b5ef28486633'
    },
    score: { difficulty: 3, duration: 1, experience: 4 }
  },
  {
    title: '鱼猫金服大转盘活动页面',
    status: 'close',
    tags: ['vue', 'css', 'js'],
    date: '2019/4 至 2019/4',
    img: 'https://z3.ax1x.com/2021/01/30/ykcgyQ.png',
    description: ['使用Vue、C3动效实现官网节日宣传活动页面的构建。', '活动为大转盘。'],
    content: [
      '使用mobile-util.js适配移动端；',
      '使用swapper.js实现轮播效果；',
      '使用jQ及原生js实现大转盘(老虎机)动效及逻辑；',
      '使用Axios与后台进行数据交互，渲染用户获奖情况；'
    ],
    company: {
      name: '鱼猫金服',
      src: 'https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F32fa828ba61ea8d3385ea0109b0a304e251f58a2%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1697821200&t=6097042254d7774a68b1b5ef28486633'
    },
    score: { difficulty: 3, duration: 1, experience: 4 }
  },
  {
    title: '鱼猫金服新手活动页面重构',
    status: 'close',
    tags: ['vue', 'css', 'js'],
    date: '2019/1 至 2019/2',
    img: 'https://z3.ax1x.com/2021/01/30/ykccQg.png',
    description: ['使用Vue、C3动效实现官网节日宣传活动页面的构建。', '活动为大转盘。'],
    content: [
      '使用mobile-util.js适配移动端；',
      '使用Animate.css添加页面动效；',
      '使用Axios与后台进行数据交互，渲染用户获奖情况；'
    ],
    company: {
      name: '鱼猫金服',
      src: 'https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F32fa828ba61ea8d3385ea0109b0a304e251f58a2%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1697821200&t=6097042254d7774a68b1b5ef28486633'
    },
    score: { difficulty: 3, duration: 2, experience: 4 }
  },
  {
    title: '鱼猫金服企业端',
    status: 'close',
    tags: ['vue', 'elementUI', 'css', 'js', 'jsp'],
    date: '2018/7 至 2018/10',
    img: 'https://z3.ax1x.com/2021/01/30/ykcDFP.png',
    description: ['使用Element UI、Vue、Jsp实现企业端项目。'],
    content: [
      '使用Element UI组件实现各页面布局及特效；',
      '使用particles.js实现粒子特效；',
      '使用script标签方式引入Vue、ElementUI，并实现项目各功能点；',
      '修改既有功能模块，实现与企业端的融合；'
    ],
    company: {
      name: '鱼猫金服',
      src: 'https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F32fa828ba61ea8d3385ea0109b0a304e251f58a2%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1697821200&t=6097042254d7774a68b1b5ef28486633'
    },
    score: { difficulty: 4, duration: 2, experience: 4 }
  },
  {
    title: '鱼猫金服PC版日常维护',
    status: 'close',
    tags: ['html', 'css', 'js', 'jsp'],
    date: '2018/7 至 2019/9',
    img: 'https://z3.ax1x.com/2021/01/30/ykc6SS.png',
    description: [],
    content: [
      '使用html5、css3、原生js、Jsp实现既有官网项目的日常维护；',
      '在原有的项目基础之上，进行功能模块上的迭代升级，以及bug修复；',
      '对项目按功能点进行小规模重构，使得代码可维护性得以提升；'
    ],
    company: {
      name: '鱼猫金服',
      src: 'https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F32fa828ba61ea8d3385ea0109b0a304e251f58a2%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1697821200&t=6097042254d7774a68b1b5ef28486633'
    },
    score: { difficulty: 4, duration: 5, experience: 4 }
  },
  {
    title: '银信长远测评系统',
    status: 'active',
    tags: ['vue', 'elementUI', 'vux'],
    date: '2018/6 至 2018/7',
    img: '',
    description: [],
    content: [
      '此项目为后台管理人员月度评测系统，主要分为考勤评测、工作完成度评测、工作服务质量评测3大类；',
      '主要分为微信企业号及web端管理系统两个组成部分；',
      '参与项目时，项目处在需求调研阶段，本人担任项目经理与产品经理共同和客户确认需求，梳理并编写工作说明文档、需求文档；',
      '在需求确认完毕后，会对系统架构进行设计、技术选型以及出原型图；'
    ],
    company: {
      name: '毫末科技',
      src: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D584915274%2C2552692992%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D6BA633627298A790441125F403008022&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1697821200&t=5ab166befb8659ce1c019466d076f277'
    },
    score: { difficulty: 3, duration: 2, experience: 4 }
  },
  {
    title: '张家口检察院OA管理',
    status: 'active',
    tags: ['vue', 'vueElementAdmin', 'weex'],
    date: '2018/2 至 2018/6',
    img: 'https://z3.ax1x.com/2021/01/30/ykcsW8.png',
    description: [
      '使用Element UI Admin、Vue实现张家口检察院OA管理平台。项目共分为即时通讯、办公应用、辅助工具、辅助学习、系统管理几个模块。',
      '本人在项目中担任项目经理角色，主要负责对项目进行整体把控，项目初始化及进度推进，项目难点解决方案梳理，公共方法的编写，以及即时通讯的部分子模块、办公应用的部分子模块。'
    ],
    content: [
      '使用ifarme嵌入即时通讯模块并实现自动登录、跳转联动、样式修改等；',
      '使用vue2.0-zoom实现图片放大镜效果；',
      '使用ribbitmq实现消息提醒队列；',
      '抽离页面内容，编写template实现组件式开发；'
    ],
    company: {
      name: '毫末科技',
      src: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D584915274%2C2552692992%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D6BA633627298A790441125F403008022&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1697821200&t=5ab166befb8659ce1c019466d076f277'
    },
    score: { difficulty: 4, duration: 3, experience: 4 }
  },
  {
    title: '文献数字化后台管理',
    status: 'active',
    tags: ['angular', 'fuse'],
    date: '2017/12 至 2018/3',
    img: 'https://z3.ax1x.com/2021/01/30/ykcwdI.png',
    description: [
      '使用Fuse 、AngularJS实现文献数字化OA管理平台。',
      '项目共分为项目管理、资源管理、工作管理、系统管理、个人中心几个模块。',
      '本人在项目中担任项目经理角色，主要负责对项目进行整体把控，项目初始化及进度推进，项目难点解决方案梳理，公共方法的编写，以及个人中心、登录模块开发。'
    ],
    content: [
      '使用Restangula服务器获取数据；',
      '查找并引入文件上传插件ng-upload编写调用demo；',
      '编写排序公共方法提供给各模块调用；',
      '查找并使用获取本机IP地址方法对登录人进行IP地址判断；',
      '查找并引入弹框插件toaster编写调用demo；',
      '进行代码审查，对代码进行优化、重构；'
    ],
    company: {
      name: '毫末科技',
      src: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D584915274%2C2552692992%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D6BA633627298A790441125F403008022&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1697821200&t=5ab166befb8659ce1c019466d076f277'
    },
    score: { difficulty: 3, duration: 3, experience: 4 }
  },
  {
    title: '星路起航微信小游戏后台管理',
    status: 'active',
    tags: ['angular', 'fuse'],
    date: '2017/11 至 2017/12',
    img: '',
    description: [
      '使用Fuse 、AngularJS实现微信小游戏后台管理。',
      '项目共分为用户管理、星卡管理(游戏卡片)、礼品管理、推荐选手管理、任务管理、题库管理几个模块。',
      '本人在项目中担任项目经理角色，主要负责对项目进行整体把控，以及星卡管理、礼品管理的模块开发。'
    ],
    content: [
      '使用Restangula服务器获取数据；',
      '使用$q(Promise)对异步请求数据进行处理；',
      '调用Lodash对数据进行快速处理；',
      '调用moment.js对时间进行格式化处理；',
      '使用angular-route完成页面路由跳转；',
      '进行代码审查，对代码进行优化、重构；',
      '与客户沟通明确需求点，与测试沟通确认问题并提出解决方案；'
    ],
    company: {
      name: '毫末科技',
      src: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D584915274%2C2552692992%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D6BA633627298A790441125F403008022&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1697821200&t=5ab166befb8659ce1c019466d076f277'
    },
    score: { difficulty: 3, duration: 2, experience: 4 }
  },
  {
    title: '诚轩OA管理系统',
    status: 'active',
    tags: ['angular', 'fuse'],
    date: '2017/7 至 2018/2',
    img: '',
    description: [
      '使用Fuse 、AngularJS实现微信小游戏后台管理。',
      '项目共分为合同管理、客户管理、个人中心、拍品管理、关联信息管理、拍卖会管理、财务结算、统计分析几个模块。',
      '本人主要负责客户管理、拍品管理等。'
    ],
    content: [
      '使用Restangula服务器获取数据；',
      '使用$q(Promise)对异步请求数据进行处理；',
      '调用Lodash对数据进行快速处理；',
      '调用moment.js对时间进行格式化处理；',
      '使用angular-route完成页面路由跳转；',
      '进行代码审查，对代码进行优化、重构；'
    ],
    company: {
      name: '毫末科技',
      src: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D584915274%2C2552692992%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D6BA633627298A790441125F403008022&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1697821200&t=5ab166befb8659ce1c019466d076f277'
    },
    score: { difficulty: 4, duration: 3, experience: 4 }
  },
  {
    title: 'Activity趋势健康',
    status: 'close',
    tags: ['angular', 'html', 'css', 'js'],
    date: '2017/5 至 2017/7',
    img: '',
    description: [],
    content: [
      '对activity进行定制开发实现满足客户要求的默认操作、录入；',
      '使用activity开放Api对部分功能进行定制化增减；'
    ],
    company: {
      name: '毫末科技',
      src: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D584915274%2C2552692992%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D6BA633627298A790441125F403008022&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1697821200&t=5ab166befb8659ce1c019466d076f277'
    },
    score: { difficulty: 4, duration: 2, experience: 4 }
  },
  {
    title: 'Skillee在线考试',
    status: 'close',
    tags: ['vue', 'html', 'css', 'js'],
    date: '2017/4 至 2017/6',
    img: '',
    description: [],
    content: [
      '使用h5、flexbox实现页面弹性布局；',
      '利用全局变量和事件监听API完成考试倒计时功能；',
      '利用Axios与后台进行数据交互，渲染题目、选项；'
    ],
    company: {
      name: '毫末科技',
      src: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips3.baidu.com%2Fit%2Fu%3D584915274%2C2552692992%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D6BA633627298A790441125F403008022&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1697821200&t=5ab166befb8659ce1c019466d076f277'
    },
    score: { difficulty: 3, duration: 2, experience: 3 }
  }
];

export default BASECONFIG;

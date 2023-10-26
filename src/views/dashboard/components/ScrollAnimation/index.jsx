import Axure from '@/assets/icons/AxureRP.svg';
import AntD from '@/assets/icons/ant-design.svg';
import avatar from '@/assets/icons/avatar.svg';
import css3 from '@/assets/icons/css3.svg';
import dom from '@/assets/icons/dom.svg';
import echart from '@/assets/icons/echart.svg';
import es6 from '@/assets/icons/es6.svg';
import git from '@/assets/icons/git.svg';
import gitLab from '@/assets/icons/gitLab.svg';
import html5 from '@/assets/icons/html5.svg';
import http from '@/assets/icons/http.svg';
import jenkins from '@/assets/icons/jenkins.svg';
import js from '@/assets/icons/js.svg';
import less from '@/assets/icons/less.svg';
import New from '@/assets/icons/new.svg';
import npm from '@/assets/icons/npm.svg';
import ps from '@/assets/icons/ps.svg';
import react from '@/assets/icons/react.svg';
import sass from '@/assets/icons/sass.svg';
import svn from '@/assets/icons/svn.svg';
import vscode from '@/assets/icons/vscode.svg';
import vue from '@/assets/icons/vue.svg';
import React from 'react';
import './index.less';

const ScrollAnimation = (props) => {
  const anim_data = {
    domArr: [
      // 杂乱的正方形
      {
        widthStr: '160rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'linear-gradient(-33deg,#8f35ff,rgba(143,53,255,0)),radial-gradient(circle at 62% -28%,rgba(0,45,156,.75) 0,#002d9c 68%,rgba(0,45,156,0) 111%),linear-gradient(116deg,rgba(0,137,255,.2) 1%,rgba(0,186,255,.04) 38%,rgba(68,149,255,.08) 68%,rgba(3,79,255,.16) 88%)',
        backgroundImageStr: `url(${New})`,
        topStr: 'calc(50% - 421rem)',
        rightStr: '',
        bottomStr: '',
        leftStr: 'calc(50% - 756rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.4,
        opacityAnimMap: new Map([
          [0.2, 0.4], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '80rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'linear-gradient(133deg,rgba(255,186,0,0),rgba(255,207,0,.6) 68%),linear-gradient(170deg,#ffc400,#ff9200),linear-gradient(170deg,#ffc400,#ff9200)',
        backgroundImageStr: `url(${vue})`,
        topStr: 'calc(50% - 192rem)',
        rightStr: '',
        bottomStr: '',
        leftStr: 'calc(50% - 487rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 1,
        opacityAnimMap: new Map([]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '96rem',
        // backgroundColorStr: '#cc7201',
        // backgroundImageStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${Axure})`,
        topStr: 'calc(50% - 141rem)',
        rightStr: '',
        bottomStr: '',
        leftStr: 'calc(50% - 624rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.8,
        opacityAnimMap: new Map([
          [0, 0.8],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '40rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(170deg,#3e9eff,#0062ff)',
        backgroundImageStr: `url(${AntD})`,
        topStr: 'calc(50% - 67rem)',
        rightStr: '',
        bottomStr: '',
        leftStr: 'calc(50% - 316rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.75,
        opacityAnimMap: new Map([
          [0, 0.75],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '46rem',
        backgroundColorStr: '',
        backgroundImageStr:
          'radial-gradient(77deg,#ff8300 0,#ff9200 54%,rgba(255,146,0,0) 128%),linear-gradient(77deg,#ffb400,#ff9200 25%,#ffdf2f 68%,#ff8e00)',
        topStr: 'calc(50% - 28rem)',
        rightStr: '',
        bottomStr: '',
        leftStr: 'calc(50% - 259rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.3,
        opacityAnimMap: new Map([
          [0, 0.3],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '72rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'radial-gradient(77deg,#ff8300 0,#ff9200 54%,rgba(255,146,0,0) 128%),linear-gradient(77deg,#ffb400,#ff9200 25%,#ffdf2f 68%,#ff8e00)',
        backgroundImageStr: `url(${npm})`,
        topStr: '',
        rightStr: '',
        bottomStr: 'calc(50% - 175rem)',
        leftStr: 'calc(50% - 579rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.4,
        opacityAnimMap: new Map([
          [0, 0.4],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '160rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'linear-gradient(220deg,#e58dff,#8f35ff 67%,rgba(143,53,255,0)),radial-gradient(circle at 1.2222% -87%,rgba(0,45,156,.75) 0,#002d9c 171%,rgba(0,45,156,0) 278%),linear-gradient(137deg,rgba(0,137,255,.3),rgba(3,79,255,.24))',
        backgroundImageStr: `url(${dom})`,
        topStr: '',
        rightStr: '',
        bottomStr: 'calc(50% - 412rem)',
        leftStr: 'calc(50% - 701rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.3,
        opacityAnimMap: new Map([
          [0, 0.3],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '24rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'linear-gradient(220deg,#e58dff,#8f35ff 67%,rgba(143,53,255,0)),radial-gradient(circle at 1.2222% -87%,rgba(0,45,156,.75) 0,#002d9c 171%,rgba(0,45,156,0) 278%),linear-gradient(137deg,rgba(0,137,255,.3),rgba(3,79,255,.24))',
        backgroundImageStr: `url(${http})`,
        topStr: 'calc(50% - 3rem)',
        rightStr: '',
        bottomStr: '',
        leftStr: 'calc(50% - 243rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.3,
        opacityAnimMap: new Map([
          [0, 0.3],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '96rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'linear-gradient(-27deg,rgba(143,53,255,.8) 11%,rgba(143,53,255,0)),radial-gradient(circle at 62% -28%,rgba(0,45,156,.75) 0,#002d9c 68%,rgba(0,45,156,0) 111%)',
        backgroundImageStr: `url(${css3})`,
        topStr: 'calc(50% - 473rem)',
        rightStr: '',
        bottomStr: '',
        leftStr: 'calc(50% - 154rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.3,
        opacityAnimMap: new Map([
          [0, 0.3],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '46rem',
        backgroundColorStr: '',
        backgroundImageStr: `url(${ps})`,
        topStr: '',
        rightStr: '',
        bottomStr: 'calc(50% - 98rem)',
        leftStr: 'calc(50% - 362rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.95,
        opacityAnimMap: new Map([
          [0, 0.95],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '96rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(180deg,#004fff,rgba(0,45,156,0) 70%)',
        backgroundImageStr: `url(${vscode})`,
        topStr: '',
        rightStr: '',
        bottomStr: 'calc(50% - 498rem)',
        leftStr: 'calc(50% - 165rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.95,
        opacityAnimMap: new Map([
          [0, 0.95],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '40rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   '-webkit-radial-gradient(top,rgba(0,45,156,.75) 0,#002d9c 92%,rgba(0,45,156,0) 166%)',
        backgroundImageStr: `url(${jenkins})`,
        topStr: '',
        rightStr: '',
        bottomStr: 'calc(50% - 352rem)',
        leftStr: 'calc(50% - 26rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.35,
        opacityAnimMap: new Map([
          [0, 0.35],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '64rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   '-webkit-radial-gradient(top,rgba(0,45,156,.75) 0,#002d9c 92%,rgba(0,45,156,0) 166%),-webkit-linear-gradient(334deg,rgba(0,137,255,.2) 1%,rgba(0,186,255,.04) 38%,rgba(68,149,255,.08) 68%,rgba(3,79,255,.16) 88%)',
        backgroundImageStr: `url(${less})`,
        topStr: 'calc(50% - 395rem)',
        rightStr: 'calc(50% - 102rem)',
        bottomStr: '',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.4,
        opacityAnimMap: new Map([
          [0, 0.4],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '24rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'linear-gradient(147deg,#004fff,#002d9c 82%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)',
        backgroundImageStr: `url(${js})`,
        topStr: 'calc(50% - 206rem)',
        rightStr: 'calc(50% - 38rem)',
        bottomStr: '',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.3,
        opacityAnimMap: new Map([
          [0, 0.3],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '130rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'linear-gradient(147deg,#004fff,#002d9c 82%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)',
        backgroundImageStr: `url(${sass})`,
        topStr: 'calc(50% - 263rem)',
        rightStr: 'calc(50% - 704rem)',
        bottomStr: '',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.67,
        opacityAnimMap: new Map([
          [0, 0.67],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '64rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(128deg,#00ebb6,#00ba46 69%)',
        backgroundImageStr: `url(${react})`,
        topStr: 'calc(50% - 226rem)',
        rightStr: 'calc(50% - 505rem)',
        bottomStr: '',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.95,
        opacityAnimMap: new Map([
          [0, 0.95],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '24rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(170deg,#ffc400,rgba(255,207,0,.6))',
        backgroundImageStr: `url(${html5})`,
        topStr: 'calc(50% - 52rem)',
        rightStr: 'calc(50% - 218rem)',
        bottomStr: '',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.2,
        opacityAnimMap: new Map([
          [0, 0.2],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '24rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(170deg,#00b6ff,#007fff)',
        backgroundImageStr: `url(${es6})`,
        topStr: '',
        rightStr: 'calc(50% - 300rem)',
        bottomStr: 'calc(50% - 49rem)',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.96,
        opacityAnimMap: new Map([
          [0, 0.96],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '64rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(148deg,#76d2ff,#09baff 99%)',
        backgroundImageStr: `url(${echart})`,
        topStr: '',
        rightStr: 'calc(50% - 453rem)',
        bottomStr: 'calc(50% - 170rem)',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.96,
        opacityAnimMap: new Map([
          [0, 0.96],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '96rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(136deg,#3e9eff 19%,#0062ff)',
        backgroundImageStr: `url(${git})`,
        topStr: '',
        rightStr: 'calc(50% - 657rem)',
        bottomStr: 'calc(50% - 133rem)',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.96,
        opacityAnimMap: new Map([
          [0, 0.96],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '160rem',
        backgroundColorStr: '',
        // backgroundImageStr:
        //   'linear-gradient(147deg,rgba(0,79,255,.6),rgba(0,45,156,.6) 82%),linear-gradient(153deg,#007fff 5%,#0063ff 95%)',
        backgroundImageStr: `url(${gitLab})`,
        topStr: '',
        rightStr: 'calc(50% - 800rem)',
        bottomStr: 'calc(50% - 345rem)',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.5,
        opacityAnimMap: new Map([
          [0, 0.5],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '96rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(-2deg,rgba(0,45,156,.75),#002d9c)',
        backgroundImageStr: `url(${svn})`,
        topStr: '',
        rightStr: 'calc(50% - 213rem)',
        bottomStr: 'calc(50% - 532rem)',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.2,
        opacityAnimMap: new Map([
          [0, 0.2],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },
      {
        widthStr: '96rem',
        backgroundColorStr: '',
        backgroundImageStr: 'linear-gradient(-2deg,rgba(0,45,156,.75),#002d9c)',
        topStr: '',
        rightStr: 'calc(50% - 213rem)',
        bottomStr: 'calc(50% - 532rem)',
        leftStr: '',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 0.2,
        opacityAnimMap: new Map([
          [0, 0.2],
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 }
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 }
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 800 }
            }
          ]
        ])
      },

      // logo 图标
      {
        widthStr: '180rem',
        backgroundColorStr: '',
        // backgroundImageStr: 'linear-gradient(159deg,#00b6ff,#007fff 67%,#0065ff 97%)',
        backgroundImageStr: `url(${avatar})`,
        topStr: 'calc(50% - 90rem)',
        rightStr: '',
        bottomStr: '',
        leftStr: 'calc(50% - 90rem)',
        className: 'e-square',
        parentClassName: 'effect-box',
        opacity: 1,
        opacityAnimMap: new Map([
          [0, 1], // [帧，值]
          [0.6, 0.6]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 0 },
          scale: 1
        },
        transformAnimMap: new Map([
          [
            0,
            {
              translate3d: { x: 0, y: 0, z: 0 },
              scale: 1
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: -1300, z: 800 },
              scale: 1.5
            }
          ]
        ])
      },

      // e-icon-box 相关元素
      // e-icon-box-bg
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: '',
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon-box-bg',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.6, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 0, z: 10 },
          scale: 0.8
        },
        transformAnimMap: new Map([
          [
            0.6,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 0.8
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },

      // e-icon 上行
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${react})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.1, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 450, y: 80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: 450, y: 80, z: 10 },
              scale: 0
            }
          ],
          [
            0.1,
            {
              translate3d: { x: 450, y: 100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${vue})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.3, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 300, y: 80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: 300, y: 80, z: 10 },
              scale: 0
            }
          ],
          [
            0.3,
            {
              translate3d: { x: 300, y: 100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${html5})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.5, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 150, y: 80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: 150, y: 80, z: 10 },
              scale: 0
            }
          ],
          [
            0.5,
            {
              translate3d: { x: 150, y: 100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${css3})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.7, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: 80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: 0, y: 80, z: 10 },
              scale: 0
            }
          ],
          [
            0.7,
            {
              translate3d: { x: 0, y: 100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${js})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.5, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: -150, y: 80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: -150, y: 80, z: 10 },
              scale: 0
            }
          ],
          [
            0.5,
            {
              translate3d: { x: -150, y: 100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${git})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.3, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: -300, y: 80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: -300, y: 80, z: 10 },
              scale: 0
            }
          ],
          [
            0.3,
            {
              translate3d: { x: -300, y: 100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${es6})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.1, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: -450, y: 80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: -450, y: 80, z: 10 },
              scale: 0
            }
          ],
          [
            0.1,
            {
              translate3d: { x: -450, y: 100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },

      // e-icon 下行
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${echart})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.1, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 450, y: -80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: 450, y: -80, z: 10 },
              scale: 0
            }
          ],
          [
            0.1,
            {
              translate3d: { x: 450, y: -100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${less})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.3, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 300, y: -80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: 300, y: -80, z: 10 },
              scale: 0
            }
          ],
          [
            0.3,
            {
              translate3d: { x: 300, y: -100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${sass})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.5, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 150, y: -80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: 150, y: -80, z: 10 },
              scale: 0
            }
          ],
          [
            0.5,
            {
              translate3d: { x: 150, y: -100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${npm})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.7, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: 0, y: -80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: 0, y: -80, z: 10 },
              scale: 0
            }
          ],
          [
            0.7,
            {
              translate3d: { x: 0, y: -100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${http})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.5, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: -150, y: -80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: -150, y: -80, z: 10 },
              scale: 0
            }
          ],
          [
            0.5,
            {
              translate3d: { x: -150, y: -100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${ps})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.3, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: -300, y: -80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: -300, y: -80, z: 10 },
              scale: 0
            }
          ],
          [
            0.3,
            {
              translate3d: { x: -300, y: -100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      },
      {
        widthStr: '',
        backgroundColorStr: '',
        backgroundImageStr: `url(${vscode})`,
        topStr: '',
        rightStr: '',
        bottomStr: '',
        leftStr: '',
        className: 'e-icon',
        parentClassName: 'e-icon-box',
        opacity: 0,
        opacityAnimMap: new Map([
          [0.1, 0], // [帧，值]
          [1, 1]
        ]),
        transform: {
          translate3d: { x: -450, y: -80, z: 10 },
          scale: 0
        },
        transformAnimMap: new Map([
          [
            0.1,
            {
              translate3d: { x: -450, y: -80, z: 10 },
              scale: 0
            }
          ],
          [
            0.1,
            {
              translate3d: { x: -450, y: -100, z: 10 },
              scale: 0.5
            }
          ],
          [
            1,
            {
              translate3d: { x: 0, y: 0, z: 10 },
              scale: 1
            }
          ]
        ])
      }
    ]
  };
  // 特效管理
  class EffectManager {
    constructor(data = anim_data) {
      data.domArr.forEach((item) => {
        item.domLength = data.domArr.filter((ditem) => {
          return ditem.parentClassName === item.parentClassName;
        }).length;
        item.parentClassName === 'effect-box' && item.domLength++;

        const entity = new Entity();

        // 添加形状组件
        entity.addComp(
          new ShapeComp({
            shapeAtt: item
          })
        );

        // 添加动画组件
        entity.addComp(
          new ShapeAnimComp({
            opacityAnimMap: item.opacityAnimMap,
            transformAnimMap: item.transformAnimMap
          })
        );

        // 添加滚动事件组件
        entity.addComp(
          new RollEventComp({
            cb: function (scrollPos) {
              this.getComp('ShapeAnimComp').changeOpacity(scrollPos, this.getComp('ShapeComp'));
              this.getComp('ShapeAnimComp').changeTransform(scrollPos, this.getComp('ShapeComp'));
            }.bind(entity)
          })
        );
      });
    }
  }

  // 单体
  class Entity {
    constructor() {
      this._compMap = new Map();
    }

    addComp(comp) {
      this._compMap.set(comp.name, comp);
    }

    getComp(compName) {
      return this._compMap.get(compName);
    }
  }

  // 形状组件
  class ShapeComp {
    constructor(data) {
      this.name = 'ShapeComp';
      this._shapeDom = document.createElement('div');
      this._shapeDom.classList.add(data.shapeAtt.className);
      this._shapeDom.style.width = data.shapeAtt.widthStr;
      this._shapeDom.style.height = data.shapeAtt.widthStr;
      this._shapeDom.style.backgroundImage = data.shapeAtt.backgroundImageStr;
      this._shapeDom.style.top = data.shapeAtt.topStr;
      this._shapeDom.style.right = data.shapeAtt.rightStr;
      this._shapeDom.style.bottom = data.shapeAtt.bottomStr;
      this._shapeDom.style.left = data.shapeAtt.leftStr;
      this._shapeDom.style.backgroundColor = data.shapeAtt.backgroundColorStr;
      if (
        document.getElementsByClassName(data.shapeAtt.parentClassName)[0] &&
        document.getElementsByClassName(data.shapeAtt.parentClassName)[0].children.length <
          data.shapeAtt.domLength
      ) {
        document
          .getElementsByClassName(data.shapeAtt.parentClassName)[0]
          .appendChild(this._shapeDom);
      }

      this._opacity = null;
      this._transform = null;

      this.opacity = data.shapeAtt.opacity;
      this.transform = data.shapeAtt.transform;
    }

    set opacity(value) {
      if (value !== this._opacity) {
        this._shapeDom.style.opacity = value + '';
      }
      this._opacity = value;
    }

    get opacity() {
      return this._opacity;
    }

    set transform(value) {
      let transformStr = '';
      if (value.translate3d !== undefined) {
        transformStr = `translate3d(${value.translate3d.x}rem, ${value.translate3d.y}rem, ${value.translate3d.z}rem)`;
      }

      if (value.scale !== undefined) {
        transformStr += `scale(${value.scale})`;
      }
      this._shapeDom.style.transform = transformStr;
      this._transform = value;
    }

    get transform() {
      return this._transform;
    }
  }

  // 动画组件
  class ShapeAnimComp {
    constructor(data) {
      this.name = 'ShapeAnimComp';
      this._opacityAnimMap = data.opacityAnimMap;
      this._transformAnimMap = data.transformAnimMap;
    }

    // 返回根据滚动改变的状态值
    _getStateValue(scrollPos, beginPos, endPos, beginValue, endValue) {
      if (beginValue === endValue) {
        return beginValue;
      }

      const value =
        ((endValue - beginValue) * (scrollPos - beginPos)) / (endPos - beginPos) + beginValue;

      return Number(value.toFixed(3));
    }

    // 根据滚动值改变透明度
    changeOpacity(scrollPos, shapeComp) {
      if (this._opacityAnimMap.size === 0) {
        return;
      }

      const keyArr = [...this._opacityAnimMap.keys()].sort((a, b) => a - b);

      const beginPos = keyArr.findLast((item) => item <= scrollPos);
      let beginValue = this._opacityAnimMap.get(beginPos);
      const endPos = keyArr.find((item) => item >= scrollPos);
      let endValue = this._opacityAnimMap.get(endPos);

      if (beginValue === undefined && endValue !== undefined) {
        beginValue = endValue;
      } else if (beginValue !== undefined && endValue === undefined) {
        endValue = beginValue;
      } else if (beginValue === undefined && endValue === undefined) {
        return;
      }

      const opacity = this._getStateValue(scrollPos, beginPos, endPos, beginValue, endValue);
      shapeComp.opacity = opacity;
    }

    // 根据滚动值改变 transform
    changeTransform(scrollPos, shapeComp) {
      if (this._transformAnimMap.size === 0) {
        return;
      }

      let transform = {};

      const keyArr = [...this._transformAnimMap.keys()].sort((a, b) => a - b);

      const beginPos = keyArr.findLast((item) => item <= scrollPos);
      let beginValue = this._transformAnimMap.get(beginPos);
      const endPos = keyArr.find((item) => item >= scrollPos);
      let endValue = this._transformAnimMap.get(endPos);

      if (beginValue === undefined && endValue !== undefined) {
        beginValue = endValue;
      } else if (beginValue !== undefined && endValue === undefined) {
        endValue = beginValue;
      } else if (beginValue === undefined && endValue === undefined) {
        return;
      }

      // translate3d
      if (beginValue.translate3d !== undefined) {
        const translate3dx = this._getStateValue(
          scrollPos,
          beginPos,
          endPos,
          beginValue.translate3d.x,
          endValue.translate3d.x
        );
        const translate3dy = this._getStateValue(
          scrollPos,
          beginPos,
          endPos,
          beginValue.translate3d.y,
          endValue.translate3d.y
        );
        const translate3dz = this._getStateValue(
          scrollPos,
          beginPos,
          endPos,
          beginValue.translate3d.z,
          endValue.translate3d.z
        );

        transform.translate3d = { x: translate3dx, y: translate3dy, z: translate3dz };
      }

      // scale
      if (beginValue.scale !== undefined) {
        const scale = this._getStateValue(
          scrollPos,
          beginPos,
          endPos,
          beginValue.scale,
          endValue.scale
        );
        transform.scale = scale;
      }

      shapeComp.transform = transform;
    }
  }

  // 滚动事件组件
  class RollEventComp {
    constructor(data) {
      this.name = 'RollEventComp';
      window.addEventListener(
        'scroll',
        (event) => {
          // const scrollTop = document.documentElement.scrollTop;
          // const scrollHeight = document.documentElement.scrollHeight;
          // const clientHeight = document.documentElement.clientHeight;
          const scrollTop = window.$scrollTop;
          const scrollHeight = window.$scrollHeight;
          const clientHeight = window.$clientHeight;
          let scrollPos = 0;
          if (scrollTop + clientHeight >= scrollHeight - 5) {
            scrollPos = 1;
          } else if (scrollTop === 0) {
            scrollPos = 0;
          } else {
            scrollPos = Number((scrollTop / (scrollHeight - clientHeight)).toFixed(3));
          }
          data.cb(scrollPos);
        },
        true
      );
    }
  }

  setTimeout(() => {
    new EffectManager();
  }, 0);

  return (
    <div className="scroll-animation-container">
      <div className="content">
        <div className="effect-content">
          <div className="effect-box">
            <div className="e-icon-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;

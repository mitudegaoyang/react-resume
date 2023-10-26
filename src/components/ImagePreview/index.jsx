import { Button, Icon, Modal } from 'antd';
import React from 'react';
import './index.less';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canDownload: props.canDownload,
      imgWidth: props.width || 300,
      imgAlt: props.alt || '',
      imgSrc: props.src,
      imageVisible: false,
      imgScale: '100%',
      imgTransform: '',
      imgCurrent: 0,
      flipx: 1,
      flipy: 1
    };
  }

  closeImagePreviewModel = () => {
    this.setState({
      imageVisible: false,
      imgScale: '100%',
      imgTransform: '',
      imgCurrent: 0,
      flipx: 1,
      flipy: 1
    });
  };
  //放大
  imgToBigger = () => {
    let a = parseInt(this.state.imgScale) + 5 + '%';
    this.setState({ imgScale: a });
  };
  //缩小
  imgToSmaller = () => {
    let a = parseInt(this.state.imgScale) + -5 + '%';
    this.setState({ imgScale: a });
  };
  //上下翻转
  imgToFlipYRoll = () => {
    let x = this.state.flipx;
    let y = this.state.flipy * -1;
    let a = this.state.imgCurrent;
    this.setState({ imgTransform: `scale3d(${x}, ${y}, 1) rotate(${a}deg)`, flipy: y });
  };
  //左右翻转
  imgToFlipXRoll = () => {
    let x = this.state.flipx * -1;
    let y = this.state.flipy;
    let a = this.state.imgCurrent;
    this.setState({ imgTransform: `scale3d(${x}, ${y}, 1) rotate(${a}deg)`, flipx: x });
  };
  //左旋转
  imgToLeftRoll = () => {
    let x = this.state.flipx;
    let y = this.state.flipy;
    let a = (this.state.imgCurrent - 90) % 360;
    this.setState({ imgTransform: `scale3d(${x}, ${y}, 1) rotate(${a}deg)`, imgCurrent: a });
  };
  //右旋转
  imgToRightRoll = () => {
    let x = this.state.flipx;
    let y = this.state.flipy;
    let a = (this.state.imgCurrent + 90) % 360;
    this.setState({ imgTransform: `scale3d(${x}, ${y}, 1) rotate(${a}deg)`, imgCurrent: a });
  };
  // 下载
  downloadImage = () => {
    const imgUrl = this.state.imgSrc;
    const xhr = new XMLHttpRequest();
    let url = imgUrl;
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (this.status == '200') {
        let blob = this.response;
        let a = document.createElement('a');
        a.style = 'display:none';
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = function (e) {
          a.download = 'test.jpg';
          a.href = e.target.result;
          document.body.append(a);
          a.click();
          a.remove();
        };
      }
    };
    xhr.open('get', url, true);
    xhr.send();
  };

  render = () => {
    const { canDownload, imgWidth, imgAlt, imgScale, imgSrc, imgTransform, imageVisible } =
      this.state;
    return (
      <div className="imagePreview-container">
        <div className="imagePreview-image-container">
          <div
            className="imagePreview-image-mask"
            onClick={() => {
              this.setState({ imageVisible: true });
            }}
          >
            <Icon type="eye" key="eye" title="预览" /> 预览
          </div>
          <img width={imgWidth} src={imgSrc} alt={imgAlt} />
        </div>
        <Modal
          title="图片预览"
          visible={imageVisible}
          onCancel={this.closeImagePreviewModel}
          style={{
            top: 0,
            maxWidth: '100vw',
            paddingBottom: 0
          }}
          bodyStyle={{
            textAlign: 'center',
            height: 'calc(100vh - 118px)',
            overflowY: 'auto'
          }}
          width="100vw"
          footer={[
            <div style={{ margin: '0 auto', textAlign: 'center' }} key={imgSrc}>
              <Button
                style={{ border: 'none', padding: '5px 8px' }}
                title="放大"
                onClick={() => this.imgToBigger()}
              >
                <Icon type="zoom-in" key="zoom-in" />
              </Button>
              <Button
                style={{ border: 'none', padding: '5px 8px' }}
                title="缩小"
                onClick={() => this.imgToSmaller()}
              >
                <Icon type="zoom-out" key="zoom-out" />
              </Button>
              <Button
                style={{ border: 'none', padding: '5px 8px' }}
                title="上下翻转"
                onClick={() => this.imgToFlipYRoll()}
              >
                <Icon type="swap" key="swap" style={{ transform: 'rotate(90deg)' }} />
              </Button>
              <Button
                style={{ border: 'none', padding: '5px 8px' }}
                title="左右翻转"
                onClick={() => this.imgToFlipXRoll()}
              >
                <Icon type="swap" key="swap" />
              </Button>
              <Button
                style={{ border: 'none', padding: '5px 8px' }}
                title="逆时针旋转"
                onClick={() => this.imgToLeftRoll()}
              >
                <Icon type="left" key="left" />
              </Button>
              <Button
                style={{ border: 'none', padding: '5px 8px' }}
                title="顺时针旋转"
                onClick={() => this.imgToRightRoll()}
              >
                <Icon type="right" key="right" />
              </Button>
              {canDownload && (
                <Button
                  style={{ border: 'none', padding: '5px 8px' }}
                  title="下载"
                  onClick={() => this.downloadImage()}
                >
                  <Icon type="download" key="download" />
                </Button>
              )}
            </div>
          ]}
        >
          <img
            src={imgSrc}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100vw',
              maxHeight: 'calc(100vh - 158px)',
              position: 'relative',
              margin: '0 auto',
              scale: imgScale,
              transform: imgTransform
            }}
          />
        </Modal>
      </div>
    );
  };
}

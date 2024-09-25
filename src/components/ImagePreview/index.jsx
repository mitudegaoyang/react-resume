import { Icon, Modal } from 'antd';
import React, { useState } from 'react';
import ImageControls from './ImageControls';
import './index.less';

const ImagePreview = ({ src, alt, canDownload, width = 300 }) => {
  const [visible, setVisible] = useState(false);
  const [imgTransform, setImgTransform] = useState('');

  const toggleVisibility = () => setVisible(!visible);

  const handleStateChange = (msg) => {
    setImgTransform(msg);
  };

  return (
    <div className="imagePreview-container">
      <div className="imagePreview-image-container">
        <div className="imagePreview-image-mask" onClick={toggleVisibility}>
          <Icon type="eye" title="预览" /> 预览
        </div>
        <img width={width} src={src} alt={alt} />
      </div>
      <Modal
        title="图片预览"
        visible={visible}
        onCancel={toggleVisibility}
        style={{
          top: 0,
          maxWidth: '100vw',
          paddingBottom: 0
        }}
        bodyStyle={{
          height: 'calc(100vh - 118px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          padding: 0
        }}
        width="100vw"
        footer={
          <ImageControls
            onStateChange={handleStateChange}
            visible={visible}
            src={src}
            canDownload={canDownload}
          />
        }
      >
        <img
          alt={alt}
          src={src}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100vw',
            maxHeight: 'calc(100vh - 158px)',
            position: 'relative',
            margin: '0 auto',
            transform: imgTransform
          }}
        />
      </Modal>
    </div>
  );
};
export default ImagePreview;

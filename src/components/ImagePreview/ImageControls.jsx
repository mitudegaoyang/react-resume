import { Button, Icon } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

const MAX_SCALE = 300;
const MIN_SCALE = 50;

// 单独的按钮组件
function ControlButton({ label, type, onClick, iconStyle = {}, disabled }) {
  const iconProps = {
    type: type === 'swap-rotate' ? 'swap' : type,
    style: {
      ...iconStyle,
      ...(type === 'swap-rotate' ? { transform: 'rotate(90deg)' } : {})
    }
  };
  return (
    <Button
      style={{ border: 'none', padding: '5px 8px' }}
      title={label}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon {...iconProps} />
    </Button>
  );
}

// 按钮组组件
const ImageControls = ({ onStateChange, visible, src, canDownload }) => {
  const [scale, setScale] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);

  // 放大
  const handleZoomIn = useCallback(() => {
    setScale((prevScale) => Math.min(prevScale + 5, MAX_SCALE));
  }, []);
  // 缩小
  const handleZoomOut = useCallback(() => {
    setScale((prevScale) => Math.max(prevScale - 5, MIN_SCALE));
  }, []);
  // 上下翻转
  const handleFlipVertical = () => {
    setFlipY(!flipY);
  };
  // 左右翻转
  const handleFlipHorizontal = () => {
    setFlipX(!flipX);
  };
  // 左旋转
  const handleRotateLeft = () => {
    const newAngle = (rotate - 90) % 360;
    setRotate(newAngle);
  };
  // 右旋转
  const handleRotateRight = () => {
    const newAngle = (rotate + 90) % 360;
    setRotate(newAngle);
  };
  // 下载
  const downloadImage = async () => {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 提取转换字符串的函数
  const getTransformString = () => {
    const scaleTransform = `scale(${scale / 100})`;
    const rotateTransform = `rotate(${rotate}deg)`;
    const flipXTransform = flipX ? 'scaleX(-1)' : 'scaleX(1)';
    const flipYTransform = flipY ? 'scaleY(-1)' : 'scaleY(1)';
    return `${scaleTransform} ${rotateTransform} ${flipXTransform} ${flipYTransform}`;
  };

  // 重置图片状态
  const resetImageState = useCallback(() => {
    setScale(100);
    setRotate(0);
    setFlipX(false);
    setFlipY(false);
  }, []);

  useEffect(() => {
    if (!visible) {
      resetImageState();
    }
  }, [visible]);

  useEffect(() => {
    onStateChange(getTransformString());
  }, [scale, rotate, flipX, flipY]);

  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <ControlButton
        label="放大"
        type="zoom-in"
        onClick={handleZoomIn}
        disabled={scale === MAX_SCALE}
      />
      <ControlButton
        label="缩小"
        type="zoom-out"
        onClick={handleZoomOut}
        disabled={scale === MIN_SCALE}
      />
      <ControlButton label="上下翻转" type="swap-rotate" onClick={handleFlipVertical} />
      <ControlButton label="左右翻转" type="swap" onClick={handleFlipHorizontal} />
      <ControlButton label="左旋转" type="left" onClick={handleRotateLeft} />
      <ControlButton label="右旋转" type="right" onClick={handleRotateRight} />
      {canDownload && <ControlButton label="下载" type="download" onClick={downloadImage} />}
    </div>
  );
};

export default ImageControls;

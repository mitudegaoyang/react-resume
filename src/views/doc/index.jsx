import TypingCard from '@/components/TypingCard';
import React from 'react';
const Doc = () => {
  const cardContent = `
    作者博客请戳这里 <a href="https://www.gaotianyang.top" target="_blank">高天阳的博客</a>。
    欢迎大家与我交流，如果觉得博客不错，也麻烦给博客赏个 star 哈。
  `
  return (
    <div className="app-container">
      <TypingCard title='作者博客' source={cardContent}/>
    </div>
  );
}

export default Doc;
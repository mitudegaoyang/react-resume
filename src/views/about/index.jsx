import reward from "@/assets/images/reward.jpg";
import wechat from "@/assets/images/wechat.jpg";
import TypingCard from "@/components/TypingCard";
import dayjs from "dayjs";
import React from "react";
const About = () => {
  const cardContent = `
    <p>大家好，我是高天阳。</p>
    <p>我诚恳乐观，积极负责，获团队信任。 
    拥有${dayjs().diff(
      "2016-8-1",
      "year"
    )}年前端经验，精通React、Vue.js及ES6+特性，
    熟练使用Ant Design、Element Plus等UI框架，擅长高质量界面开发和样式管理。</p>
    <p>日常工作中，我利用npm、shell提升效率，熟悉API调用、性能优化和离线支持技术。</p>
    <p>具备1年团队管理经验，善于沟通，适应性强，促进团队协作。</p>
    <p>我对新技术充满兴趣，业余时间扩充知识并分享至博客，
    探索AI在前端的应用，提高开发效率这些能力使我能在项目中发挥重要作用，
    为团队带来创新和高效解决方案。</p>
   <img src="${wechat}" alt="wechat" style="height:550px; display:none"  />
    <img src="${reward}" alt="reward" style="height:550px; display:none"/>
  `;
  return (
    <div className="app-container">
      <TypingCard title="自我评价" source={cardContent} />
    </div>
  );
};

export default About;

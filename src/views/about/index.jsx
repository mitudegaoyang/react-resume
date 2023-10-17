import reward from "@/assets/images/reward.jpg";
import wechat from "@/assets/images/wechat.jpg";
import TypingCard from "@/components/TypingCard";
import dayjs from "dayjs";
import React from "react";
const About = () => {
  const cardContent = `
    <p>大家好，我是高天阳。</p>
    <p>我为人诚恳、乐观开朗、自信积极，保持正能量。工作中，我保持着进取心、责任心，能做到自信而不自负，不以自我为中心，懂得换位思考。较强的适应能力和团队精神使我很好得融入到每个项目中。</p>
    <p>沟通是我的一个强项，有效沟通会极大提高我们的工作效率。日常开发中，我会通过熟练地使用npm、shell 等常用命令来提高工作效率。</p>
    <p>对于新事物、新技术有着较为强烈的好奇心和求知欲。因此，我会利用空闲时间去不断扩充个人知识库，并将其沉淀到我的技术博客中。</p>
    <p>至今，我已经有${dayjs().diff( '2016-8-1', 'year' )}年前端开发经验了。具备良好的分析解决问题能力，能独立承担任务并有一定程度的系统进度把控能力。</p>
    <p>我相信技术是基石，在技术达到一定深度时，再加强知识的广度，站在项目的角度看待问题，这样定可以更好的完成工作中的任务，做到事半功倍的效果。</p>  
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

import ImagePreview from '@/components/ImagePreview';
import { Avatar, List, Tag } from 'antd';
import React from 'react';
import IconText from './IconText';

const ListItem = ({ item, statusEnum, tagsEnum }) => {
  // 渲染逻辑...
  return (
    <List.Item
      key={item.title}
      actions={[
        <IconText
          type="tool"
          text="项目难度"
          key="list-vertical-tool"
          score={item?.score?.difficulty}
        />,
        <IconText
          type="clock-circle"
          text="项目周期"
          key="list-vertical-clock-circle"
          score={item?.score?.duration}
        />,
        <IconText
          type="star"
          text="项目体验"
          key="list-vertical-star"
          score={item?.score?.experience}
        />
      ]}
      extra={item.img && <ImagePreview key={item.title} width={272} alt="logo" src={item.img} />}
    >
      <List.Item.Meta
        avatar={
          item.company.src ? (
            <Avatar src={item.company.src} />
          ) : (
            <Avatar
              style={{
                backgroundColor: item.company.color,
                verticalAlign: 'middle',
                opacity: 0.8
              }}
              src={item.company.src}
            >
              {item.company.name}
            </Avatar>
          )
        }
        title={
          <>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            ) : (
              <span>{item.title}</span>
            )}
            <span className="status-wrapper"> ({statusEnum[item.status].label})</span>
          </>
        }
        description={
          <>
            {item.tags.map((tag) => {
              return (
                <Tag color={tagsEnum[tag].color} key={tag}>
                  {tagsEnum[tag].label}
                </Tag>
              );
            })}
            <span className="date-wrapper">{item.date}</span>
          </>
        }
      />
      {item.description.map((ditem, index) => {
        return <p key={index}>{ditem}</p>;
      })}
      <ul className="content-wrapper">
        {item.content.map((citem, index) => {
          return <li key={index}>{citem}</li>;
        })}
      </ul>
    </List.Item>
  );
};

export default ListItem;

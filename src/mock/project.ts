import PROCONFIG from '@/config/proConfig';
import * as _ from 'lodash';
type projectType = projectItemType[];
type projectItemType = {
  id?: number;
  title: string;
  status?: string;
  tags?: string[];
  img?: string;
  date: string;
};
let List: projectType = PROCONFIG.map((item, index) => {
  let data = _.merge({ id: index + 1 }, item);
  return data;
});

export default {
  projectList: (config: any) => {
    const { pageNumber, pageSize, title, status, tags } = JSON.parse(config.body);

    // 将标题转换为小写
    const lowerCaseTitle = title ? title.toLowerCase() : '';

    let start = (pageNumber - 1) * pageSize;
    let end = pageNumber * pageSize;
    let mockList = List.filter((item: projectItemType) => {
      if (tags && !item.tags?.includes(tags)) return false;
      if (status && item.status !== status) return false;
      // if (title && item.title.indexOf(title) < 0) return false;
      if (lowerCaseTitle && item.title.toLowerCase().indexOf(lowerCaseTitle) < 0) return false;
      return true;
    });
    let pageList = mockList.slice(start, end);
    return {
      code: 20000,
      data: {
        total: mockList.length,
        items: pageList
      }
    };
  },
  deleteItem: (config: any) => {
    const { id } = JSON.parse(config.body);
    const item = List.filter((item) => item.id === id);
    const index = List.indexOf(item[0]);
    List.splice(index, 1);
    return {
      code: 20000
    };
  },
  editItem: (config: any) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    const item = List.filter((item) => item.id === id);
    const index = List.indexOf(item[0]);
    List.splice(index, 1, data);
    return {
      code: 20000
    };
  }
};

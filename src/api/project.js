import request from '@/utils/request';
export function projectList(data) {
  return request({
    url: '/project/list',
    method: 'post',
    data
  });
}

export function deleteItem(data) {
  return request({
    url: '/project/delete',
    method: 'post',
    data
  });
}
export function editItem(data) {
  return request({
    url: '/project/edit',
    method: 'post',
    data
  });
}

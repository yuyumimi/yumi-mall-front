import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api/member/level/list',
    method:'get',
    params:params
  })
}

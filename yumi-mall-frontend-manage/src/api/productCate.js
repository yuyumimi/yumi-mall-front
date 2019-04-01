import request from '@/utils/request'
export function fetchList(parentId,params) {
  return request({
    url:'/api/product/category/list/'+parentId,
    method:'get',
    params:params
  })
}
export function deleteProductCate(id) {
  return request({
    url:'/api/product/category/delete/'+id,
    method:'get'
  })
}

export function createProductCate(data) {
  return request({
    url:'/api/product/category/create',
    method:'post',
    data:data
  })
}

export function updateProductCate(id,data) {
  return request({
    url:'/api/product/category/update/'+id,
    method:'post',
    data:data
  })
}

export function getProductCate(id) {
  return request({
    url:'/api/product/category/'+id,
    method:'get',
  })
}

export function updateShowStatus(data) {
  return request({
    url:'/api/product/category/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateNavStatus(data) {
  return request({
    url:'/api/product/category/update/navStatus',
    method:'post',
    data:data
  })
}

export function fetchListWithChildren() {
  return request({
    url:'/api/product/category/list/withChildren',
    method:'get'
  })
}

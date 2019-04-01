import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api/order/list',
    method:'get',
    params:params
  })
}

export function closeOrder(params) {
  return request({
    url:'/api/order/update/close',
    method:'post',
    params:params
  })
}

export function deleteOrder(params) {
  return request({
    url:'/api/order/delete',
    method:'post',
    params:params
  })
}

export function deliveryOrder(data) {
  return request({
    url:'/api/order/update/delivery',
    method:'post',
    data:data
  });
}

export function getOrderDetail(id) {
  return request({
    url:'/api/order/'+id,
    method:'get'
  });
}

export function updateReceiverInfo(data) {
  return request({
    url:'/api/order/update/receiverInfo',
    method:'post',
    data:data
  });
}

export function updateMoneyInfo(data) {
  return request({
    url:'/api/order/update/moneyInfo',
    method:'post',
    data:data
  });
}

export function updateOrderNote(params) {
  return request({
    url:'/api/order/update/note',
    method:'post',
    params:params
  })
}

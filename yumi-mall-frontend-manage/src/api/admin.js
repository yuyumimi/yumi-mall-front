import request from '@/utils/request'

export function editAdmin(params,admin) {
    console.info(admin)
  return request({
    url: `/api/admin/admin/${params.id}`,
    method: 'put',
    data: admin
  })
}
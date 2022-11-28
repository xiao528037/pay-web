import request from '@/utils/request'

export default{

  queryOrderStatus(orderNo) {
    return request({
      url: '/api/v1/wechat/order/queryOderStatus/' + orderNo,
      method: 'get'
    })
  },

  list() {
    return request({
      url: '/api/v1/wechat/order/list',
      method: 'get'
    })
  }
}

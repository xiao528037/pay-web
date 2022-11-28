// axios 发送ajax请求
import request from '@/utils/request'

export default{

  nativePay(productId) {
    return request({
      url: '/api/wxpay/native/' + productId,
      method: 'post'
    })
  },

  cancel(orderNo) {
    return request({
      url: '/api/wxpay/cancel/' + orderNo,
      method: 'post'
    })
  },

  refunds(orderNo, reason) {
    return request({
      url: '/api/wxpay/refund/' + orderNo + '/' + reason,
      method: 'post'
    })
  }
}

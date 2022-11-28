// axios 发送ajax请求
import request from '@/utils/request'

export default{

  list() {
    return request({
      url: '/pay/wechat/getProductList',
      method: 'get'
    })
  }
}

import request from '@/utils/request'

export default{

  downloadBill(billDate, type) {
    return request({
      url: '/api/wxpay/downloadbill/' + billDate + '/' + type,
      method: 'get'
    })
  },
  downloadBillAliPay(billDate, type) {
    return request({
      url: '/alipay/trade/bill/query/' + billDate + '/' + type,
      method: 'get'
    })
  }
}

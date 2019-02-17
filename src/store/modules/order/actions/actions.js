import * as types from '../../../mutation_type'
import getDate from '../../../../apis/api' // 接口

export default {
  // 获取列表
  getWaybillPage ({ commit }, userInfo) {
    return getDate.GET_WAYBILLPAGE(userInfo).then(response => {
      const data = response.data.data
      commit(types.GETWAYBILLPAGE, data)
      return response
    })
  },
  // 添加订单
  getWaybillSave ({ commit }, userInfo) {
    return getDate.GET_WAYBILLSAVE(userInfo).then(response => {
      return response
    })
  },
  // 查看订单
  getWaybillGet ({ commit }, userInfo) {
    return getDate.GET_WAYBILLGET(userInfo).then(response => {
      const data = response.data.data
      commit(types.GETWAYBILLGET, data)
      return response
    })
  },
  // 添加订单
  getWaybillSaveTracking ({ commit }, userInfo) {
    return getDate.GET_WAYBILLSAVETRACKING(userInfo).then(response => {
      return response
    })
  },
  // 获取全部user
  getUserAllUser ({ commit }, userInfo) {
    return getDate.GET_USERALLUSER(userInfo).then(response => {
      return response
    })
  },
  // 保存短信方
  getWaybillSaveSMS ({ commit }, userInfo) {
    return getDate.GET_WAYBILLSAVESMS(userInfo).then(response => {
      return response
    })
  },
  getSMS ({ commit }, userInfo) {
    // userInfo = encodeURI(userInfo)
    // console.log(userInfo)
    return getDate.GET_SMS(userInfo).then(response => {
      return response
    })
  },
  getWaybillPhone ({ commit }, userInfo) {
    return getDate.GET_WAYBILLPHONE(userInfo).then(response => {
      return response
    })
  },

  getCustomerSave ({ commit }, userInfo) {
    return getDate.GET_CUSTOMERSAVE(userInfo).then(response => {
      return response
    })
  },
  getCustomerList ({ commit }, userInfo) {
    return getDate.GET_CUSTOMERLIST(userInfo).then(response => {
      return response
    })
  },
  getCustomerExport ({ commit }, userInfo) {
    return getDate.GET_CUSTOMERORDEREXPORT(userInfo).then(response => {
      return response
    })
  }
}

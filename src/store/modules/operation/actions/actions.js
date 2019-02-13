import * as types from '../../../mutation_type'
import getDate from '../../../../apis/api' // 接口

export default {
  // 获取操作日志列表
  getOperationList ({ commit }, userInfo) {
    return getDate.GET_OPERATIONLIST(userInfo).then(response => {
      const data = response.data.data
      commit(types.GETOPERATIONLIST, data)
      return response
    })
  }
}

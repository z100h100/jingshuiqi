// import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import actions from './actions/actions'
import mutations from './mutations/mutation'

const state = {
  logList: {
    content: [],
    totalElements: 0,
    size: 10,
    number: 1
  }
}

export default{
  state,
  actions,
  mutations
}

import * as types from '../../../mutation_type'
// import router from '@/router/index'
// import { recursionRouter } from '@/utils/index'

export default {
  [types.GETOPERATIONLIST] (state, res) {
    state.logList = res
  }
}

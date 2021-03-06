import api from '.'
import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'

const downloadFilesUrl = data => {
  if (!data) {
    return
  }
  let url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }))
  let link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', '订单列表.xlsx')
  document.body.appendChild(link)
  link.click()
}
/**
 *
 * @type {{}}
 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charest=utf-8'
axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  if (config.url.indexOf('export') > 0) {
    config['responseType'] = 'blob'
  }
  return config
}, err => {
  Message.error('服务器错误，请重试')
  return Promise.reject(err)
})
axios.interceptors.response.use(response => {
  if (response.headers && (response.headers['content-type'] === 'application/octet-stream')) {
    downloadFilesUrl(response.data)
  }
  if (response.data.status == 0) {
    if (response.data.code == '1001') {
      Message.error(response.data.message)
      store.dispatch('LogOut')
      location.reload()
    } else {
      Message.error(response.data.message)
      return Promise.reject(response.data.message)
    }
  }
  return response
}, err => {
  Message.error('服务器错误，请重试')
  // store.dispatch('LogOut')
  setTimeout(() => {
    location.reload()
  }, 1000)
  return Promise.reject(err)
})

let base = '/api'
if (process.env.NODE_ENV !== 'production') {
  base = '/apis'
}

export default {
  GET_LOGIN (params) {
    return api.fetch('post', `${base}/login?username=${params.username}&password=${params.password}`, {})
  },
  GET_LOGINOUT (params) {
    return api.fetch('get', `${base}/logout`, {})
  },
  GET_INFO (params) {
    return api.fetch('get', `${base}/me`, params)
  },
  GET_ROLELISTGET (params) {
    return api.fetch('get', `${base}/role/get`, params)
  },
  GET_ROLELIST (params) {
    return api.fetch('post', `${base}/role/page`, params)
  },
  GET_DELROLE (params) {
    return api.fetch('post', `${base}/role/delete?id=${params.id}`)
  },
  GET_ROLELISTSAVE (params) {
    return api.fetch('post', `${base}/role/save`, params)
  },
  GET_ALLROLE (params) {
    return api.fetch('post', `${base}/role/all`, params)
  },
  GET_JUSTLIST (params) {
    return api.fetch('post', `${base}/user/page`, params)
  },
  GET_DELJUST (params) {
    return api.fetch('post', `${base}/user/me/update`, params)
  },
  GET_USERALLUSER (params) {
    return api.fetch('get', `${base}/user/all_user`, params)
  },
  GET_JUSTAUTHSLIST (params) {
    return api.fetch('get', `${base}/user/get`, params)
  },
  GET_JUSTAUTHSADD (params) {
    return api.fetch('post', `${base}/user/add`, params)
  },
  GET_JUSTAUTHSMODIFY (params) {
    return api.fetch('post', `${base}/user/update`, params)
  },
  GET_WAYBILLPAGE (params) {
    return api.fetch('post', `${base}/customerorder/page`, params)
  },
  GET_WAYBILLGET (params) {
    return api.fetch('get', `${base}/customerorder/get`, params)
  },
  GET_CUSTOMERORDEREXPORT (params) {
    return api.fetch('post', `${base}/customerorder/export`, params)
  },
  GET_WAYBILLSAVE (params) {
    return api.fetch('post', `${base}/waybill/save`, params)
  },
  GET_WAYBILLSAVESMS (params) {
    return api.fetch('post', `${base}/waybill/saveSms`, params)
  },
  GET_WAYBILLSAVETRACKING (params) {
    return api.fetch('post', `${base}/waybill/saveTracking`, params)
  },
  GET_SMS (params) {
    return api.fetch('get', `http://v.juhe.cn/sms/send`, params)
  },
  GET_WAYBILLPHONE (params) {
    return api.fetch('get', `${base}/waybill/visitingcard/name`, params)
  },
  // 净水接口
  GET_CUSTOMERSAVE (params) {
    return api.fetch('post', `${base}/customerorder/save`, params)
  },
  GET_CUSTOMERLIST (params) {
    return api.fetch('get', `${base}/customerorder/get`, params)
  },
  GET_OPERATIONLIST (params) {
    return api.fetch('post', `${base}/log/page`, params)
  }
}

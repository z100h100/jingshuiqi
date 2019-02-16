import {Validator} from 'vee-validate'
// 自定义扩展
// 收货人电话号码
Validator.extend('phone', {
  getMessage: (field, [args]) => {
    return `请填写正确的手机号`
  },
  validate: value => {
    // 获取输入的value
    return /^1[34578]\d{9}$/.test(value)
  }
})
// 件数
Validator.extend('quantity', {
  getMessage: (field, [args]) => {
    return `请输入正整数`
  },
  validate: value => {
    // 获取输入的value
    return /^[0-9]*$/.test(value)
  }
})

// 自定义验证
const dict = {
  zh_CN: {
    messages: {
      required: (name) => {
        if (name === 'orderNo') return `订单号不能为空!`
        if (name === 'area') return `所属地区不能为空!`
        if (name === 'customerType') return `客户类型不能为空!`
        if (name === 'customerName') return `客户名称不能为空!`
        if (name === 'person') return `联系人不能为空!`
        if (name === 'address') return `安装地址不能为空!`
        if (name === 'deliveryMode') return `请选择送货方式!`
        if (name === 'deliveryPerson') return `发货人不能为空!`
        if (name === 'personPhone' || name === 'receivingPhone') return `联系电话不能为空!`
        if (name === 'receivingPerson') return `收货人不能为空!`
        if (name === 'operator') return `请选择经办人!`
        if (name === 'payment') return `请选择付款方式人!`
        return `不能为空!`
      }
    }
  }
}
Validator.localize(dict)

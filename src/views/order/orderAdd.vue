<template>
  <div class="app-container" style="min-width: 1024px;">
    <el-form ref="ruleForm" :model="ruleForm">
      <!--<div class="consignment">-->
        <!--<div class="consignmentOpen">-->
          <!--<div class="layui-form-item fr waybillNoClass">-->
            <!--<label class="order-no-style">订单编号</label>-->
            <!--<div class="layui-block" style="width: 160px">-->
              <!--<input v-model="ruleForm.orderNo" v-validate="'required|orderNo'"-->
                     <!--autocomplete="off"-->
                     <!--:class="{'input': true, 'is-danger': errors.has('orderNo')}" type="text" name="orderNo"-->
                     <!--class="layui-input" placeholder="订单编号">-->
              <!--<el-tooltip class="item" effect="pink" :content="errors.first('orderNo')" placement="top">-->
                <!--<i v-show="errors.has('orderNo')" class="el-icon-warning errClass" v-cloak></i>-->
              <!--</el-tooltip>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="consignmentTitle">客户管理表</div>-->
        <!--<div class="consignmentInfo">-->
          <!--<el-form-item label="" prop="waybillDate" class="orderContentRight fr">-->
            <!--<el-date-picker-->
              <!--v-model="ruleForm.waybillDate"-->
              <!--type="datetime"-->
              <!--:clearable="false"-->
              <!--:editable="false"-->
              <!--placeholder="选择日期时间"-->
              <!--align="right"-->
              <!--class="orderInput"-->
              <!--:picker-options="pickerOptions1"-->
              <!--size="mini"-->
              <!--value-format="timestamp"-->
              <!--style="width:200px">-->
            <!--</el-date-picker>-->
          <!--</el-form-item>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;表单内容&ndash;&gt;-->
      <!--<div class="title-style">-->
        <!--<span>客户信息</span>-->
      <!--</div>-->
      <!--<div class="order-content skin-border">-->
        <!--<div class="order-editor-traffic">-->
          <!--<div>-->
            <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label">所属地区</label>-->
              <!--<div class="layui-block">-->
                <!--<input v-model="ruleForm.area" class="layui-input" placeholder="所属地区">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div>-->
            <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label">客户类型</label>-->
              <!--<div class="layui-block">-->
                <!--<input v-model="ruleForm.customerType" class="layui-input" placeholder="客户类型">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div>-->
            <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label">客户名称</label>-->
              <!--<div class="layui-block">-->
                <!--<input v-model="ruleForm.customerName" class="layui-input" placeholder="客户名称">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div>-->
            <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label">联系人</label>-->
              <!--<div class="layui-block">-->
                <!--<input v-model="ruleForm.person" class="layui-input" placeholder="联系人">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div>-->
            <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label">联系电话</label>-->
              <!--<div class="layui-block">-->
                <!--<input v-model="ruleForm.personPhone" class="layui-input" placeholder="联系电话">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--&lt;!&ndash;<div>-->
            <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label requireClass">送货方式</label>-->
              <!--<div class="layui-block">-->
                <!--<select v-model="ruleForm.deliveryMode" v-validate="'required'" name="deliveryMode" class="layui-input"-->
                        <!--:class="{'input': true, 'is-danger': errors.has('deliveryMode')}">-->
                  <!--<option-->
                    <!--v-for="item in deliveryModeList"-->
                    <!--:key="item.code"-->
                    <!--:label="item.name"-->
                    <!--:value="item.code">-->
                  <!--</option>-->
                <!--</select>-->
                <!--<el-tooltip class="item" effect="pink" :content="errors.first('deliveryMode')" placement="top">-->
                  <!--<i v-show="errors.has('deliveryMode')" class="el-icon-warning errClassSelect" v-cloak></i>-->
                <!--</el-tooltip>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>&ndash;&gt;-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="order-content skin-border">-->
        <!--<div class="order-editor-traffic">-->
          <!--<div>-->
            <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label">安装地址</label>-->
              <!--<div class="layui-block">-->
                <!--<input v-model="ruleForm.address" class="layui-input" placeholder="安装地址">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div>-->
            <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label">备注</label>-->
              <!--<div class="layui-block">-->
                <!--<input v-model="ruleForm.remark" class="layui-input" placeholder="备注">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="title-style">-->
        <!--<span>产品内容</span>-->
      <!--</div>-->
      <div class="order-editor-goods">
        <!--ceshi-->
        <div v-for="(item, index) in goodsTableHeads" :key="index" class="order-editor-fee">
          <el-form-item
            v-for="(domain) in item.data"
            :key="domain.property">
            <div class="layui-form-item">
              <label class="layui-form-label">{{domain.label}}</label>
              <div class="layui-block">
                <input v-model="domain.value" type="text" class="layui-input"/>
              </div>
            </div>
          </el-form-item>
        </div>
      </div>

    </el-form>

    <div class="footer-Button">
      <el-button size="mini" @click="MSMNotic">短信通知</el-button>
      <el-button type="primary" size="mini" @click="submitForm" :loading="btnSaveLoading">保存</el-button>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="800px"
      :before-close="handleClose">
      <template>
        <el-table ref="multipleTable" :data="tableData" style="width: 100%" border @selection-change="selectStatus">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="messageType" label="短信类型" width="100"></el-table-column>
          <el-table-column prop="toPerson" label="接收方" width="100"></el-table-column>
          <el-table-column prop="MSMtemplate" label="短信模版"></el-table-column>
        </el-table>
      </template>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onsmsClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { Base64 } from 'js-base64'
  import { mapState, mapActions } from 'vuex'
  import '../trackDetails/vali'
  import selectList from '@/components/selectList'

  export default {
    data () {
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'))
        }
        if (!(/^1[34578]\d{9}$/.test(value))) {
          return callback(new Error('请填写正确的手机号'))
        }
        callback()
      }
      return {
        // 发货人
        deliveryPersonList: [],
        deliveryPerson: false,
        // 收货人
        receivingPersonList: [],
        receivingPerson: false,
        // cys
        cys: false,
        cysList: [],
        goodsTableHeads: [
          {
            data: [
              {
                label: "产品名称",
                placeholder: '',
                property: "name",
                value: 333
              },
              {
                label: "型号",
                placeholder: '',
                property: "packing",
                value: 22211
              },
              {
                label: "数量",
                placeholder: '',
                property: "quantity",
                value: 2222
              },
              {
                label: "安装时间(kg)",
                placeholder: '',
                property: "weight",
                value: 2222
              },
              {
                label: "更换时间(方)",
                placeholder: '长*宽*高*件数(米)',
                property: "volume",
                value: 2222
              },
              {
                label: "服务类型",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "售价",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "进价",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "配件",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "人工",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "获利",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "经办人",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "维护内容与描述",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "备注",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              }
            ]
          },
          {
            data: [
              {
                label: "产品名称",
                placeholder: '',
                property: "name",
                value: 2222
              },
              {
                label: "型号",
                placeholder: '',
                property: "packing",
                value: 2222
              },
              {
                label: "数量",
                placeholder: '',
                property: "quantity",
                value: 2222
              },
              {
                label: "安装时间(kg)",
                placeholder: '',
                property: "weight",
                value: 2222
              },
              {
                label: "更换时间(方)",
                placeholder: '长*宽*高*件数(米)',
                property: "volume",
                value: 2222
              },
              {
                label: "服务类型",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "售价",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "进价",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "配件",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "人工",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "获利",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "经办人",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "维护内容与描述",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              },
              {
                label: "备注",
                placeholder: '',
                property: "unitPrice",
                value: 2222
              }
            ]
          }
        ],
        // 数据值
        goodsTableData: [
          {
            costPrice: 0,
            description: '',
            id: 0,
            installTime: '',
            model: '',
            name: '',
            number: 0,
            operator: {
            },
            parts: 0,
            personCost: 0,
            price: 0,
            profits: 0,
            remark:'',
            replaceTime: '',
            serviceType: 0,
            version: 0
          }
        ],
        name: '',
        statusList: [
          {
            name: '安装',
            code: '0'
          }
        ],
        dialogVisible: false,
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        list: null,
        listLoading: true,
        btnSaveLoading: false,
        zzType: 0,
        zzTypeList: [
          {
            name: '外部中转',
            code: '0'
          }
        ],
        jjfsList: [
          {
            name: '送到承运公司',
            code: '0'
          },
          {
            name: '承运公司上门提货',
            code: '1'
          }
        ],
        ruleForm: {
          orderNo: '',
          area: '',
          customerType:'',
          customerName: '',
          person: '',
          personPhone: '',
          remark: '',
          address: '',

          waybillDate: new Date(),
          deliveryPerson: '',
          receivingPerson: '',
          deliverySms: 1,
          receiveSms: 1,
          huidan: '0',
          huidanfen: 0
        },
        // rules_system: {
        //   waybillNo: [
        //     {required: true, message: '请输入运单号', trigger: 'blur'}
        //   ],
        //   operator: [
        //     {required: true, message: '请输入经办人', trigger: 'blur'}
        //   ],
        //   receivingPhone: [
        //     {required: true, validator: checkPhone, trigger: 'blur'}
        //   ],
        //   deliveryPhone: [
        //     {required: true, validator: checkPhone, trigger: 'blur'}
        //   ],
        //   deliveryMode: [
        //     {required: true, message: '请选择送货方式', trigger: 'change'}
        //   ],
        //   payment: [
        //     {required: true, message: '请选择付款方式', trigger: 'change'}
        //   ],
        //   deliveryPerson: [
        //     {required: true, message: '请输入发货人', trigger: 'blur'}
        //   ],
        //   receivingPerson: [
        //     {required: true, message: '请输入收货人', trigger: 'blur'}
        //   ],
        //   quantity: [
        //     {required: true, message: '请输入件数', trigger: 'blur'}
        //   ],
        // },
        payMode: [
          {
            name: '现付',
            code: '0'
          },
          {
            name: '到付',
            code: '1'
          },
          {
            name: '欠付',
            code: '2'
          },
          {
            name: '月结',
            code: '3'
          },
          {
            name: '回付',
            code: '4'
          },
          {
            name: '货到打卡',
            code: '5'
          },
          {
            name: '货款扣',
            code: '6'
          },
          {
            name: '免费',
            code: '7'
          },
          {
            name: '多笔付',
            code: '8'
          }
        ],
        deliveryMode: '',
        deliveryModeList: [
          {
            name: '自提',
            code: '0'
          },
          {
            name: '送货',
            code: '1'
          },
          {
            name: '送货上门',
            code: '2'
          },
          {
            name: '送货上楼(有电梯)',
            code: '3'
          },
          {
            name: '送货上楼(无电梯)',
            code: '4'
          },
          {
            name: '送货卸货',
            code: '5'
          },
          {
            name: '送货安装',
            code: '6'
          },
          {
            name: '整车直送',
            code: '7'
          },
          {
            name: '大车直送',
            code: '8'
          }
        ],
        multipleSelection: [],
        tableData: [
          {
            id: 'deliverySms',
            status: 1,
            messageType: '跟踪-发货人',
            toPerson: '发货人',
            MSMtemplate: '您好，您发给{收货人}的{货物名称}已受理，运单号{运单号}。查单链接：{短信跟踪链接} {当前组织名称}，电话:{当前组织联系电话}'
          },
          {
            id: 'receiveSms',
            status: 1,
            messageType: '跟踪-收货人',
            toPerson: '收货人',
            MSMtemplate: '您好，{发货人}发给您的{货物名称}已受理，运单号{运单号}。查单链接：{短信跟踪链接} {当前组织名称}，电话:{当前组织联系电话}'
          }
        ],
        smsList: [],
        allUserList: []
      }
    },
    mounted () {
      this.getAllUser()
    },
    computed: {
      ...mapState({
        user: state => state.user.user,
        orderTrackList: state => state.order.orderTrackList
      })
    },
    components: {
      selectList: selectList
    },
    filters: {
      filterStatus (value, list) {
        if (value == '99') {
          return '创建订单'
        }
        let valueName = ''
        list.map(item => {
          if (item.code == value) valueName = item.name
        })
        return valueName
      }
    },
    methods: {
      ...mapActions([
        'getCustomerSave',
        'getCustomerList',

        'getWaybillSaveSMS',
        'getSMS',
        'getWaybillPhone',
        'getWaybillNoDuplicate',
        'getUserAllUser'
      ]),
      // 获取订单数据
      getCustomerListMethod () {
        let params = Object.assign({id: ''})
        this.getCustomerList(params).then(res => {
          if (res.data && res.data.result) {
            let data = res.data.result
            this.goodsTableData = data.products
            this.ruleForm = data.data
          }
        })
      },
      // 发货人
      selectValueHandle(value){
        this.deliveryPerson = false
        this.ruleForm.deliveryCompany = value.company
        this.ruleForm.deliveryPerson = value.person
        this.ruleForm.shippingAddress = value.address
        this.ruleForm.deliveryPhone = value.phone
      },
      deliveryPersonChange () {
        let params = {
          name: this.ruleForm.deliveryPerson,
          type: 1 // 1收发人 2承运
        }
        this.getWaybillPhone(params).then(res => {
          this.deliveryPersonList = res.data.data
        })
      },
      // 收货人
      selectReceivingValueHandle(value){
        this.receivingPerson = false
        this.ruleForm.receivingCompany = value.company
        this.ruleForm.receivingPerson = value.person
        this.ruleForm.receivingAddress = value.address
        this.ruleForm.receivingPhone = value.phone
      },
      receivingPersonChange () {
        let params = {
          name: this.ruleForm.receivingPerson,
          type: 1 // 1收发人 2承运
        }
        this.getWaybillPhone(params).then(res => {
          this.receivingPersonList = res.data.data
        })
      },
      // 承运商
      selectCysValueHandle(value){
        this.cys = false
        this.ruleForm.cys = value.person
        this.ruleForm.cyssjh = value.phone
      },
      cysChange () {
        let params = {
          name: this.ruleForm.cys,
          type: 2 // 1收发人 2承运
        }
        this.getWaybillPhone(params).then(res => {
          this.cysList = res.data.data
        })
      },
      addGoodsList () {
        this.goodsTableData.push({
          costPrice: 0,
          description: '',
          id: 0,
          installTime: '',
          model: '',
          name: '',
          number: 0,
          operator: {
          },
          parts: 0,
          personCost: 0,
          price: 0,
          profits: 0,
          remark:'',
          replaceTime: '',
          serviceType: 0,
          version: 0
        })
      },
      delGoodsList (index) {
        this.goodsTableData.splice(index, 1)
      },
      // 获取全部user
      getAllUser () {
        this.getUserAllUser().then(res => {
          this.allUserList = res.data.data
          this.ruleForm.operator = this.user.id
        })
      },
      handleClose () {
        this.multipleSelection = [this.tableData[0], this.tableData[1]]
        this.dialogVisible = false
      },
      // 短信方确认
      onsmsClick () {
        if (this.smsList.length) {
          this.smsList.map(item => {
            this.ruleForm[item.id] = item.status
          })
        } else {
          this.ruleForm['deliverySms'] = 0
          this.ruleForm['receiveSms'] = 0
        }
        // console.log(this.ruleForm, 2222)
        this.dialogVisible = false
      },
      selectStatus (selection) {
        this.multipleSelection = selection
        let aa = []
        if (selection.length == 1) {
          selection.map(v => {
            this.tableData.map(item => {
              if (item.id === v.id) {
                item.status = 1
              } else {
                item.status = 0
              }
            })
          })
        } else if (selection.length == 2) {
          this.tableData.map(item => {
            item.status = 1
          })
        } else {
          this.tableData.map(item => {
            item.status = 0
          })
        }
        this.smsList = this.tableData
        // console.log(this.tableData)
      },
      uniq (array) {
        var temp = [] //一个新的临时数组
        for (var i = 0; i < array.length; i++) {
          if (temp.indexOf(array[i]) == -1) {
            temp.push(array[i])
          }
        }
        return temp
      },
      MSMNotic () {
        this.dialogVisible = true
        this.$nextTick(() => {
          this.multipleSelection.map(row => {
            this.$refs.multipleTable.toggleRowSelection(row, true)
          })
        })
      },
      // 提交
      submitForm () {
        this.btnSaveLoading = true

        let params = Object.assign({}, this.ruleForm)
        params.waybillDate = new Date(this.ruleForm.waybillDate).getTime()
        params.operator = {
          id: params.operator
        }
        params.products = this.goodsTableData
        this.getCustormerSave(params).then(res => {
          // let _params = {
          //   deliverySms: params.deliverySms,
          //   receiveSms: params.receiveSms,
          //   id: res.data.data
          // }
          // this.getWaybillSaveSMS(_params).then(() => {
          //   this.$message({
          //     type: 'success',
          //     message: '保存成功'
          //   })
          //   this.$router.push({name: 'orderList'})
          // })
          this.$message({
            type: 'success',
            message: '保存成功'
          })
          this.$router.push({name: 'orderList'})
        }).catch(() => {
          this.btnSaveLoading = false
        })

        // this.$validator.validateAll().then((result) => {
        //   if (result) {
        //     let params = Object.assign({}, this.ruleForm)
        //     params.waybillDate = new Date(this.ruleForm.waybillDate).getTime()
        //     params.operator = {
        //       id: params.operator
        //     }
        //     params.products = this.goodsTableData
        //     this.getCustormerSave(params).then(res => {
        //       // let _params = {
        //       //   deliverySms: params.deliverySms,
        //       //   receiveSms: params.receiveSms,
        //       //   id: res.data.data
        //       // }
        //       // this.getWaybillSaveSMS(_params).then(() => {
        //       //   this.$message({
        //       //     type: 'success',
        //       //     message: '保存成功'
        //       //   })
        //       //   this.$router.push({name: 'orderList'})
        //       // })
        //       this.$message({
        //         type: 'success',
        //         message: '保存成功'
        //       })
        //       this.$router.push({name: 'orderList'})
        //     }).catch(() => {
        //       this.btnSaveLoading = false
        //     })
        //   } else {
        //     this.btnSaveLoading = false
        //     return false
        //   }
        // })
      },
      handleShowByCancel () {
        this.$router.push({name: 'orderList'})
      }
    }
  }
</script>


<style lang="scss" scoped>
  .title-style {
    color: #ff4040;
    margin-top: 20px;
  }
  .title-style span {
    font-size: 16px;
  }
  .order-no-style {
    font-size: 12px;
    line-height: 28px;
  }
  .order-editor-info {
    .plain {
      border-right: 0;
      padding-top: 5px;
      background: linear-gradient(270deg,#78aadd 1px,#fff 0);
    }
    .order-card {
      border-right: 1px solid #78aadd;
      h3 {
        min-width: 98px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        background: #cae0f6;
        color: #333;
        border-top: 1px solid #78aadd;
        border-bottom: 1px solid #78aadd;
        &:before {
          content: "";
          padding: 0 1px;
          background: #ff8100;
          margin: 0 6px;
        }
      }
    }
  }
  /deep/.el-table--enable-row-hover .el-table__body tr:hover>td {
    background: none !important;
  }
  .textCenter {
    text-align: center;
  }
  .footer-Button {
    margin-top: 20px;
    text-align: center;
  }
  .freight {
    flex: 0 0 72px;
    text-align: justify;
    text-align-last: justify;
  }
  .order-editor-extra {
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #78aadd;
    background-image: linear-gradient(270deg,#78aadd 1px,transparent 0),linear-gradient(0deg,#78aadd 1px,transparent 0);
    background-size: 100% 35px;
    >div {
      flex: 1 0 82px;
      display: flex;
      align-items: center;
      height: 35px;
      padding: 0 6px;
      border-right: 1px solid #78aadd;
      font-size: 14px;
      position: relative;
      line-height: 28px;
      &.order-remark {
        flex: 2 0 376px;
      }
      >div {
        width: 100%;
      }
    }
  }
  .order-editor-fee {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    /*align-items: stretch;*/
    border-top: 1px solid #78aadd;
    border-left: 1px solid #78aadd;
    border-bottom: 1px solid #78aadd;
    >div {
      flex: 25% 1;
      border-right: 1px solid #78aadd;
      >div {
        display: inline-flex;
        align-items: center;
        position: relative;
        height: 34px;
        padding: 0 6px;
        margin-bottom: 1px;
      }
      h3 {
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        box-shadow: inset 0 0 0 0 transparent;
        background: #cae0f6;
        border-bottom: 1px solid #78aadd;
        &:before {
          content: "";
          padding: 0 1px;
          background: #ff8100;
          margin: 0 6px;
        }
      }
    }
  }
  .order-editor-freight {
    flex: 1 50%;
    >div {
      width: 25%;
      float: left;
    }
  }
  .order-editor-pay {
    flex: 1 50%;
    >div {
      width: 33%;
      float: left;
    }
  }
  /deep/.tb-edit {
    .el-table__body {
      td, th {
        padding: 2px 0 !important;
        border-right: 1px solid #78aadd !important;
        border-bottom: 1px solid #78aadd;
      }
    }
  }
  .order-editor-goods {
    display: flex;
    flex-wrap: wrap;
    /*align-items: stretch;*/
    background: linear-gradient(270deg,#78aadd 1px,#fff 0);
    .subtract {
      flex: 0 0 31px;
      border-right: 1px solid #78aadd;
      position: relative;
      z-index: 2;
    }
    .goods-list {
      overflow: auto;
      flex: 1;
      border: solid 1px #78aadd;
    }
  }
  .order-editor-consignee {
    margin-left: 4px;
    border-left: 1px solid #78aadd;
  }
  .order-editor-person {
    display: flex;
    border-bottom: 1px solid #78aadd;
  }
  .cor-company {
    flex: 1;
    display: flex;
    align-items: center;
    height: 36px;
  }
  .order-editor-person>div>div {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    padding: 4px 0;
  }
  .order-editor-person>div>div:last-child {
    padding: 5px 5px 1px;
  }
  .order-editor-person > div {
    border-left: 1px solid #78aadd;
    display: flex;
    flex: 1 1 50%;
    border-right: 1px solid #78aadd;
  }

  .order-editor-person > div > div:first-child {
    display: flex;
    flex: 0 0 58px;
    background: #cae0f6;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;

    div {
      width: 100%;
    }

    p {
      width: 100%;
      margin-top: 3px;
      color: #333;
      font-size: 14px;
      text-align: center;
    }
  }

  .layui-input {
    width: 100%;
    outline: none;
    height: 28px;
    padding-right: 15px;
    box-shadow: inset 0 -2px 0 0 #e5e5e5;
    border: none;
    &:focus {
      box-shadow: inset 0 -2px 0 0 #ff4040;
    }
  }

  .is-danger {
    box-shadow: inset 0 -2px 0 0 #ff4040;
    background: #fff5f5;
  }

  .errClass {
    color: red;
    position: absolute;
    right: 5px;
    top: 8px;
  }
  .errClassSelect {
    color: red;
    position: absolute;
    right: 20px;
    top: 8px;
  }

  .layui-form-item {
    margin-right: 5px;
    display: flex;
  }

  .layui-label-flex {
    flex: 0 0 70px;
  }

  .layui-form-label {
    font-size: 14px;
    text-align: right;
    height: 28px;
    line-height: 28px;
    margin-right: 5px;
    flex-shrink: 0;
  }

  .layui-block {
    width: 100%;
    position: relative;
    height: 28px;
    line-height: 28px;
  }

  .app-container {
    font-size: 12px;
  }

  .orderContentClass {
    margin-bottom: 10px;
    display: inline-flex;
  }

  .order-editor-traffic {
    display: flex;
    flex-wrap: wrap;
    background-image: linear-gradient(270deg, #78aadd 1px, transparent 0), linear-gradient(0deg, #78aadd 1px, transparent 0);
    background-size: 100% 35px;
  }

  .order-editor-traffic > div, .order-editor-traffic > div.combine > div {
    flex: 1 0 188px;
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 6px;
    border-right: 1px solid #78aadd;
  }

  .order-content.skin-border {
    border-top: 1px solid #78aadd;
    border-left: 1px solid #78aadd;
    border-right: 0;
    background: linear-gradient(270deg, #78aadd 1px, #fff 0);
  }

  .consignment {
    display: flex;

    .consignmentOpen {
      flex: 1;
      text-align: left;

      > span {
        color: red;
        font-weight: bold;
        font-size: 12px;
        margin-left: 5px;
      }
    }

    .consignmentTitle {
      flex: 1;
      text-align: center;
      font-size: 24px;
      color: #333;
      line-height: 30px;
      letter-spacing: 16px;
      padding: 0 20px;

      &:after {
        content: "";
        display: block;
        height: 4px;
        margin-top: 6px;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }
    }

    .consignmentInfo {
      flex: 1;
      text-align: right;

      span {
        font-size: 16px;
        margin-right: 10px;
      }
    }
  }

  .text-red {
    color: red;
  }

  .requireClass {
    color: red;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #aab2bd;
    /* placeholder字体大小  */
    font-size: 12px;
  }
  .layui-input[disabled] {
    background: #f2f9ff;
    cursor: not-allowed;
  }

  .cysShowClass {
    position: fixed;
    z-index: 2222;
    width: 150px;
    max-height: 250px;
    overflow: scroll;
  }
</style>
<style>
  .order-editor-fee .el-form-item {
    margin-bottom: 0 !important;
  }
  .el-table.table-wrap-header td, .el-table.table-wrap-header th{
    padding: 4px 0 !important;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height:7px;
    background-color:#b5b1b1;
  }
  ::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
    border-radius: 10px;
    background-color: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
    background-color:#b5b1b1;
  }
</style>

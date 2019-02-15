<template>
  <div class="app-container" style="min-width: 1024px;">
    <el-form ref="ruleForm" :model="ruleForm">
      <div class="consignment">
        <div class="consignmentOpen">
          <div class="layui-form-item fr waybillNoClass">
            <label class="order-no-style requireClass">订单编号</label>
            <div class="layui-block" style="width: 160px">
              <input v-model="ruleForm.orderNo" v-validate="'required'"
                     autocomplete="off"
                     :class="{'input': true, 'is-danger': errors.has('orderNo')}" type="text" name="orderNo"
                     class="layui-input" placeholder="订单编号">
              <el-tooltip class="item" effect="pink" :content="errors.first('orderNo')" placement="top">
                <i v-show="errors.has('orderNo')" class="el-icon-warning errClass" v-cloak></i>
              </el-tooltip>
            </div>
          </div>
        </div>
        <div class="consignmentTitle">客户管理表</div>
        <div class="consignmentInfo">
          <el-form-item prop="orderDate" class="orderContentRight fr">
            <el-date-picker
              v-model="ruleForm.orderDate"
              type="datetime"
              :clearable="false"
              :editable="false"
              placeholder="选择日期时间"
              align="right"
              class="orderInput"
              :picker-options="pickerOptions1"
              size="mini"
              value-format="timestamp"
              style="width:200px">
            </el-date-picker>
          </el-form-item>
        </div>
      </div>
      <!--表单内容-->
      <div class="title-style">
        <span>客户信息</span>
      </div>
      <div class="order-content skin-border">
        <div class="order-editor-traffic">
          <div>
            <div class="layui-form-item">
              <label class="layui-form-label requireClass">所属地区</label>
              <div class="layui-block">
                <input v-model="ruleForm.area" v-validate="'required'"
                       autocomplete="off"
                       :class="{'input': true, 'is-danger': errors.has('area')}" type="text" name="area"
                       class="layui-input" placeholder="所属地区">
                <el-tooltip class="item" effect="pink" :content="errors.first('area')" placement="top">
                  <i v-show="errors.has('area')" class="el-icon-warning errClass" v-cloak></i>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div>
            <div class="layui-form-item">
              <label class="layui-form-label requireClass">客户类型</label>
              <div class="layui-block">
                <input v-model="ruleForm.customerType" v-validate="'required'"
                       autocomplete="off"
                       :class="{'input': true, 'is-danger': errors.has('customerType')}" type="text" name="customerType"
                       class="layui-input" placeholder="客户类型">
                <el-tooltip class="item" effect="pink" :content="errors.first('customerType')" placement="top">
                  <i v-show="errors.has('customerType')" class="el-icon-warning errClass" v-cloak></i>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div>
            <div class="layui-form-item">
              <label class="layui-form-label requireClass">客户名称</label>
              <div class="layui-block">
                <input v-model="ruleForm.customerName" v-validate="'required'"
                       autocomplete="off"
                       :class="{'input': true, 'is-danger': errors.has('customerName')}" type="text" name="customerName"
                       class="layui-input" placeholder="客户名称">
                <el-tooltip class="item" effect="pink" :content="errors.first('customerName')" placement="top">
                  <i v-show="errors.has('customerName')" class="el-icon-warning errClass" v-cloak></i>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div>
            <div class="layui-form-item">
              <label class="layui-form-label requireClass">联系人</label>
              <div class="layui-block">
                <input v-model="ruleForm.person" v-validate="'required'"
                       autocomplete="off"
                       :class="{'input': true, 'is-danger': errors.has('person')}" type="text" name="person"
                       class="layui-input" placeholder="联系人">
                <el-tooltip class="item" effect="pink" :content="errors.first('person')" placement="top">
                  <i v-show="errors.has('person')" class="el-icon-warning errClass" v-cloak></i>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div>
            <div class="layui-form-item">
              <label class="layui-form-label requireClass">联系电话</label>
              <div class="layui-block">
                <input v-model="ruleForm.personPhone" v-validate="'required|phone'"
                       autocomplete="off"
                       :class="{'input': true, 'is-danger': errors.has('personPhone')}" type="text" name="personPhone"
                       class="layui-input" placeholder="联系电话">
                <el-tooltip class="item" effect="pink" :content="errors.first('personPhone')" placement="top">
                  <i v-show="errors.has('personPhone')" class="el-icon-warning errClass" v-cloak></i>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-content skin-border">
        <div class="order-editor-traffic">
          <div>
            <div class="layui-form-item">
              <label class="layui-form-label requireClass">安装地址</label>
              <div class="layui-block">
                <input v-model="ruleForm.address" v-validate="'required'"
                       autocomplete="off"
                       :class="{'input': true, 'is-danger': errors.has('address')}" type="text" name="address"
                       class="layui-input" placeholder="安装地址">
                <el-tooltip class="item" effect="pink" :content="errors.first('address')" placement="top">
                  <i v-show="errors.has('address')" class="el-icon-warning errClass" v-cloak></i>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div>
            <div class="layui-form-item">
              <label class="layui-form-label">备注</label>
              <div class="layui-block">
                <input v-model="ruleForm.remark" class="layui-input" placeholder="备注">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="title-style">
        <span>产品内容</span>
      </div>
      <div class="order-editor-goods">
        <!--ceshi-->
        <div class="displayFlex" v-for="(item, index) in goodsTableHeads" :key="index">
          <div class="displayFlex_mode">
            <span class="iconfont icon-plus-circle curPoint" v-if="index== 0" @click="addGoodsList"></span>
            <span class="iconfont icon-minus-circle curPoint" v-else @click="delGoodsList(index)"></span>
          </div>
          <div class="order-editor-fee">
            <el-form-item
              v-for="(domain) in item.data"
              :key="domain.property">
              <div class="layui-form-item" v-if="domain.label === '经办人'">
                <label class="layui-form-label requireClass">{{domain.label}}</label>
                <div class="layui-block">
                  <select v-model="domain.value" v-validate="'required'" :name="'operator' + index" class="layui-input"
                          :class="{'input': true, 'is-danger': errors.has('operator' + index)}">
                    <option
                      v-for="item in allUserList"
                      :key="item.id"
                      :label="item.username"
                      :value="item.id">
                    </option>
                  </select>
                  <el-tooltip class="item" effect="pink" :content="errors.first('operator' + index)" placement="top">
                    <i v-show="errors.has('operator' + index)" class="el-icon-warning errClassSelect" v-cloak></i>
                  </el-tooltip>
                </div>
              </div>
              <div class="layui-form-item" v-else-if="domain.label === '安装时间' || domain.label === '更换时间'">
                <label class="layui-form-label requireClass">{{domain.label}}</label>
                <div class="layui-block">
                  <el-date-picker
                    v-model="domain.value"
                    type="datetime"
                    :clearable="false"
                    :editable="false"
                    placeholder="选择日期时间"
                    align="right"
                    class="orderInput"
                    :picker-options="pickerOptions1"
                    size="mini"
                    value-format="timestamp"
                    style="width:100%">
                  </el-date-picker>
                </div>
              </div>
              <div class="layui-form-item" v-else>
                <label class="layui-form-label">{{domain.label}}</label>
                <div class="layui-block">
                  <input v-model="domain.value" type="text" class="layui-input"/>
                </div>
              </div>
            </el-form-item>
          </div>
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
  import {mapActions, mapState} from 'vuex'
  import '../trackDetails/vali'
  import selectList from '@/components/selectList'

  export default {
    data () {
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
                value: ''
              },
              {
                label: "型号",
                placeholder: '',
                property: "model",
                value: ''
              },
              {
                label: "数量",
                placeholder: '',
                property: "number",
                value: ''
              },
              {
                label: "安装时间",
                placeholder: '',
                property: "installTime",
                value: ''
              },
              {
                label: "更换时间",
                placeholder: '长*宽*高*件数(米)',
                property: "replaceTime",
                value: ''
              },
              {
                label: "服务类型",
                placeholder: '',
                property: "serviceType",
                value: ''
              },
              {
                label: "售价",
                placeholder: '',
                property: "price",
                value: ''
              },
              {
                label: "进价",
                placeholder: '',
                property: "costPrice",
                value: ''
              },
              {
                label: "配件",
                placeholder: '',
                property: "parts",
                value: ''
              },
              {
                label: "人工",
                placeholder: '',
                property: "personCost",
                value: ''
              },
              {
                label: "获利",
                placeholder: '',
                property: "profits",
                value: ''
              },
              {
                label: "经办人",
                placeholder: '',
                property: "operator",
                value: ''
              },
              {
                label: "维护内容与描述",
                placeholder: '',
                property: "description",
                value: ''
              },
              {
                label: "备注",
                placeholder: '',
                property: "remark",
                value: ''
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
          orderDate: new Date(),
          customerSms: 1,
          platformSms: 1,
        },
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
            id: 'customerSms',
            status: 1,
            messageType: '是否给客户发短信',
            toPerson: '客户',
            MSMtemplate: '您好，您平台中{客户}所购买的{产品名称}耗材已到更换时间，请您及时联系客户方更换'
          },
          {
            id: 'platformSms',
            status: 1,
            messageType: '是否给平台管理员发短信',
            toPerson: '管理员',
            MSMtemplate: '您好，苏康水给您安装的{产品名称}，所属耗材已到更换时间，请尽快联系售后处理：13915400696'
          }
        ],
        smsList: [],
        allUserList: []
      }
    },
    mounted () {
      this.multipleSelection = [this.tableData[0], this.tableData[1]]
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
        this.goodsTableHeads.push({
          data: [
            {
              label: "产品名称",
              placeholder: '',
              property: "name",
              value: ''
            },
            {
              label: "型号",
              placeholder: '',
              property: "model",
              value: ''
            },
            {
              label: "数量",
              placeholder: '',
              property: "number",
              value: ''
            },
            {
              label: "安装时间",
              placeholder: '',
              property: "installTime",
              value: ''
            },
            {
              label: "更换时间",
              placeholder: '长*宽*高*件数(米)',
              property: "replaceTime",
              value: ''
            },
            {
              label: "服务类型",
              placeholder: '',
              property: "serviceType",
              value: ''
            },
            {
              label: "售价",
              placeholder: '',
              property: "price",
              value: ''
            },
            {
              label: "进价",
              placeholder: '',
              property: "costPrice",
              value: ''
            },
            {
              label: "配件",
              placeholder: '',
              property: "parts",
              value: ''
            },
            {
              label: "人工",
              placeholder: '',
              property: "personCost",
              value: ''
            },
            {
              label: "获利",
              placeholder: '',
              property: "profits",
              value: ''
            },
            {
              label: "经办人",
              placeholder: '',
              property: "operator",
              value: ''
            },
            {
              label: "维护内容与描述",
              placeholder: '',
              property: "description",
              value: ''
            },
            {
              label: "备注",
              placeholder: '',
              property: "remark",
              value: ''
            }
          ]
        })
      },
      delGoodsList (index) {
        this.goodsTableHeads.splice(index, 1)
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
          this.ruleForm['customerSms'] = 0
          this.ruleForm['platformSms'] = 0
        }
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
        this.$validator.validateAll().then((result) => {
          if (result) {
            let params = Object.assign({}, this.ruleForm)
            params.orderDate = new Date(this.ruleForm.orderDate).getTime()

            // 动态添加数据转换
            params.products = this.goodsTableHeads.map(res => {
              let aa = {}
              res.data.map(items => {
                if (items.property === 'operator') {
                  aa[`${items.property}`] = {
                    id: items.value
                  }
                  return aa
                } else {
                  aa[`${items.property}`] = `${items.value}`
                  return aa
                }
              })
              return aa
            })
            // 删除operator
            delete params.operator
            // console.log(params)
            this.getCustomerSave(params).then(res => {
              this.$message({
                type: 'success',
                message: '保存成功'
              })
              this.$router.push({name: 'orderList'})
            }).catch(() => {
              this.btnSaveLoading = false
            })
          } else {
            this.btnSaveLoading = false
            return false
          }
        })
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
    /*background: linear-gradient(270deg,#78aadd 1px,#fff 0);*/
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
  .displayFlex {
    display: flex;
    .displayFlex_mode {
      flex: 1;
      padding: 5px;
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

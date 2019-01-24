<template>
  <div class="app-container">
    <div>
      <el-form :inline="true" :model="formInline" ref="ruleForm" class="demo-form-inline">
        <el-form-item label="运单号">
          <el-input v-model="formInline.waybillNo" placeholder="运单号"></el-input>
        </el-form-item>
        <el-form-item label="开单日期">
          <el-date-picker
            v-model="formInline.waybillDate"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            style="width: 380px">
          </el-date-picker>
        </el-form-item>
        <!--<el-form-item label="经办人">-->
          <!--<el-select v-model="formInline.operator" style="width:180px" placeholder="请选择">-->
            <!--<el-option label="全部" value=""></el-option>-->
            <!--<el-option-->
              <!--v-for="item in allUserList"-->
              <!--:key="item.id"-->
              <!--:label="item.username"-->
              <!--:value="item.id">-->
            <!--</el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="fetchData()">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="orderList" v-loading.body="listLoading" element-loading-text="Loading" border fit
              highlight-current-row>
      <el-table-column label="运单号" width="200" align="center">
        <template slot-scope="scope">
          <div class="waybillNoClass" @click="showDetail(scope.row.id)">{{scope.row.orderNo}}</div>
        </template>
      </el-table-column>
      <el-table-column label="开单时间" min-width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.orderDate ? $moment(scope.row.orderDate).format('YYYY-MM-DD hh:mm:ss') : ''}}
        </template>
      </el-table-column>
      <!--<el-table-column label="发货人" width="150" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.deliveryPerson}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="收货人" width="150" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.receivingPerson}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="运单状态" width="110" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.status | filterStatus(statusList)}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="发站" width="110" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.departureStation}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="到站" width="110" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.arriveStation}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="送货方式" width="110" align="center">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.deliveryMode | filterMode(deliveryMode)}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column label="操作" width="110" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="showDetail(scope.row.id)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="pageSizeChange"
      @current-change="currentPageChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      style="text-align: right;margin-top: 10px"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        list: null,
        allUserList: [],
        listLoading: true,
        formInline: {
          waybillDate: this.getSeventDays(),
          waybillNo: ''
        }
      }
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
      },
      filterMode (value, list) {
        let valueName = ''
        list.map(item => {
          if (item.code == value) valueName = item.name
        })
        return valueName
      }
    },
    computed: {
      ...mapState({
        // 已关联列表
        orderList: state => state.order.orderList.content,
        total: state => state.order.orderList.totalElements,
        pageSize: state => state.order.orderList.size,
        currentPage: state => state.order.orderList.number + 1,
        user: state => state.user.user
      })
    },
    mounted () {
      this.getAllUser()
      this.fetchData()
    },
    methods: {
      ...mapActions([
        'getWaybillPage',
        'getUserAllUser'
      ]),
      showDetail (id) {
        this.$router.push({name: 'orderDetail', params: {id: id}})
      },
      waybillNoClick (row) {
        this.$router.push({name: 'orderTrack', params: {id: row.id}})
      },
      getSeventDays () {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
      },
      getAllUser () {
        this.getUserAllUser().then(res => {
          this.allUserList = res.data.data
          this.formInline.operator = this.user.id
        })
      },
      /**
       * @description 已关联案事件改变页码后请求接口数据
       * @pageSize 每页显示数据记录数
       */
      pageSizeChange (pageSize) {
        this.fetchData(pageSize)
      },
      /**
       * @description 已关联案事件当前页码改变后处理数据
       * @pageNo 当前页码
       */
      currentPageChange (pageNo) {
        this.fetchData(this.pageSize, pageNo - 1)
      },
      fetchData (pageSize = 10, pageNo = 0) {
        this.listLoading = true
        let params
        if (this.formInline.waybillDate && this.formInline.waybillDate.length) {
          params = {
            pageNo,
            pageSize,
            params: [
              {
                andOr: "and",
                name: "orderNo",
                operation: "like",
                value: this.formInline.waybillNo
              },
              {
                andOr: "and",
                name: "orderDate",
                operation: "between",
                value: ['#toDate' + new Date(this.formInline.waybillDate[0]).getTime(), '#toDate' + new Date(this.formInline.waybillDate[1]).getTime()]
              }
            ]
          }
        } else {
          params = {
            pageNo,
            pageSize,
            params: [
              {
                andOr: "and",
                name: "orderNo",
                operation: "like",
                value: this.formInline.waybillNo
              }
            ]
          }
        }
        this.getWaybillPage(params).then(res => {
          this.listLoading = false
        }).catch(() => {
          this.listLoading = false
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .waybillNoClass {
    color: #409EFF;
    cursor: pointer;
  }
</style>

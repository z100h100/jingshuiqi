<template>
  <div class="app-container">
    <div>
      <el-form :inline="true" :model="formInline" ref="ruleForm" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.person" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formInline.personPhone" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="订单日期">
          <el-date-picker
            v-model="formInline.orderDate"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            style="width: 380px">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="fetchData()">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="orderList" v-loading.body="listLoading" element-loading-text="Loading" border fit
              highlight-current-row>
      <el-table-column label="订单号" width="200" align="center">
        <template slot-scope="scope">
          <div>{{scope.row.orderNo}}</div>
        </template>
      </el-table-column>
      <el-table-column label="订单时间" min-width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.orderDate ? $moment(scope.row.orderDate).format('YYYY-MM-DD hh:mm:ss') : ''}}
        </template>
      </el-table-column>
      <el-table-column label="客户名称" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.customerName}}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.person}}
        </template>
      </el-table-column>
      <el-table-column label="手机号" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row. personPhone}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="showDetail(scope.row.id, 'show')">查看</el-button>
          <el-button type="text" @click="showDetail(scope.row.id, 'edit')">修改</el-button>
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
          orderDate: this.getSeventDays(),
          person: '',
          personPhone: ''
        }
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
      showDetail (id, flag) {
        this.$router.push({name: 'orderDetail', params: {id: id, flag: flag}})
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
        let params = {
          pageNo,
          pageSize,
          params: []
        }
        if (this.formInline.person) {
          params.params.push(
            {
              andOr: "and",
              name: "person",
              operation: "like",
              value: this.formInline.person
            }
          )
        }
        if (this.formInline.personPhone) {
          params.params.push(
            {
              andOr: "and",
              name: "personPhone",
              operation: "like",
              value: this.formInline.personPhone
            }
          )
        }
        if (this.formInline.orderDate && this.formInline.orderDate.length) {
          params.params.push(
            {
              andOr: "and",
              name: "orderDate",
              operation: "between",
              value: ['#toDate' + new Date(this.formInline.orderDate[0]).getTime(), '#toDate' + new Date(this.formInline.orderDate[1]).getTime()]
            }
          )
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

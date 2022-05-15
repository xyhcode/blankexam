<template>
  <div>
    <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">管理中心</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>学生管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table :data="flow"
                stripe
                style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="ID"
          fit prop="id">
        </el-table-column>
        <el-table-column
          label="流水ID"
          fit prop="flow_id">
        </el-table-column>
        <el-table-column
          label="订单ID"
          fit prop="order_id">
        </el-table-column>
        <el-table-column
          label="支付金额"
          fit prop="pay_amount">
        </el-table-column>
        <el-table-column
          label="用户名"
          fit prop="username">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small">
              编辑
            </el-button>
            <el-button
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px 0 20px 0;float: left">
        <el-button>取消选择</el-button>
        <el-button>批量删除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Flow',
  data(){
    return{
      flow:[]
    }
  },
  mounted () {
    this.getflow();
  },
  methods:{
    getflow() {
      this.$axios.get('/order/flow').then((req)=>{
        this.flow=req.data.data;
      })
    }
  }
}
</script>

<style scoped>

</style>

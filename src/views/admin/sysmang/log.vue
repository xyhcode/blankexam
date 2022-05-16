<template>
  <div>
    <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">管理中心</el-breadcrumb-item>
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>日志管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table :data="loglist"
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
          label="请求地址"
          fit prop="classes_name">
        </el-table-column>
        <el-table-column
          label="IP地址"
          fit prop="ip">
        </el-table-column>
        <el-table-column
          label="请求方式"
          fit prop="methods_name">
        </el-table-column>
        <el-table-column
          label="请求参数"
          fit prop="paramses">
        </el-table-column>
        <el-table-column
          label="请求用户"
          fit prop="user_name">
        </el-table-column>
        <el-table-column
          label="创建时间"
          fit prop="create_time">
          <template v-slot="scope">
            {{scope.row.create_time | create_time}}
          </template>
        </el-table-column>
<!--        <el-table-column
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
        </el-table-column>-->
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
  name: 'log',
  data () {
    return{
      loglist: [],
    }
  },
  mounted () {
    this.getlog();
  },
  methods:{
    getlog(){
      this.$axios.get('/log/').then((req)=>{
        this.loglist = req.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>

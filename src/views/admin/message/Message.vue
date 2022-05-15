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
      <el-table :data="messagelist"
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
          label="主题"
          fit prop="subject">
        </el-table-column>
        <el-table-column
          label="内容"
          fit prop="content">
        </el-table-column>
        <el-table-column
          label="发送人"
          fit prop="send_username">
        </el-table-column>
        <el-table-column
          label="接收账号"
          fit prop="receive_num">
        </el-table-column>
        <el-table-column
          label="发送方式"
          fit prop="send_type">
          <template v-slot="scope">
            {{scope.row.send_type==0 ? '邮箱':'短信'}}
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          fit prop="create_time">
          <template v-slot="scope">
            {{scope.row.create_time | create_time}}
          </template>
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
  name: 'Message',
  data(){
    return{
      messagelist:[]
    }
  },
  mounted () {
    this.getmessage();
  },
  methods:{
    getmessage () {
      this.$axios.get('/message/').then((req)=>{
        this.messagelist=req.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>

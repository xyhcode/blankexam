<template>
  <div>
    <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">管理中心</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        <el-breadcrumb-item>最近更新</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table :data="newlis"
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
          label="用户名"
          fit prop="username">
        </el-table-column>
        <el-table-column
          label="内容"
          fit prop="new_content">
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
  name: 'New',
  data(){
    return{
      newlis:[]
    }
  },
  mounted () {
    this.getnew();
  },
  methods:{
    getnew(){
      this.$axios.get('/new/').then((req)=>{
        console.log(req.data.data);
        this.newlis=req.data.data;
      })
    }
  }
}
</script>

<style scoped>

</style>

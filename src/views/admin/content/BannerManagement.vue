<template>
  <div>
    <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">管理中心</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        <el-breadcrumb-item>图书管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table :data="banner"
        stripe
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="广告名称"
          fit prop="name">
        </el-table-column>
        <el-table-column
          label="链接地址"
          fit prop="tourl">
        </el-table-column>
        <el-table-column
          label="图片地址"
          fit prop="image_url">
          <template v-slot="scope">
            <el-image :fit="fit" style="width: 100px; height: 100px" :src="scope.row.image_url">
            </el-image>
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
        name: 'BannerManagement',
        data(){
          return{
            banner:[]
          }
        },
      mounted () {
          this.getbanner();
      },
      methods:{
          getbanner(){
            this.$axios.get('/banner/').then((res)=>{
              this.banner = res.data.data;
            })
          }
      }
    }
</script>

<style scoped>

</style>

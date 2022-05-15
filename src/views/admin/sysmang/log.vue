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
      <el-table :data="student"
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
          label="姓名"
          fit prop="stu_name">
        </el-table-column>
        <el-table-column
          label="电话"
          fit prop="phone">
        </el-table-column>
        <el-table-column
          label="入学时间"
          fit prop="create_time">
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
  name: 'log'
}
</script>

<style scoped>

</style>

<template>
  <el-menu
    class="el-menu-admin"
    router
    mode="vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
    <div style="height: 80px;"></div>
      <!--index 没有用但是必需字段-->
      <el-submenu  v-for="(item,i) in adminMenus" :key="i" :index="(i).toString()" style="text-align: left">
        <span slot="title" style="font-size: 17px;">
          <i :class="item.icon_cls"></i>
          {{item.name_zh}}
        </span>
        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
          <i :class="child.icon_cls"></i>
          {{ child.name_zh }}
        </el-menu-item>
      </el-submenu>
  </el-menu>
</template>

<script>
    export default {
      name: 'AdminMenu',
      data () {
        return {
          isCollapse: false,
          adminMenus:[]
        }
      },
      mounted () {
        this.$axios.get('/menu/').then((req)=>{
          console.log(req);
          if(req.data.code == 200){
            this.adminMenus=req.data.data;
          }
        })
      }
    }
</script>

<style scoped>
  .el-menu-admin {
    border-radius: 5px;
    height: 100%;
  }
</style>

<template>
  <el-container class="home">
    <el-aside class="nav-side" width="200px">Aside</el-aside>
    <el-container class="content-right">
      <el-header class="nav-top">Header</el-header>
      <el-main class="main-content">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .nav-side {
    background-color: #001529;
    overflow-y: auto;
    /* 展开和缩小添加动态效果 */
    transition: width .5s;
  }
  .content-right {
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
    }
    .main-content {
      background-color: #eef0f3;
    }

  }
  
}
</style>
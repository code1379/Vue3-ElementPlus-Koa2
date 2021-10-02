<template>
  <div class="home">
    <h1>首页</h1>
    <el-menu mode="horizontal" :default-active="$route.path" router>
      <el-menu-item index="/welcome">欢迎页面</el-menu-item>
      <el-menu-item index="/login">登录页面</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
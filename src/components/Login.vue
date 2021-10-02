<template>
  <div class="welcome">
    <h1>登录页面</h1>
    <el-form>
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script >
// import { onMounted, getCurrentInstance } from "vue";
// const instance = getCurrentInstance();

// console.log(instance);

// onMounted(() => {
//   // ! composition api 中没有 this
//   // this.$request({
//   //   url: "/login",
//   // }).then((res) => {
//   //   console.log(res);
//   // });

//   instance.ctx
//     .$request({
//       url: "/login",
//     })
//     .then((res) => {
//       console.log(res);
//     });
// });

export default {
  mounted() {
    // this.$request({
    //   url: "/login",
    //   method: "POST",
    //   data: {
    //     name: "dell"
    //   }
    // }).then(res => {
    //   console.log(res)
    // })

    this.$request.post("/login", {name: "dell"}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    this.$storage.setItem("name", "dell")
    this.$storage.setItem("age", 18)
    this.$storage.setItem("userInfo", {name: "why", age: 18})
    const name = this.$storage.getItem("name")
    console.log(name)
    const userInfo = this.$storage.getItem("userInfo")
    console.log(userInfo)

  }
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="login">
    <el-card :form="form" class="box-card">
      <h1 class="box-card-title">登录页面</h1>
      <el-form class="box-card-form">
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit-btn" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script >
import { AddLocation, Edit } from "@element-plus/icons";
export default {
  components: { AddLocation, Edit },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    // this.$request
    //   .post("/login", { name: "dell" })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    this.$storage.setItem("name", "dell");
    this.$storage.setItem("age", 18);
    this.$storage.setItem("userInfo", { name: "why", age: 18 });
    const name = this.$storage.getItem("name");
    console.log(name);
    const userInfo = this.$storage.getItem("userInfo");
    console.log(userInfo);
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background-color: #f9fcff;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 500px;
    &-title {
      text-align: center;
      font-weight: bold;
      font-size: 40px;
      line-height: 80px;
    }
    &-form {
      .submit-btn {
        width: 100%;
      }
    }
  }
}
</style>
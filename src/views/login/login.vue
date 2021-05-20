<!-- login -->
<template>
  <div class="login">
    <el-form :model="submitData" ref="submitData" :rules="rules">
      <div class="loginTitle">
        <h2>欢迎使用</h2>
        <img src="@/assets/img/logo.png">
      </div>
      <el-form-item label="账号" prop="userName">
        <el-input v-model="submitData.userName" placeholder="账号" type="text" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="submitData.password" placeholder="密码" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('submitData')">登录</el-button>
      </el-form-item>

<!--      <el-form-item label="账号" prop="userName" :rules="[{required: true, message:'账号不可为空'}]">-->
<!--        <el-input v-model="submitData.userName" placeholder="账号" type="text" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码" prop="password" :rules="[{required: true, message:'密码不可为空'}]">-->
<!--        <el-input v-model="submitData.password" placeholder="密码" type="password" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button @click="submitForm('submitData')">登录</el-button>-->
<!--      </el-form-item>-->
    </el-form>
  </div>
</template>

<script>
import { code } from "@/api/login";
/* 账号验证规则 */
let userNameRules = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('账号不能为空'));
  }
};
/* 密码验证规则 */
let passwordRules = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('密码不能为空'));
  }
};

 export default {
   name: "logo",
   data () {
     return {
       rules: {
         userName: [{validator: userNameRules, trigger: 'blur'}],
         password: [{validator: passwordRules, trigger: 'blur'}]
       },
       loginImg: require("@/assets/img/login.png"),
       submitData: {
         userName: "",
         password: ""
       }
     }
   },
   methods: {
     submitForm (submitData) {
       this.$refs[submitData].validate((valid) => {
         if (valid) {
          alert("登陆成功！")
         }
       });
     }
   },
   created() {
     code().then((data) => {
       console.log(data)
     })
   }
 };
</script>

<style scoped>
.login { width: 1400px; height: 700px; background: #ffffff url("../../assets/img/login.png") no-repeat 150px center; border-radius: 14px; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;}

.loginTitle { display: flex;}
.loginTitle h2 { font-family: appleBlack; font-size: 36px; font-weight: 500; color: #666666; margin-bottom: 50px;}
.loginTitle img { width: 40px; height: 40px; margin: 5px 0 0 15px;}

/deep/ .el-form { width: 320px; position: absolute; right: 150px; top: 50%; transform: translateY(-50%)}
/deep/ .el-form-item__label { font-family: appleBlack; font-size: 16px; line-height: 20px;}
/deep/ .el-input__inner { font-family: appleRoutine; height: 32px; line-height: 32px; border-top: none; border-left: 0; border-right: 0; border-radius: 0; padding: 0;}
/deep/ .el-button { width: 50%; color: #ffffff; background-image: linear-gradient(#EE9BF2, #B36FFD); border: 0;}
</style>
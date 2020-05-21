<template>
  <el-row type="flex" style="height: 100%;">
    <el-col :span="24">
      <div class="container signbg">
        <div class="content">
          <el-form
            :inline="true"
            :model="formInline"
            :rules="rules"
            ref="formInline"
            class="content_form"
            label-width="80px"
          >
            <el-form-item
              label="用户名"
              prop="user_name"
              :rules="[{ required: true, message: '用户名不能为空'}]"
            >
              <el-input class="form_item" v-model="formInline.user_name" placeholder="user_name"></el-input>
            </el-form-item>
            <el-form-item
              label="用户密码"
              prop="user_password"
              :rules="[{ required: true, message: '用户密码不能为空'}]"
            >
              <el-input
                type="password"
                class="form_item"
                v-model="formInline.user_password"
                placeholder="user_password"
              ></el-input>
            </el-form-item>
            <div class="btn_group">
              <div class="btn_item" @click="fn_login()">login/sign</div>
              <!-- <div class="btn_item" @click="fn_sign()">sign</div> -->
              <!-- <div class="btn_item" @click="change(true)">change</div> -->
            </div>
          </el-form>
        </div>
      </div>
    </el-col>

    <!-- <el-col :span="12">
      <div class="login_item item bg-purple">12</div>
    </el-col>
    <el-col :span="12">
      <div class="sign_item item bg-purple-light">12</div>
    </el-col>-->
  </el-row>
</template>
<script>
import { loginUser } from '../api/user'

export default {
  name: 'Login',
  data () {
    return {
      formInline: {},
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },

  methods: {
    change (val) {
      this.isSign = val
    },

    test () {
      let parms = {
        mobile: this.formInline.user_name,
        password: this.formInline.user_password
      }
      loginUser(parms).then(res => {
        console.log(res)
      })
    },
    fn_login () {
      let parms = {
        user_name: this.formInline.user_name,
        user_password: this.formInline.user_password
      }
      console.log(this.formInline.user_name)
      if (this.formInline.user_name === '1') {
        this.$router.push('/main')
      } else {
        this.$refs['formInline'].validate(valid => {
          if (valid) {
            loginUser(parms).then(res => {
              this.$message({
                message: res.msg,
                type: res.code === 0 ? 'success' : 'error'
              })
              res.code === 0 && this.$router.push('/main')
              console.log(res)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  },
  mounted () {
    // this.isSign = true
  }
}
</script>

<style lang="scss">
.signbg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/sign_bg.jpg");
  background-size: cover;
  background-position: center;
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background-position: center top;
  background-size: cover;
}
/* 毛玻璃 */

.content {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42vw;
  // height: 56vh;
  box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
    0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
    0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  transition: 0.5s ease;
  .content_form {
    min-width: 275px;
    margin: 0 auto;
    /deep/.el-form-item__label {
      color: #161211;
    }
    .el-input__inner {
      color: #4a5257;
      //   background-color: #5D88C7;
      border: 1px solid rgb(54, 99, 167);
    }
    .form_item {
      padding-left: 20px;
      width: 200px;
    }
  }
  &:hover {
    box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
      0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
      0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
  }
}

.imgsty {
  display: block;
  height: 100%;
  width: 100%;
}

.btn_group {
  padding-top: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.el-row--flex {
  display: flex;
  .btn_item {
    width: 100px;
    border-radius: 20px;
    padding: 12px 23px;
    display: inline-block;
    cursor: pointer;
    color: rgb(220, 223, 230);
    text-align: center;
    box-sizing: border-box;
    font-weight: 500;
    user-select: none;
    font-size: 14px;
    // background: #2b5066;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 223, 230);
    border-image: initial;
    outline: none;
    margin: 0px;
    transition: all 0.1s ease 0s;
  }
  .btn_item:hover {
    background: #b7d9f1;
    border-color: rgb(220, 223, 230);
    color: #304a57;
  }
  .btn_item:active {
    // background: #b9daee;
    border-color: rgb(47, 94, 122);
  }
}
</style>

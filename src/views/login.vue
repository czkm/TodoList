<template>
  <el-row type="flex" style="height: 100%;">
    <el-col :span="24">
      <div class="container loginbg" v-if="isSign">
        <div class="content login_content">
          <el-form :inline="true" :model="formInline" class="content_form" label-width="80px">
            <el-form-item label="用户名">
              <el-input
                class="form_item"
                v-model="formInline.userevent_id"
                placeholder="userevent_id"
              ></el-input>
            </el-form-item>
            <el-form-item label="用户密码">
              <el-input
                class="form_item"
                v-model="formInline.event_title"
                placeholder="event_title"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="btn_group">
            <div class="btn_item" @click="change(false)">login</div>
            <div class="btn_item" @click="change(true)">sign</div>
          </div>
        </div>
      </div>
      <div class="container signbg" v-if="!isSign">
        <div class="content sign_content">
          <el-form :inline="true" :model="formInline" class="content_form" label-width="80px">
            <el-form-item label="用户名">
              <el-input
                class="form_item"
                v-model="formInline.userevent_id"
                placeholder="userevent_id"
              ></el-input>
            </el-form-item>
            <el-form-item label="用户密码">
              <el-input
                class="form_item"
                v-model="formInline.event_title"
                placeholder="event_title"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="btn_group">
            <div class="btn_item" @click="change(false)">login</div>
            <div class="btn_item" @click="change(true)">sign</div>
          </div>
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
// import { setEvent, getEvent } from '../api/event'

export default {
  name: 'Login',
  data () {
    return {
      formInline: {},
      isSign: false
    }
  },

  methods: {
    change (val) {
      this.isSign = val
    }
  },
  mounted () {
    this.isSign = true
  }
}
</script>

<style lang="scss">
.loginbg {
  background-image: url("../assets/login_bg.jpg");
}
.signbg {
  background-image: url("../assets/sign_bg.jpg");
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
  width: 600px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -300px;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 2;
  padding: 50px;
  box-sizing: border-box;
}
.login_content::before {
  background-image: url("../assets/login_bg.jpg");
}
.sign_content::before {
  background-image: url("../assets/sign_bg.jpg");
}
.content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -ms-filter: blur(20px);
  -o-filter: blur(20px);
  filter: blur(20px);
  z-index: -3;
  margin: -30px;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
}
.imgsty {
  display: block;
  height: 100%;
  width: 100%;
}
.login_content {
  .content_form {
    width: 500px;
    margin: 0 auto;
    /deep/.el-form-item__label {
      color: #d3dce6;
    }
    .el-input__inner {
      color: #d3dce6;
      background-color: #4f6f7f;
      border: 1px solid #304a57;
    }
    .form_item {
      padding-left: 20px;
      width: 300px;
    }
  }
}
.sign_content {
  .content_form {
    width: 500px;
    margin: 0 auto;
    /deep/.el-form-item__label {
      color: #d3dce6;
    }
    .el-input__inner {
      color: #d3dce6;
      background-color: #0c647d;
      border: 1px solid #4996ac;
    }
    .form_item {
      padding-left: 20px;
      width: 300px;
    }
  }
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
    background: #2b5066;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 223, 230);
    border-image: initial;
    outline: none;
    margin: 0px;
    transition: all 0.1s ease 0s;
  }
  .btn_item:hover {
    background:#5489a9;
    border-color: rgb(220, 223, 230);
  }
  .btn_item:active {
    background: #5489a9;
    border-color:#5291b8;
  }
}
</style>

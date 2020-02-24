<template>
  <div>
    useruseruser
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="4">
        <el-input v-model="user_name" placeholder="user_name"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="user_password" placeholder="user_password"></el-input>
      </el-col>
      <!-- <el-col :span="10">
        <el-input v-model="parms_msg" placeholder="请输入msg"></el-input>
      </el-col>-->
    </el-row>

    <div></div>
    <!-- <el-row type="flex" class="row-bg" justify="space-around"> -->
    <el-button @click="Add">增</el-button>
    <el-button @click="find">查全部</el-button>

    <el-button @click="sign">注册</el-button>
    <el-button @click="login">登录</el-button>

    <!-- <el-button @click="Delete">删</el-button>
    <el-button @click="UpdateBy">改 特殊id</el-button>
    <el-button @click="find">查全部</el-button>
    <el-button @click="findid">查id</el-button>

    <el-button @click="reset">重置</el-button>-->
    <!-- </el-row> -->
  </div>
</template>
<script>
import { setUser, getUser, signUser, loginUser } from '../api/user'

export default {
  name: 'HelloWorld',
  data () {
    return {
      user_name: '',
      user_password: '',
      parms_objid: ''
    }
  },

  methods: {
    reset () {
      this.user_name = ''
      this.user_password = ''
      this.parms_objid = ''
    },
    Add () {
      let parms = {
        user_name: this.user_name,
        user_password: this.user_password
      }
      setUser(parms).then(res => {
        console.log(res)
      })
    },
    find () {
      getUser().then(res => {
        console.log(res)
      })
    },
    sign () {
      let parms = {
        user_name: this.user_name,
        user_password: this.user_password
      }
      signUser(parms).then(res => {
        console.log(res)
      })
    },
    login () {
      let parms = {
        user_name: this.user_name,
        user_password: this.user_password
      }
      loginUser(parms).then(res => {
        console.log(res)
      })
    }
    //     Delete () ,
    //       let parms = {
    //         id: this.parms_id
    //       }
    //       deleteByidExample(parms).then(res => {
    //         console.log(res)
    //       })
    //     },

    //     UpdateBy () {
    //       let parms = {
    //         objid: this.parms_objid,
    //         id: this.parms_id,
    //         msg: this.parms_msg
    //       }
    //       updateByidExample(parms).then(res => {
    //         console.log(res)
    //       })
    //     },

    //     findid () {
    //       let parms = {
    //         id: this.parms_id
    //       }
    //       findByidExample(parms).then(res => {
    //         console.log(res)
    //       })
    //     }
  }
}
</script>

<style>
</style>

<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="4">
        <el-input v-model="parms_id" placeholder="请输入id"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="parms_objid" placeholder="请输入objid"></el-input>
      </el-col>
      <el-col :span="10">
        <el-input v-model="parms_msg" placeholder="请输入msg"></el-input>
      </el-col>
    </el-row>

    <div></div>
    <!-- <el-row type="flex" class="row-bg" justify="space-around"> -->
    <el-button @click="Add">增</el-button>
    <el-button @click="Delete">删</el-button>
    <el-button @click="UpdateBy">改 特殊id</el-button>
    <el-button @click="find">查全部</el-button>
    <el-button @click="findid">查id</el-button>

    <el-button @click="reset">重置</el-button>
    <!-- </el-row> -->
  </div>
</template>
<script>
import {
  exampleGet,
  addExample,
  findByidExample,
  updateByidExample,
  deleteByidExample
} from '../api/example'

export default {
  name: 'HelloWorld',
  data () {
    return {
      parms_id: '',
      parms_msg: '',
      parms_objid: ''
    }
  },

  methods: {
    reset () {
      this.parms_id = ''
      this.parms_msg = ''
      this.parms_objid = ''
    },
    Add () {
      let parms = {
        objid: this.parms_objid,
        id: this.parms_id,
        msg: this.parms_msg
      }
      addExample(parms).then(res => {
        console.log(res)
      })
    },
    Delete () {
      let parms = {
        id: this.parms_id
      }
      deleteByidExample(parms).then(res => {
        console.log(res)
      })
    },

    UpdateBy () {
      let parms = {
        objid: this.parms_objid,
        id: this.parms_id,
        msg: this.parms_msg
      }
      updateByidExample(parms).then(res => {
        console.log(res)
      })
    },
    find () {
      exampleGet().then(res => {
        console.log(res)
      })
    },
    findid () {
      let parms = {
        id: this.parms_id
      }
      findByidExample(parms).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>

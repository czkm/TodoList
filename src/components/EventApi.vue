<template>
  <div>
    event
    <el-form :inline="true" :model="formInline" class="form_class">
      <el-form-item label="userevent_id">
        <el-input v-model="formInline.userevent_id" placeholder="userevent_id"></el-input>
      </el-form-item>
      <el-form-item label="event_title">
        <el-input v-model="formInline.event_title" placeholder="event_title"></el-input>
      </el-form-item>

      <el-form-item label="event_contain">
        <el-input v-model="formInline.event_contain" placeholder="event_contain"></el-input>
      </el-form-item>
      <el-form-item label="event_type">
        <el-input v-model="formInline.event_type" placeholder="event_type"></el-input>
      </el-form-item>

      <el-form-item label="event_time">
        <el-date-picker
          type="date"
          placeholder="event_time"
          v-model="formInline.event_time"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <!-- <el-row type="flex" class="row-bg" justify="space-around"> -->
        <el-button @click="Add">增</el-button>
        <el-button @click="find">查全部</el-button>

        <!-- <el-button @click="Delete">删</el-button>
    <el-button @click="UpdateBy">改 特殊id</el-button>
    <el-button @click="find">查全部</el-button>
    <el-button @click="findid">查id</el-button>

        <el-button @click="reset">重置</el-button>-->
        <!-- </el-row> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { setEvent, getEvent } from '../api/event'

export default {
  name: 'HelloWorld',
  data () {
    return {
      formInline: {
        event_time: ''
      }
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
        user_id: '5e52556411e937a9fd65b4de',
        ...this.formInline

      }
      setEvent(parms).then(res => {
        console.log(res)
      })
    },
    find () {
      getEvent().then(res => {
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
.form_class{
    width: 600px;
    margin: 0 auto
}
</style>

<template>
  <el-container style="height: 100%">
    <el-header>
      <el-row :gutter="20" class="el_row_padding">
        <el-col :span="4">
          <div class="toggle_btn" @click="changeAside">
            <i
              style="font-size:28px;color:#243E5A"
              class="el-icon-s-operation"
              :class="{ rotate: iconRotate }"
            />
          </div>
          <div class="toggle_btn" style="left:100px" @click="fullScreen">
            <i style="font-size:28px;transform: rotate(45deg);" class="el-icon-rank"></i>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="Alist">ToDoList</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-main>
        <div class="todo_contain box_task1">
          <div class="card_title">
            <el-tag
              class="fl title_tag"
              :style="{'width':is_add=='1' ? '0':'100px'}"
              type="danger"
              effect="plain"
            >
              <transition name="el-fade-in-linear">
                <span v-show="is_add!=='1'">很重要,很紧急</span>
              </transition>
            </el-tag>

            <div class="input_tag" v-show="is_add=='1'">
              <el-input
                placeholder="请输入内容"
                v-model="add_input"
                class="add_input_class"
                @keyup.enter.native="AddType_confirm('1')"
              />
              <el-button class="add_btn_class" @click="AddType_confirm('1')">确定✅</el-button>
              <el-button class="add_btn_class" @click="cancle()">取消❌</el-button>
              <div class="clearn_btn" @click="clearn_All('1')">
                <i class="el-icon-delete"></i>
              </div>
            </div>
            <div class="add_btn fr" @click="AddType('1')">
              <i class="el-icon-circle-plus-outline"></i>
            </div>
          </div>
          <el-row type="flex" class="card_contain_title">
            <el-col :span="4" class="card_contain_span">type</el-col>
            <el-col :span="20" class="card_contain_span">content</el-col>
          </el-row>
          <el-card class="box-card card_item">
            <el-row
              type="flex"
              class="card_list_item"
              v-for="(item,index) in todoArry_1"
              :key="index"
            >
              <el-col :span="4" class="card_item_switch">
                <el-switch
                  v-model="item.event_success"
                  :active-color="activeC"
                  :inactive-color="inactiveC"
                  active-value="1"
                ></el-switch>
              </el-col>
              <el-col
                :span="20"
                :class="{'card_item_done':item.event_success=='1'}"
                class="card_item_title"
              >{{item.event_title}}</el-col>
            </el-row>
          </el-card>
        </div>

        <div class="todo_contain box_task2">
          <div class="card_title">
            <el-tag
              class="fl title_tag"
              :style="{'width':is_add=='2' ? '0':'100px'}"
              type="danger"
              effect="plain"
            >
              <transition name="el-fade-in-linear">
                <span v-show="is_add!=='2'">重要,不紧急</span>
              </transition>
            </el-tag>

            <div class="input_tag" v-show="is_add=='2'">
              <el-input
                placeholder="请输入内容"
                v-model="add_input"
                class="add_input_class"
                @keyup.enter.native="AddType_confirm('2')"
              />
              <el-button class="add_btn_class" @click="AddType_confirm('2')">确定✅</el-button>
              <el-button class="add_btn_class" @click="cancle()">取消❌</el-button>
              <div class="clearn_btn" @click="clearn_All('2')">
                <i class="el-icon-delete"></i>
              </div>
            </div>
            <div class="add_btn fr" @click="AddType('2')">
              <i class="el-icon-circle-plus-outline"></i>
            </div>
          </div>
          <el-row type="flex" class="card_contain_title">
            <el-col :span="4" class="card_contain_span">type</el-col>
            <el-col :span="20" class="card_contain_span">content</el-col>
          </el-row>
          <el-card class="box-card card_item">
            <el-row
              type="flex"
              class="card_list_item"
              v-for="(item,index) in todoArry_2"
              :key="index"
            >
              <el-col :span="4" class="card_item_switch">
                <el-switch
                  v-model="item.event_success"
                  :active-color="activeC"
                  :inactive-color="inactiveC"
                  active-value="1"
                ></el-switch>
              </el-col>
              <el-col
                :span="20"
                :class="{'card_item_done':item.event_success=='1'}"
                class="card_item_title"
              >{{item.event_title}}</el-col>
            </el-row>
          </el-card>
        </div>
        <div class="todo_contain box_task3">
          <div class="card_title">
            <el-tag
              class="fl title_tag"
              :style="{'width':is_add=='3' ? '0':'100px'}"
              effect="plain"
            >
              <transition name="el-fade-in-linear">
                <span v-show="is_add!=='3'">不重要,很紧急</span>
              </transition>
            </el-tag>

            <div class="input_tag" v-show="is_add=='3'">
              <el-input
                placeholder="请输入内容"
                v-model="add_input"
                class="add_input_class"
                @keyup.enter.native="AddType_confirm('3')"
              />
              <el-button class="add_btn_class" @click="AddType_confirm('3')">确定✅</el-button>
              <el-button class="add_btn_class" @click="cancle()">取消❌</el-button>
              <div class="clearn_btn" @click="clearn_All('3')">
                <i class="el-icon-delete"></i>
              </div>
            </div>
            <div class="add_btn fr" @click="AddType('3')">
              <i class="el-icon-circle-plus-outline"></i>
            </div>
          </div>
          <el-row type="flex" class="card_contain_title">
            <el-col :span="4" class="card_contain_span">type</el-col>
            <el-col :span="20" class="card_contain_span">content</el-col>
          </el-row>
          <el-card class="box-card card_item">
            <el-row
              type="flex"
              class="card_list_item"
              v-for="(item,index) in todoArry_3"
              :key="index"
            >
              <el-col :span="4" class="card_item_switch">
                <el-switch
                  v-model="item.event_success"
                  :active-color="activeC"
                  :inactive-color="inactiveC"
                  active-value="1"
                ></el-switch>
              </el-col>
              <el-col
                :span="20"
                :class="{'card_item_done':item.event_success=='1'}"
                class="card_item_title"
              >{{item.event_title}}</el-col>
            </el-row>
          </el-card>
        </div>
        <div class="todo_contain box_task4">
          <div class="card_title">
            <el-tag
              class="fl title_tag"
              :style="{'width':is_add=='4' ? '0':'100px'}"
              effect="plain"
              type="success"
            >
              <transition name="el-fade-in-linear">
                <span v-show="is_add!=='4'">不重要,不紧急</span>
              </transition>
            </el-tag>

            <div class="input_tag" v-show="is_add=='4'">
              <el-input
                placeholder="请输入内容"
                v-model="add_input"
                class="add_input_class"
                @keyup.enter.native="AddType_confirm('4')"
              />
              <el-button class="add_btn_class" @click="AddType_confirm('4')">确定✅</el-button>
              <el-button class="add_btn_class" @click="cancle()">取消❌</el-button>
              <div class="clearn_btn" @click="clearn_All('4')">
                <i class="el-icon-delete"></i>
              </div>
            </div>
            <div class="add_btn fr" @click="AddType('4')">
              <i class="el-icon-circle-plus-outline"></i>
            </div>
          </div>
          <el-row type="flex" class="card_contain_title">
            <el-col :span="4" class="card_contain_span">type</el-col>
            <el-col :span="20" class="card_contain_span">content</el-col>
          </el-row>
          <el-card class="box-card card_item">
            <el-row
              type="flex"
              class="card_list_item"
              v-for="(item,index) in todoArry_4"
              :key="index"
            >
              <el-col :span="4" class="card_item_switch">
                <el-switch
                  :disabled="switch_loading"
                  @change="switchChange($event,item)"
                  v-model="item.event_success"
                  :active-color="activeC"
                  :inactive-color="inactiveC"
                  active-value="1"
                ></el-switch>
              </el-col>
              <el-col
                :span="20"
                :class="{'card_item_done':item.event_success=='1'}"
                class="card_item_title"
              >{{item.event_title}}</el-col>
            </el-row>
          </el-card>
        </div>
      </el-main>
      <!-- 侧边 -->
      <el-drawer
        :modal="false"
        show-close
        size="30%"
        title="aside"
        :visible.sync="iconRotate"
        direction="ltr"
        :with-header="false"
      >
        <div style="padding:20px 0;margin-left:-30px">
          <pieChart :chart_config="chart_config" />
          <div class="viewClass"></div>
        </div>

        <div></div>
      </el-drawer>
    </el-container>
  </el-container>
</template>

<script>
import { setEvent, getEvent, updataEvent, deletedEvent } from '../api/event'
import pieChart from '../components/pieChart'

export default {
  data () {
    return {
      user_id: '5e52556411e937a9fd65b4de',

      switch_loading: false,
      pageSizeCtr: false,
      iconRotate: false,
      is_add: '0',
      Aside_width: '10%',
      add_input: '',
      inactiveC: '#FBD4AE',
      activeC: '#4682B4',
      todoArry: [],
      chart_config: []
    }
  },
  components: {
    pieChart
  },
  mounted () {
    this.getAlllist()
  },
  computed: {
    todoArry_1 () {
      return this.arrComputed('1')
    },
    todoArry_2 () {
      return this.arrComputed('2')
    },
    todoArry_3 () {
      return this.arrComputed('3')
    },
    todoArry_4 () {
      return this.arrComputed('4')
    }
  },
  methods: {
    getAlllist () {
      getEvent().then(res => {
        if (res.code === 0) {
          this.todoArry = res.data
          this.chartComputed()
          this.$message.success(res.message)
        } else {
          this.$message.error('查询错误')
        }
      })
    },
    chartComputed () {
      this.chart_config = [
        { item: '很重要,很紧急', count: this.todoArry_1.length },
        { item: '重要,不紧急', count: this.todoArry_2.length },
        { item: '不重要,很紧急', count: this.todoArry_3.length },
        { item: '不重要,不紧急', count: this.todoArry_4.length }
      ]
    },

    arrComputed (flag) {
      // 返回index数组
      let arr = []
      for (let index = 0; index < this.todoArry.length; index++) {
        this.todoArry[index].event_type === flag &&
          arr.push(this.todoArry[index])
      }
      return arr
    },
    changeAside () {
      this.iconRotate = !this.iconRotate
      this.iconRotate === true
        ? (this.Aside_width = '0%')
        : (this.Aside_width = '10%')
    },
    AddType (flag) {
      this.is_add = flag
    },
    AddType_confirm (flag) {
      console.log(flag)
      let parms = {
        user_id: this.user_id,
        event_title: this.add_input,
        event_type: flag,
        event_success: '0'
      }
      setEvent(parms).then(res => {
        if (res.code === 0) {
          this.cancle()
          this.getAlllist()
        }
      })
    },
    switchChange (e, item) {
      let parms = {
        id: item._id,
        event_title: item.event_title,
        user_id: this.userevent_id,
        event_type: item.event_type,
        event_success: e === '1' ? '1' : '0'
      }
      this.switch_loading = true
      console.log(parms)
      updataEvent(parms)
        .then(res => {
          if (res.code === 0) {
            this.getAlllist()
          }
        })
        .finally(() => {
          this.switch_loading = false
        })
    },
    cancle () {
      this.is_add = 0
      this.add_input = ''
    },
    clearn_All (type) {
      // 清空
      let parms = {
        event_type: type
      }
      deletedEvent(parms).then(res => {
        if (res.code === 0) {
          this.getAlllist()
        }
      })
    },
    // 全屏显示控制
    fullScreen () {
      if (this.pageSizeCtr === true) {
        this.pageSizeCtr = false
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else {
          if (document.msExitFullscreen) {
            document.msExitFullscreen()
          } else {
            if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen()
            } else {
              if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
              }
            }
          }
        }
      } else {
        this.pageSizeCtr = true
        const d = document.documentElement
        if (d.requestFullscreen) {
          d.requestFullscreen()
        } else {
          if (d.msRequestFullscreen) {
            d.msRequestFullscreen()
          } else {
            if (d.mozRequestFullScreen) {
              d.mozRequestFullScreen()
            } else {
              if (d.webkitRequestFullScreen) {
                d.webkitRequestFullScreen()
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/less/index.less";

/deep/.el-input {
  .el-input__inner {
    height: 32px;
  }
}
/deep/.el-date-editor.el-input {
  width: 150px;
  i {
    line-height: 1;
  }
}
.fl {
  float: left;
  display: block;
}
.fr {
  float: right;
  display: block;
}

.rotate {
  transform: translate(120px, 0);
  transform: rotate(90deg);
}
.asideRotate {
  transition: width 0.3s linear;
  -webkit-transition: width 0.3s linear; /* Safari */
}
.toggle_btn {
  width: 28px;
  height: 28px;
  padding-right: 30px;
  position: absolute;
  left: 30px;
  top: 20px;

  // background: red;
  i {
    transition: all 0.3s linear;
    cursor: pointer;
  }
}
.imgsty {
  width: 100%;
  height: 100%;
  display: block;
}
.aside_icon {
  width: 30px;
  height: 30px;
  margin: 15px auto;
}
.todo_chart {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 20px;
  min-width: 320px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  box-sizing: border-box;
}
.todo_contain {
  width: 50%;
  height: 50%;
  float: left;
  // padding-top: 10px;
  // background-color: gold;
  .card_contain_title {
    height: 32px;
    margin: 0 auto;
    width: 80%;
    padding: 0 20px;
    .card_contain_span {
      text-align: center;
      color: #e4aeae;
    }
  }
  .card_title {
    padding-left: 10%;
    width: 80%;
    height: 32px;
    display: block;
    .title_tag {
      max-width: 100px;
      transition: width 0.3s linear;
    }
    .input_tag {
      width: 86%;
      // margin-top: 15px;
      transition: width 0.3s linear;
      -webkit-transition: width 0.3s linear; /* Safari */
      display: inline-block;

      .add_input_class {
        width: 60%;
        float: left;
      }
      .add_btn_class {
        display: inline-block;
        margin-left: 10px;
        width: 60px;
        height: 32px;
        padding: 0;
      }
      .clearn_btn {
        color: #99aabb;
        font-size: 20px;
        display: inline-block;
        padding: 0;
      }
    }
    .add_btn {
      width: 28px;
      height: 28px;
      margin: 0 5px;
    }
  }

  .card_item {
    margin-top: 20px;
    width: 80%;
    height: 60%;
    max-height: 420px;
    margin: 0px auto;
    overflow: scroll;
    .card_list_item:hover {
      background: #d8d6d6;
    }
    .card_list_item {
      margin-top: 10px;
      border-bottom: 1px dashed #d9d9d9;

      height: 32px;
      overflow: hidden;

      // background: red;
      .card_item_switch {
        margin: 4px auto;
      }
      .card_item_title {
        overflow: hidden;
        line-height: 32px;
      }
      .card_item_done {
        text-decoration: line-through;
      }
    }
  }
}
/deep/.el-icon-circle-plus-outline {
  font-size: 28px;
  color: #1eb88a;
  transition: all 0.3s linear;
}
/deep/.el-icon-circle-plus-outline:hover {
  color: #35a74e;
  transform: scale(1.1) rotate(90deg);
}
/deep/.el-icon-circle-plus-outline:active {
  color: rgb(81, 144, 211);
}
// .box_task1 {
//   border-right: 1px solid #d9d9d9;
//   margin-right: -1px;
// }
// .box_task3 {
//   border-top: 1px solid #d9d9d9;
//   border-right: 1px solid #d9d9d9;
//   margin-right: -1px;
//   margin-top: -1px;
// }

// .box_task4 {
//   border-top: 1px solid #d9d9d9;
//   margin-top: -1px;
// }

.el_row_padding {
  padding: 10px;
}
/deep/.el-container,
.el-main {
  overflow: hidden;
}
</style>

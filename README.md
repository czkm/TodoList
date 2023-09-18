# TODOLIST

![登陆页面](https://cdn.jsdelivr.net/gh/czkm/img-folder@master/TodoList/todo1_oobrmu_.jpeg)

![todo2_w0e38s_.jpeg](https://cdn.jsdelivr.net/gh/czkm/img-folder@master/TodoList/todo2_w0e38s_.jpeg)

![相关操作](https://cdn.jsdelivr.net/gh/czkm/img-folder@master/TodoList/todo3_4k6imk_.jpeg)




### 起因
初学node，js既然也可以写后台,也可以自定义接口，身为一个小前端就一直就想利用node来做一个简单的后端。由此有了这个简单的demo，看官见笑。

### 项目搭建
环境需求vue-cli(脚手架)、mongodb、nodejs



### 前端项目结构
```
todolist
|
└─── NodeApi 后端api提供文件
│     |--controller  控制层，对数据库进行操作
|     |--db          数据库实例
|     |--middlewares node中间件
|     |--router      向前端暴露的接口
|     |--app         入口js
|     |--config      全局配置
|
└─── src 前端项目目录
│     |--api           前端请求接口
|     |--assets        图片相关
|     |--components    项目公关组件
|     |--router        路由
|     |--views         视图层
|  
```



### 编写Node项目
通过npm安装koa、mongoose、body-parser模块
```
npm install koa body-parser mongoose --save
```

- 数据库链接app.js
```JavaScript
const Koa = require('koa');
const mongoose = require('mongoose');
const app = new Koa();

mongoose.connect('mongodb://localhost/todolist', 
{ useNewUrlParser: true }, err => {
  if (err) {
    console.error('Failed to connect to database');
  } else {
    console.log('数据库链接成功');
  }
});

app.listen(3000);

```
通过运行`node app.js`过浏览器访问localhost:3000就可以看到数据库已经链接

这里推荐使用robo3t这个mongodb可视化工具来快速的构建字典表

![todo4_2yjdmr_.jpeg](https://cdn.jsdelivr.net/gh/czkm/img-folder@master/TodoList/todo4_2yjdmr_.jpeg)

### 数据模型的构建

数据模型就是在数据库构建的表中，所需要的数据和数据的对应类型。

在项目根目录建立一个db文件夹，每个模型都是由一个Schema生产，举个例子在db文件夹中创建一个user.js文件,内容如下
```JavaScript
//  name: {例子
//      type: String,
//      required: true, // 表示该字段是必需的
//      unique: true // 表示该字段唯一
//  },

//引入mongoose模块
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  user_id: { //用户id
    type: String
  },
  user_name: {  //用户名称
    type: String,
    required: true
  },
  user_password: {  //用户密码
    type: String,
    required: true
  },
  user_event: {
    type: Array,
    default: ['001'] //可以给与默认值
    // 字符串数组类型
  }
}, {
//这里mongoose.Schema最好要写上第二个参数
//明确指定到数据库中的哪个表取数据，我这里写了user，目的就是为了以后操作数据要去user表中。
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
  collection: 'user',
  versionKey: false // 不需要 __v 字段，默认是加上的
})

//导出model模块
module.exports = mongoose.model('user', userSchema)
```

### 建立路由接口
在项目根目录创建一个router文件夹，文件夹中创建一个user_router.js文件,内容如下,分别为对用户的增删改查路由。项目模块较多，对应的路由也很多。如果一个个的去注册，效率太低。这里用node的fs模块去遍历读取routes下的所有路由文件，统一注册，可以直接在index.js中对所有的router进行引用。
```JavaScript
//index.js
const fs = require('fs') //引入fs读取文件
module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js' || file === '.DS_Store') {
      return
    }
    const route = require(`./${file}`)
    app.use(route.routes()).use(route.allowedMethods())//统一注册路由
  })
}

```



```JavaScript
//user_controller.js
// 引入路由模块并实例化
const Router = require('koa-router') //引入koa路由实例
// const router = new Router();
const router = new Router({ prefix: '/user' }) //设置路由访问路径
// 导如对应的控制器
const user_controller = require('../controller/user_controller')

// 为控制器的方法定义请求路径和请求方式
router.post('/set', user_controller.set_User) //保存用户
router.post('/get', user_controller.get_User) //查询用户

module.exports = router

```

### 建立controller来控制事务(增删改查)
增删改查示例：
```
const User_col = require('../db/user')

5ca3894ee78a732a245e3bb8为id
//查询所有数据
User_col.find(function (err, ret) {}

//根据条件查询数据
User_col.find({
  _id: '5ca3894ee78a732a245e3bb8',
  username: 'czk'
}, function (err, ret) {}

//根据条件查询数据的第一个
User_col.findOne({})
//根据id值查询数据
User_col.findById('5ca3894ee78a732a245e3bb8', function (err, ret) {})

改 更新
User_col.findByIdAndUpdate('5ca3894ee78a732a245e3bb8', {})

删
User_col.findByIdAndDelete('5ca3894ee78a732a245e3bb8', function (err, ret) {})

增
let admin = {
  username: 'czk',
  password: '123',
}
User_col.create(admin)

```

在项目根目录建立一个controller文件夹，在controller文件夹中创建一个user_controller.js文件,内容如下

```JavaScript
// 引入刚才定义的表
const User_col = require('../db/user')

// get 请求返回所有数据
const get_User = async (ctx, next) => {
  const result = await User_col.find({})
  ctx.status = 200
  ctx.body = {
    data: result
  }
}

// post 带一个 msg 参数，并插入数据库
const set_User = async (ctx, next) => {
  const req = ctx.request.body
  ctx.status = 200

  ctx.verifyParams({
    user_name: { type: 'string', required: true },
    //如果required为true则入参为必填项
    user_password: { type: 'string', required: true }
  })
  const result = await User_col.create(
  { user_name: req.user_name, user_password: req.user_password })
  // const result = await User_col.create({ req });
  ctx.body = {
    data: result
  }
}

// 暴露出这两个方法，在路由中使用
module.exports = {
  set_User,
  get_User
}

```
### 入口文件的构建
项目根目录的app.js，是后端项目的入口文件,内容如下


```JavaScript
const Koa = require('koa')
const mongoose = require('mongoose')
const parameter = require('koa-parameter') // 参数校验
const error = require('koa-json-error') // 错误抓取
const cors = require('koa2-cors') //koa前端跨域，解决option跨域
const BodyParser = require('koa-bodyparser') // 获取json数据
const routing = require('./router/index') 
const config = require('./config')
const app = new Koa()

mongoose.connect('mongodb://localhost/todolist', 
{ useNewUrlParser: true }, err => {
  if (err) {
    console.error('Failed to connect to database')
  } else {
    console.log('数据库链接成功')
  }
})

app.use(cors()) 
app.use(BodyParser()) // 使用koa-bodyparser：
app.use(parameter(app)) // 参数校验

routing(app) // 路由处理
app.use(error({
  postFormat: (e, { stack, ...rest }) => 
  config.environment == 'master' ? rest : { stack, ...rest }
}))

app.listen(3000, () => console.log('程序启动在3000端口了'))
```

## Build Setup

``` bash
# 前端工程

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

``` bash
# 后端api

# install dependencies
cd NodeApi

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run hot

# run all tests
npm test
```

// 引入路由模块并实例化
const Router = require('koa-router')
// const router = new Router();
const router = new Router({ prefix: '/user' })

// 导如对应的控制器
const user_controller = require('../controller/user_controller')

// 为控制器的方法定义请求路径和请求方式
router.post('/set', user_controller.set_User)
router.post('/get', user_controller.get_User)
router.post('/login', user_controller.LoginAndSign_User)

// router.post('/findByid_Example', example_controller.findByid_Example);
// router.post('/updateByid_Example', example_controller.updateByid_Example);
// router.post('/deleteByid_Example', example_controller.deleteByid_Example);

module.exports = router

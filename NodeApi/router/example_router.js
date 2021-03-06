// 引入路由模块并实例化
const Router = require('koa-router')
// const router = new Router();
const router = new Router({ prefix: '/example' })

// 导如对应的控制器
const example_controller = require('../controller/example_controller')

// 为控制器的方法定义请求路径和请求方式
router.get('/get', example_controller.getExample)
router.post('/add_Example', example_controller.add_Example)
router.post('/findByid_Example', example_controller.findByid_Example)
router.post('/updateByid_Example', example_controller.updateByid_Example)
router.post('/deleteByid_Example', example_controller.deleteByid_Example)

module.exports = router

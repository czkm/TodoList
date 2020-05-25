// 引入路由模块并实例化
const Router = require('koa-router')
// const router = new Router();
const router = new Router({ prefix: '/event' })

// 导如对应的控制器
const event_controller = require('../controller/event_controller')

// 为控制器的方法定义请求路径和请求方式
router.post('/set', event_controller.set_Event)
router.post('/get', event_controller.get_Event)
router.post('/update', event_controller.update_Event)
router.post('/deleted', event_controller.deleted_Event)
router.post('/getSuccess', event_controller.get_BySuccess)

// router.post('/findByid_Example', example_controller.findByid_Example);
// router.post('/updateByid_Example', example_controller.updateByid_Example);
// router.post('/deleteByid_Example', example_controller.deleteByid_Example);

module.exports = router

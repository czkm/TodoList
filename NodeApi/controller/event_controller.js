// 引入刚才定义的表
const Event_col = require('../db/event')
const User_col = require('../db/user')

// get 请求返回所有数据
const get_Event = async (ctx, next) => {
  const result = await Event_col.find({})
  ctx.status = 200
  ctx.body = {
    code: 0,
    message: '成功',
    data: result
  }
}
// 查看所有成功或不成功
const get_BySuccess = async (ctx, next) => {
  const req = ctx.request.body
  const result = await Event_col.find({ event_success: req.event_success })
  ctx.status = 200
  ctx.body = {
    code: 0,
    message: '成功',
    data: result
  }
}
// 事件保存
const set_Event = async (ctx, next) => {
  const req = ctx.request.body
  ctx.status = 200
  ctx.verifyParams({
    user_id: { type: 'string', required: true },
    // userevent_id: { type: "string", required: true },
    event_title: { type: 'string', required: true },
    // event_contain: { type: "string", required: true },
    event_type: { type: 'string', required: true }
    // event_success: { type: "string", required: true },
    // event_date: { type: "string", required: false }

  })
  let parms = {
    userevent_id: req.userevent_id ? req.userevent_id : '',
    event_title: req.event_title,
    event_contain: req.event_contain || '',
    event_type: req.event_type,
    event_success: req.event_success || '0',
    event_date: req.event_date ? req.event_date : '未指定'
  }
  const result = await Event_col.create(parms)

  // const result = await User_col.create({ req });
  ctx.body = {
    code: 0,
    message: '成功',
    data: result
  }
}
// 更新事件
const update_Event = async (ctx, next) => {
  const req = ctx.request.body
  ctx.status = 200
  ctx.verifyParams({
    id: { type: 'string', required: true }
    // event_title: { type: "string", required: true },
    // event_contain: { type: "string", required: true },
    // event_type: { type: "string", required: true },
    // event_success: { type: "string", required: true }

  })
  let parms = {
    event_title: req.event_title,
    event_contain: req.event_contain || '',
    event_type: req.event_type,
    event_success: req.event_success
  }
  let request = { _id: req.id }
  const result = await Event_col.updateOne(request, { $set: parms })

  // const result = await User_col.create({ req });
  ctx.body = {
    code: 0,
    message: '成功',
    data: result
  }
}
// 删除事件
const deleted_Event = async (ctx, next) => {
  const req = ctx.request.body
  ctx.status = 200
  ctx.verifyParams({
    event_type: { type: 'string', required: true }
  })
  let parms = {
    event_type: req.event_type
  }
  const result = await Event_col.remove(parms)

  // const result = await User_col.create({ req });
  ctx.body = {
    code: 0,
    message: '成功',
    data: result
  }
}

// // 查全部
// const findall_Example = async (ctx, next) => {
//     ctx.status = 200
//     const result = await Example_col.find({})
//     ctx.body = {
//         msg: 'findAll success!',
//         data: result
//     }
// }

// // 查指定id
// const findByid_Example = async (ctx, next) => {
//     const req = ctx.request.body;
//     ctx.status = 200;
//     const result = await Example_col.find({ id: req.id })

//     ctx.body = {
//         msg: 'findByid_Example success!',
//         data: result
//     }
// }

// // 更新指定id
// const updateByid_Example = async (ctx, next) => {
//     const req = ctx.request.body;
//     ctx.status = 200;

//     const result = await Example_col.updateOne({
//         _id: req.objid
//     }, { $set: req }, { new: true, useFindAndModify: false });

//     // const result = await Example_col.updateOne({ 'msg': req.id }, {$set:{msg:req.msg}})
//     ctx.body = {
//         data: result
//     }
// }

// // 删除指定id
// const deleteByid_Example = async (ctx, next) => {
//     const req = ctx.request.body;
//     ctx.status = 200;
//     if (!req.id || typeof req.id != 'string') {
//         ctx.status = 401;
//         ctx.body = {
//             msg: ` error！！msg: ${req.msg}`,
//             data: {}
//         }
//         return;
//     }
//     const result = await Example_col.findOneAndRemove({
//         id: req.id
//     })
//     ctx.body = {
//         msg: 'deleteByid_Example success!',
//         data: result
//     }
// }

// 暴露出这两个方法，在路由中使用
module.exports = {
  set_Event,
  get_Event,
  update_Event,
  deleted_Event,
  get_BySuccess
  // findByid_Example,
  // updateByid_Example,
  // deleteByid_Example
}

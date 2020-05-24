// 引入刚才定义的表
const User_col = require('../db/user');



// 用户注册
const LoginAndSign_User = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.verifyParams({
        user_name: { type: "string", required: true },
        user_password: { type: "string", required: true }
    })
    try {
        ctx.status = 200;
        const result = await User_col.findOne({ user_name: req.user_name });
        // 存在返回
        if (result) {
            if (result.user_password == req.user_password) {
                ctx.body = {
                    code: 0,
                    msg: '登录成功',
                    data: result
                }
            } else {
                ctx.body = {
                    code: 1,
                    msg: '密码不正确',
                    data: result
                }
            }
        } else {
            // 不存在则插入
            let parms = {
                user_name: req.user_name,
                user_password: req.user_password,
            }
            const res = await User_col.create(parms)

            console.log(result)
            ctx.body = {
                code: 0,
                msg: '注册成功',
                data: res
            }
        }
    } catch (err) {
        throw error
    }

}


// // 用户登录
// const login_User = async (ctx, next) => {
//     const req = ctx.request.body;

//     ctx.verifyParams({
//         user_name: { type: "string", required: true },
//         user_password: { type: "string", required: true }
//     })
//     try {
//         ctx.status = 200;
//         const result = await User_col.findOne({ user_name: req.user_name });
//         if (result.user_password == req.user_password) {
//             ctx.body = {
//                 code: 0,
//                 msg: '登录成功',
//                 data: result
//             }
//         } else {
//             ctx.body = {
//                 code: 1,
//                 msg: '密码错误',
//             }
//         }

//     } catch (err) {
//         throw error
//     }

// }

// get 请求返回所有数据
const get_User = async (ctx, next) => {
    const result = await User_col.find({});
    ctx.status = 200;
    ctx.body = {
        data: result
    }
}


// post 带一个 msg 参数，并插入数据库
const set_User = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.status = 200;

    ctx.verifyParams({
        user_name: { type: "string", required: true },
        user_password: { type: "string", required: true }
    })
    const result = await User_col.create({ user_name: req.user_name, user_password: req.user_password })
    // const result = await User_col.create({ req });
    ctx.body = {
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
    set_User,
    get_User,
    LoginAndSign_User
    // findByid_Example,
    // updateByid_Example,
    // deleteByid_Example
}

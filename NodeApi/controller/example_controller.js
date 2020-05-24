// 引入刚才定义的表
const Example_col = require('../db/example');

// get 请求返回所有数据
const getExample = async (ctx, next) => {
    const req = ctx.request.body;
    const examples = await Example_col.find({});
    ctx.status = 200;
    ctx.body = {
        msg: 'get request!!',
        data: {
            examples,
        }
    }
}

// post 带一个 msg 参数，并插入数据库
const add_Example = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.status = 200;
    if (!req.msg || !req.id) { //不存在id或msg则返回空
        ctx.status = 401;
        ctx.body = {
            msg: 'id或msg不为空',
            data: {}
        }
        return;
    }

    const result = await Example_col.create({ _id: req.objid, id: req.id, msg: req.msg });
    ctx.body = {
        msg: 'post request!!',
        desc: 'insert success!',
        data: result
    }
}


// 查全部
const findall_Example = async (ctx, next) => {
    ctx.status = 200
    const result = await Example_col.find({})
    ctx.body = {
        msg: 'findAll success!',
        data: result
    }
}


// 查指定id
const findByid_Example = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.status = 200;
    const result = await Example_col.find({ id: req.id })

    ctx.body = {
        msg: 'findByid_Example success!',
        data: result
    }
}

// 更新指定id
const updateByid_Example = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.status = 200;

    const result = await Example_col.updateOne({
        _id: req.objid
    }, { $set: req }, { new: true, useFindAndModify: false });

    // const result = await Example_col.updateOne({ 'msg': req.id }, {$set:{msg:req.msg}})
    ctx.body = {
        data: result
    }
}

// 删除指定id
const deleteByid_Example = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.status = 200;
    if (!req.id || typeof req.id != 'string') {
        ctx.status = 401;
        ctx.body = {
            msg: ` error！！msg: ${req.msg}`,
            data: {}
        }
        return;
    }
    const result = await Example_col.findOneAndRemove({
        id: req.id
    })
    ctx.body = {
        msg: 'deleteByid_Example success!',
        data: result
    }
}

// 暴露出这两个方法，在路由中使用
module.exports = {
    getExample,
    add_Example,
    findByid_Example,
    updateByid_Example,
    deleteByid_Example
}

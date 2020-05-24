
const mongoose = require('mongoose');
// 这里的流程官网上有，讲的很清楚，每一步是干什么的
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true // 表示该字段唯一
    },
}, {
    collection: 'example', // 这里是为了避免新建的表会带上 s 后缀
    versionKey: false // 不需要 __v 字段，默认是加上的
});

module.exports = mongoose.model('example', exampleSchema)


const mongoose = require('mongoose');
// 这里的流程官网上有，讲的很清楚，每一步是干什么的
const Schema = mongoose.Schema;
const eventSchema = new Schema({

    event_id: {
        type: String
    },
    userevent_id: {
        type: String
    },
    event_title: {
        type: String,
        required: true
    },
    event_contain: {
        type: String,
    },
    event_type: {
        type: String,
        required: true
    },
    event_success: {
        type: String,
        required: true
    },
    event_time: {
        type: Date,
    },
    event_date: {
        type: String,

    },
    event_note: {
        // 字符串数组类型
        eventnote_id: [{ type: String }]

    },

    // 字符串数组类型
}, {
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
    collection: 'event', // 这里是为了避免新建的表会带上 s 后缀
    versionKey: false // 不需要 __v 字段，默认是加上的
});

module.exports = mongoose.model('event', eventSchema)

const Koa = require('koa');
const mongoose = require('mongoose');
const parameter = require("koa-parameter"); //参数校验
const error = require("koa-json-error"); //错误抓取
// const example_router = require('./router/example_router');
const cors = require('koa2-cors');
const BodyParser = require('koa-bodyparser'); //引入koa-bodyparser： 
const routing = require("./router/index");
const config = require('./config')
// const catchError = require('./middlewares/exception');
const app = new Koa();

mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true }, err => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('数据库链接成功');
    }
});

app.use(cors());
app.use(BodyParser()); // 使用koa-bodyparser： 
app.use(parameter(app));  // 参数校验

routing(app);  // 路由处理
app.use(error({
    postFormat: (e, { stack, ...rest }) => config.environment=='master'? rest : { stack, ...rest }
}))
// app.use(catchError)

// app.use(example_router.routes()).use(example_router.allowedMethods());



app.listen(3000, () => console.log("程序启动在3000端口了"));


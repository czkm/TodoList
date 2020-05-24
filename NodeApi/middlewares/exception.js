//这里的工作是捕获异常生成返回的接口
const catchError = async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      if(error.errorCode) {
        ctx.body = {
          msg: error.msg,
          error_code: error.errorCode,
          request: `${ctx.method} ${ctx.path}`
        };
      } else {
        //对于未知的异常，采用特别处理
        ctx.body = {
          msg: 'we made a mistake',
        };
      }
    }
  }
  module.exports = catchError;
  
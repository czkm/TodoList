class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode=10000, code=400) {
      super()
      this.error_code = errorCode
      this.code = code
      this.msg = msg
    }
  }
  
  class ParameterException extends HttpException{
    constructor(msg, errorCode){
      super(400, msg='参数错误', errorCode=10000);
    }
  }
  
  class NotFound extends HttpException{
    constructor(msg, errorCode) {
      super(404, msg='资源未找到', errorCode=10001);
    }
  }
  
  class AuthFailed extends HttpException{
    constructor(msg, errorCode) {
      super(404, msg='授权失败', errorCode=10002);
    }
  }
  
  class Forbidden extends HttpException{
    constructor(msg, errorCode) {
      super(404, msg='禁止访问', errorCode=10003);
      this.msg = msg || '禁止访问';
      this.errorCode = errorCode || 10003;
      this.code = 404;
    }
  }
  
  module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    AuthFailed,
    Forbidden
  }
  
  
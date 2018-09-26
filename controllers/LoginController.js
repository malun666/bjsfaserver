const jwt = require('jwt-simple');
const db = require('../common/db');
const jwtSecret = require('../common/config').jwtSecret;
const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7;
module.exports = {
  async auth(ctx, next) {
    const user = ctx.request.body;
    if (user && user.Name && user.Passwd) {
      let user2 = await db.User.findOne({ Name: user.Name, Passwd: user.Passwd });
      if (user2) {
        let payload = Object.assign(user2, {
          exp: Date.now() + tokenExpiresTime
        });
        let token = jwt.encode(payload, jwtSecret);
        ctx.body = {
          user: user2,
          code: 1,
          token
        };
        return;
      }
    }
    ctx.body = {
      code: -1,
      msg: '请求出错'
    };
  }
};

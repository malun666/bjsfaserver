module.exports = {
  getUser(ctx) {
    console.log(ctx.params);
    ctx.response.type = 'json';
    ctx.response.body = [{age: 19, name: ctx.params.id}];
  },
  postUser(ctx) {
    ctx.response.type = 'json';
    // ctx.response.body = ctx.body;
    ctx.response.body = ctx.request.body;
  }
}
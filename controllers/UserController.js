module.exports = {
  getUser(ctx) {
    console.log(ctx.params);
    ctx.response.type = 'json';
    ctx.response.body = [{age: 19, name: ctx.params.id}];
  }
}
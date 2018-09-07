module.exports = {
  getUser(ctx) {
    console.log(ctx.params);
    ctx.response.type = 'json';
    ctx.response.body = [1, 2, {age: 19, name: ctx.params.id}];
  }
}
module.exports = {
  postUploadFile(ctx) {
    ctx.response.type = 'json';
    ctx.response.body = ctx.request.files;
  }
};
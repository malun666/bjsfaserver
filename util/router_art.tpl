const controllers = require('./controllers/index');

module.exports = function(router) {
{{each NameArray Name Key}}
  // {{Name}}
  router.get('/{{Name.toLowerCase()}}', controllers.{{Name}}.get{{Name}});
  router.get('/{{Name.toLowerCase()}}/:id', controllers.{{Name}}.get{{Name}}ById);
  router.delete('/{{Name.toLowerCase()}}/:id', controllers.{{Name}}.delete{{Name}}ById);
  router.post('/{{Name.toLowerCase()}}', controllers.{{Name}}.post{{Name}});
  router.put('/{{Name.toLowerCase()}}/:id', controllers.{{Name}}.update{{Name}});
  router.patch('/{{Name.toLowerCase()}}/:id', controllers.{{Name}}.update{{Name}});
{{/each}}
};

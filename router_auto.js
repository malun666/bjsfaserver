const controllers = require('./controllers/index');

module.exports = function(router) {

  // User
  router.get('/user', controllers.User.getUser);
  router.get('/user/:id', controllers.User.getUserById);
  router.delete('/user/:id', controllers.User.deleteUserById);
  router.post('/user', controllers.User.postUser);
  router.put('/user/:id', controllers.User.updateUser);
  router.patch('/user/:id', controllers.User.updateUser);

  // Department
  router.get('/department', controllers.Department.getDepartment);
  router.get('/department/:id', controllers.Department.getDepartmentById);
  router.delete('/department/:id', controllers.Department.deleteDepartmentById);
  router.post('/department', controllers.Department.postDepartment);
  router.put('/department/:id', controllers.Department.updateDepartment);
  router.patch('/department/:id', controllers.Department.updateDepartment);

  // Product
  router.get('/product', controllers.Product.getProduct);
  router.get('/product/:id', controllers.Product.getProductById);
  router.delete('/product/:id', controllers.Product.deleteProductById);
  router.post('/product', controllers.Product.postProduct);
  router.put('/product/:id', controllers.Product.updateProduct);
  router.patch('/product/:id', controllers.Product.updateProduct);

  // Shop
  router.get('/shop', controllers.Shop.getShop);
  router.get('/shop/:id', controllers.Shop.getShopById);
  router.delete('/shop/:id', controllers.Shop.deleteShopById);
  router.post('/shop', controllers.Shop.postShop);
  router.put('/shop/:id', controllers.Shop.updateShop);
  router.patch('/shop/:id', controllers.Shop.updateShop);

  // Message
  router.get('/message', controllers.Message.getMessage);
  router.get('/message/:id', controllers.Message.getMessageById);
  router.delete('/message/:id', controllers.Message.deleteMessageById);
  router.post('/message', controllers.Message.postMessage);
  router.put('/message/:id', controllers.Message.updateMessage);
  router.patch('/message/:id', controllers.Message.updateMessage);

  // Menu
  router.get('/menu', controllers.Menu.getMenu);
  router.get('/menu/:id', controllers.Menu.getMenuById);
  router.delete('/menu/:id', controllers.Menu.deleteMenuById);
  router.post('/menu', controllers.Menu.postMenu);
  router.put('/menu/:id', controllers.Menu.updateMenu);
  router.patch('/menu/:id', controllers.Menu.updateMenu);

};

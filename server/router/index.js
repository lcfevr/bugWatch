const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const router = require('koa-router')();

// router
const bugController = require('../controllers/bug.js');
const ajaxController = require('../controllers/ajax.js');
const userController = require('../controllers/user.js');
const ruleController = require('../controllers/rule.js');
const projectController = require('../controllers/project.js');
// const user = require('../controllers/user');
// user

router.get('/user/getUserList', userController.getUserList);
router.post('/user/login', userController.login);
router.post('/user/addUser', userController.addUser);

// project
router.get('/project/getProjectList', projectController.getProjectList);
router.post('/project/addProject', projectController.addProject);
router.get('/project/getProjectById', projectController.getProjectById);
router.get('/project/removeProjectById', projectController.removeProjectById);
router.get('/project/updateProject', projectController.updateProject);
router.get('/project/delUserFromProject', projectController.delUserFromProject);


// bug
router.get('/bug/addBug', bugController.addBug);
router.get('/bug/email', () => {
  const email = require('../controllers/user');
});
router.get('/bug/getBugList', bugController.getBugList);
router.get('/bug/compareList', bugController.compareList);
router.get('/bug/pageTopList', bugController.weekBugList);
router.get('/bug/bugTopList', bugController.weekBugList);

// ajax
router.post('/bug/addAjaxWatch', ajaxController.report);
router.get('/bug/getAjaxList', ajaxController.list);
// router.get('/user', user.searchuser);
// router.post('/user/email', user.sendemail);

// rule
router.post('/rule/addRule', ruleController.addRule);
router.get('/rule/removeRule', ruleController.removeRule);
router.get('/rule/getRuleList', ruleController.getRuleList);
app.use(router.routes());
app.use(router.allowedMethods());
module.exports = app;

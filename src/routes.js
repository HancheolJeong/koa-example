// const Router = require('@koa/router');
// const router = new Router();

// const webController = require('./web/controller');

// router.get('/', webController.home);
// router.get('/page/:page', webController.page);

// router.get('/user/:id', (ctx, next) =>{
//     let id = ctx.params.id;
//     ctx.body = `${id} 회원에 대한 정보`;
// });

// router.get('/feed', (ctx, next) =>{
//     ctx.body = `피드 리스트`;
// });

// router.post('/feed', (ctx, next) =>{
//     ctx.body = `피드 작성 완료`;
// });

// router.get('/feed/:id', (ctx, next) =>{
//     let id = ctx.params.id;
//     ctx.body = `${id} 피드 상세`;
// });




const Router = require('@koa/router');
const router = new Router();
const { myLogging} = require('./middleware/logging');
const webController = require('./web/controller')
const apiUserController = require('./api/user/controller');
const apiFeedController = require('./api/feed/controller');
const {verify} = require('./middleware/auth');
const multer = require('@koa/multer');
const path = require('path');
const upload = multer({
    dest: path.resolve(__dirname, '../', 'storage')
})


router.use(myLogging);
router.get('/', webController.home);
router.get('/page/:page', webController.page);

router.get('/api/user/:id', apiUserController.info);
router.post('/api/user/register', apiUserController.register);
router.post('/api/user/login', apiUserController.login);

router.post('/file/upload', upload.single('file'), require('./api/file/controller').upload);



router.use(verify);
router.get('/api/feed', apiFeedController.index);
router.post('/api/feed', apiFeedController.store);
router.get('/api/feed/:id', apiFeedController.show);
router.put('/api/feed/:id', apiFeedController.update);
router.delete('/api/feed/:id', apiFeedController.delete);

module.exports = router;




// router.get('/', (ctx, next) => {
//  ctx.body = 'Hello World';
// });
// router.get('/sitemap', (ctx, next) => {
//  ctx.body = '사이트맵';
// });
// router.get('/page/:name', (ctx, next) => {
//  let name = ctx.params.name;
//  ctx.body = `${name} 페이지`;
// });
// module.exports = router;
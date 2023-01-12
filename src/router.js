const Router = require('@koa/router');
const router = new Router();

const webController = require('./web/controller');

router.get('/', webController.home);
router.get('/page/:page', webController.page);

router.get('/user/:id', (ctx, next) =>{
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`;
});

router.get('/feed', (ctx, next) =>{
    ctx.body = `피드 리스트`;
});

router.post('/feed', (ctx, next) =>{
    ctx.body = `피드 작성 완료`;
});

router.get('/feed/:id', (ctx, next) =>{
    let id = ctx.params.id;
    ctx.body = `${id} 피드 상세`;
});



// const Router = require('@koa/router');
// const router = new Router();

// const webController = require('./')




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
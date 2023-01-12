const Router = require('@koa/router');
const router = new Router();
router.get('/', (ctx, next) => {
 ctx.body = 'Hello World';
});
router.get('/sitemap', (ctx, next) => {
 ctx.body = '사이트맵';
});
router.get('/page/:name', (ctx, next) => {
 let name = ctx.params.name;
 ctx.body = `${name} 페이지`;
});
module.exports = router;
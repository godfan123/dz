

/*const Koa = require('koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = koaRouter();

app.use(router['routes']());

router.get('/index', function (ctx, next) {
    ctx.body = 'Hello Koa2.0!';
});
app.listen(3000, ()=>console.log('Koa start at 3000...'));*/




const Koa=require('koa');
const router = require('koa-router')();
/*const  koaBody=require('koa-body')();*/

const app = new Koa();
app.use(router['routes']());

router.get('/index', function (ctx, next) {
    ctx.body = 'Hello Koa2.0!';
});

router.get('/api',function (ctx, next){
    console.log(111111111111);
    ctx.body='test data 11111111111111'
});

/*router.get('/api/1',function (ctx, next){
    this.body='test data 1'
});

/!* 这个接口是负责... *!/
router.get('/api/2',function (ctx, next){
    this.body={
        a:1,
        b:'123'
    }
});*/


/*
router.post('/api/post',koaBody,function (ctx, next){
           console.log(this.request.body);
          this.body=JSON.stringify(this.request.body)
});
*/


/*app.use(router.routes())
   .use(router.allowedMethods());*/
/*
app.use(async ctx => {
    ctx.body = 'Hello World';
});
*/

app.listen(3000,function(){console.log('koa start success')});
































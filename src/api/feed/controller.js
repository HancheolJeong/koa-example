exports.index = (ctx, next)=>{
    ctx.body = "피드 리스트";
}

exports.update = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 수정`;   
}

exports.delete = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 수정`;
}

exports.store = (ctx, next) => {
    ctx.body = '피드 작성 완료';
}

exports.show = (ctx, next) =>
{
    let id = ctx.params.id;
    ctx.bodt = `${id} 피드 상세`;
}
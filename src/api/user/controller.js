const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

exports.info = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`;
}

exports.register = async (ctx, next) => {
    let token = await generteToken({name : 'my-name'});
    ctx.body = token;
}
exports.login = async (ctx, next) => {

    let token = await generteToken({name: 'my-name'});
    ctx.body = token;
}

let generteToken = (payload)=>{
    return new Promise((resolve, reject)=> {
        jwt.sign(payload, SECRET_KEY, (error, token) => {
            if(error) {reject(error);}
            resolve(token);
        })
    })
}
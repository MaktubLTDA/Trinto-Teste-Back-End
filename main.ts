import * as restify from 'restify';


const server = restify.createServer({
    name:'tinto-backend',
    version:'1.0.0.1'
});

server.get('/vendas/listar', (req, resp,next)=>{
   resp.json({messege:"Deve conter lista de usuarios"});
   return next();
});

server.listen(3000, ()=>{
    console.log('API está rodando no endereço http://localhost/vendas/listar');
})
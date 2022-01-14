"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = __importStar(require("restify"));
const server = restify.createServer({
    name: 'tinto-backend',
    version: '1.0.0.1'
});
server.get('/vendas/listar', (req, resp, next) => {
    resp.json({ messege: "Deve conter lista de vendas" });
    return next();
});
server.post('/vendas/criar', (req, resp, next) => {
    resp.json({ messege: "Deve criar uma venda" });
    return next();
});
server.put('/vendas/editar', (req, resp, next) => {
    resp.json({ messege: "Deve editar uma venda" });
    return next();
});
server.del('/vendas/remover', (req, resp, next) => {
    resp.json({ messege: "Deve excluir uma venda" });
    return next();
});
server.listen(3000, () => {
    console.log('API está rodando no endereço http://localhost:3000/vendas');
});

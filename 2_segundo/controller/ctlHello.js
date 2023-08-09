//@ arquivo: ctlHello.js
const hello = (req, res) => (async () => {
    res.json({ status: "ok", "mensagem": "Olá segundo!" });
})();

//async serve para gerar uma ordem de execução
//para que a página seja carregada corretamente
const helloUser = (request, res) => (async () =>{
    const { username } = request.body
    res.json({ status: "ok", "nomeusuario": username });
} )();

module.exports = {
    hello,
    helloUser,
}
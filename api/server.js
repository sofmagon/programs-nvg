// Ver https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Antes de server.use(router)
server.use(
	jsonServer.rewriter({
		"/api/programs": "/programs",
		"/api/programs/:id": "/programs/:id"
	})
);

server.use(router);
server.listen(3000, () => {
	console.log("El servidor JSON está funcionando");
});

// Exporta la API del Servidor
module.exports = server;
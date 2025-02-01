const jsonServer = require('json-server');
const cors = require('cors'); // Importer le middleware CORS
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

// ✅ Configuration CORS pour éviter la requête OPTIONS
server.use(cors({
    origin: "http://localhost:4200", // Adresse de ton frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
}));

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log('✅ JSON Server is running on port ' + port);
});

const jsonserver = require("json-server")

const server = jsonserver.create()

const router = jsonserver.router("db.json")

const middleware = jsonserver.defaults()

const port = 2255

server.use(middleware)
server.use(router)

server.listen(port,()=>{
    console.log("json server listening on port",port);
    
})
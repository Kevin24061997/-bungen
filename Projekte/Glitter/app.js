const hapi = require("@hapi/hapi")
const fs = require("fs")
const hostname = "0.0.0.0"
const port = 4000

const startApp = async () => {
    const server = hapi.server({
        port: port,
        host: hostname,
        routes: {
            cors: {
                origin: ["http://localhost:3000", "http://127.0.0.1:3000"]
            }
        }
    })

    await server.start();
    console.log("Server running on %s", server.info.uri);

    server.route({
        method: "GET",
        path: "/glitts",
        handler: (request, reply) => {
            var glitts = fs.readFileSync("chat.json").toString()
            return glitts
        }
    })

    server.route({
        method: "POST",
        path: "/glitts",
        handler: (request, reply) => {
            const payload = request.payload;
            console.log(payload)
            
            var arr = JSON.parse(fs.readFileSync("chat.json").toString());
            arr.push(payload);
            fs.writeFileSync('chat.json', JSON.stringify(arr))
        }
    })
}


startApp();
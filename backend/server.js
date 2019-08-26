const express = require("express");
const routes = require("./routes");
const cors = require("cors");


const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connect", socket =>{
    console.log(socket.message);
});


app.use(cors());
app.use(routes);
app.use(express.json());


server.listen("3000",()=>{
    console.log("rodando na 3000")
});
import cors from "cors";
import { AddressInfo } from "net";
import express from "express";
import { LCWRouter } from "./routes/LCWRouter";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
})

const path = require('path')

app.use(express.json());

app.get("/", 
 (a,b) => {
     b.send('<p>teste base</p>');
 }
 ); 
 
// libera acesso aos arquivos
app.use("/files", express.static(`src/uploads`));

app.use("/app",LCWRouter);




const server = app.listen(process.env.PORT || 21073, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando na porta ${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
})
//http://localhost:

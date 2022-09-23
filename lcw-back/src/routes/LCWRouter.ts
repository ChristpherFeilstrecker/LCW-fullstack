import express from "express";
import { InformationController } from "../controller/InformationController";
import { ServicosController } from "../controller/ServicosController";
import { ClientesController } from "../controller/ClientesController";
import { FeedbacksController } from "../controller/FeedbacksController";
import { AmostrasController } from "../controller/AmostrasController";
import { AdminController } from "../controller/AdminController";
import { MaterialController } from "../controller/MaterialController";
import multer from 'multer';
import { storage } from '../multerConfig';
import path from 'path';
import { body, validationResult } from "express-validator";
import bodyParser from "body-parser";


const app = express();


export const LCWRouter = express.Router();
LCWRouter.use(bodyParser.json())
const upload = multer({ storage: storage }) ;

const informationController = new InformationController();
const servicosController = new ServicosController();
const clientesController = new ClientesController();
const feedbacksController = new FeedbacksController();
const amostrasController = new AmostrasController();
const adminController = new AdminController();
const materialController = new MaterialController();

//teste rota principal
LCWRouter.get("/", 
 (a,b) => {
     b.send('<p>teste app LCW</p>');
 }
 ); // teste Back

 LCWRouter.get("/adminLCW",[
 ], adminController.admin);//Retorna nome e senha administrador 

 LCWRouter.post("/login",[
    body("nome").isString(),
    body("password").isString()
 ], adminController.login); // login - retorna token 

 LCWRouter.post("/validator",[
   body("token").isString()
], adminController.validator); // validar o token 

 LCWRouter.post("/addadmin",[
    body("token").isString(),
    body("nome").isString(),
    body("password").isString()
 ], adminController.addadmin); //cria admin 

 LCWRouter.delete("/deletaradmin",[
 
 ], adminController.deleteAdmin); //deleta admin

 

 LCWRouter.get("/servicos", servicosController.servicos);//Retorna serviços

 LCWRouter.put("/editarservico",[
   body("token").isString(),
   body("id").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString(),
   body("texto").isString(),
   body("icone").isString()
], servicosController.editServicos); //Editar serviços


LCWRouter.get("/informacoes", informationController.information);//Retorna informacoes

LCWRouter.put("/editarinformacoes",[
   body("token").isString(),
   body("id").isString(),
   body("telefone").isString(),
   body("whats").isString(),
   body("email").isString(),
   body("endereco").isString(),
   body("bairro").isString(),
   body("cidade").isString(),
   body("estadoPaisCep").isString(),
   body("facebook").isString(),
   body("instagram").isString()
], informationController.editInformation); //Editar informações 


LCWRouter.get("/clientes", clientesController.clientes);//Retorna clientes

LCWRouter.post("/addcliente",[
   body("token").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], clientesController.addCliente); //Adicionar clientes

LCWRouter.put("/editarcliente",[
   body("token").isString(),
   body("id").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], clientesController.editCliente); //Editar clientes

LCWRouter.delete("/deletarcliente",[
   body("token").isString(),
   body("id").isString()
], clientesController.deleteCliente); //Deletar clientes


LCWRouter.get("/amostras", amostrasController.amostras);//Retorna amostras

LCWRouter.post("/addvideo",[
   body("token").isString(),
   body("service_id").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], amostrasController.addAmostra); //Adicionar amostra

LCWRouter.put("/editarvideo",[
   body("token").isString(),
   body("id").isString(),
   body("service_id").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], amostrasController.editAmostra); // Editar amostra

LCWRouter.delete("/deletaramostra",[
], amostrasController.deleteAmostra); // Deletar amostra


LCWRouter.get("/feedbacks", feedbacksController.feedbacks);//Retorna feedbacks

LCWRouter.post("/addfeedback",[
   body("token").isString(),
   body("cargo").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], feedbacksController.addFeedbacks); //Adicionar feedback

LCWRouter.put("/editarfeedback",[
   body("token").isString(),
   body("id").isString(),
   body("cargo").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], feedbacksController.editFeedback); // Editar feedback

LCWRouter.delete("/deletarfeedback",[
], feedbacksController.deleteFeedback); // Deletar feedback


LCWRouter.get("/materiais", materialController.materiais);//Retorna materiais

LCWRouter.post("/addmaterial",[
   body("token").isString(),
   body("id_cliente").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], materialController.addMaterial); //Adicionar material

LCWRouter.put("/editarMaterial",[
   body("token").isString(),
   body("id").isString(),
   body("id_cliente").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], materialController.editMaterial); // Editar material

LCWRouter.delete("/deletarmaterial",[
], materialController.deleteMaterial); // Deletar material

LCWRouter.post("/upload", upload.single('image'), async (req,res)=>{
    if(req.file){
        return res.json(req.file?.filename)
    }
}); // upload de imagens

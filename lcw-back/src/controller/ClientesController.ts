import { Request, Response } from "express";
import ClientesBusiness from "../business/ClientesBusiness";
import { body, validationResult } from "express-validator";

export class ClientesController {

   public async clientes(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const result = await ClientesBusiness.clientes();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar clientes" })
         }
      }
   }

   public async editCliente(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, nome, descricao, imagem } = req.body

         const result = await ClientesBusiness.editClientes(
            token,
            id,
            nome, 
            descricao, 
            imagem, 
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar cliente" })
         }
      }
   }

   public async addCliente(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, nome, descricao, imagem} = req.body

         const result = await ClientesBusiness.addCliente(
            token,
            nome, 
            descricao, 
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar cliente" })
         }
      }
   }

   public async deleteCliente(req: Request, res: Response) {
      try {
         
         const  id  = req.query.id
        
         const result = await ClientesBusiness.deleteCliente(

            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar cliente" })
         }
      }
   }

   

}

export default new ClientesController()
import { Request, Response } from "express";
import AmostrasBusiness from "../business/AmostrasBusiness";
import { body, validationResult } from "express-validator";

export class AmostrasController {

   public async amostras(req: Request, res: Response) {
      try {


         const result = await AmostrasBusiness.amostras();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar amostras" })
         }
      }
   }

   public async addAmostra(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, service_id, nome, descricao, imagem } = req.body

         const result = await AmostrasBusiness.addAmostra(
            token,
            service_id,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar amostra" })
         }
      }
   }


   public async editAmostra(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, service_id, nome, descricao, imagem } = req.body

         const result = await AmostrasBusiness.editAmostra(
            token,
            id,
            service_id,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar amostra" })
         }
      }
   }

   public async deleteAmostra(req: Request, res: Response) {
      try {
 
         const  id  = req.query.id

         const result = await AmostrasBusiness.deleteAmostra(
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar amostra" })
         }
      }
   }


}

export default new AmostrasController()
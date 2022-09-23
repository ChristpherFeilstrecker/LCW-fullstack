import { Request, Response } from "express";
import FeedbacksBusiness from "../business/FeedbacksBusiness";
import { body, validationResult } from "express-validator";
import MaterialBusiness from "../business/MaterialBusiness";

export class MaterialController {

   public async materiais(req: Request, res: Response) {
      try {


         const result = await MaterialBusiness.materiais();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar materiais" })
         }
      }
   }

   public async addMaterial(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id_cliente, nome, descricao, imagem } = req.body

         const result = await MaterialBusiness.addMaterial(
            token,
            id_cliente,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar materiais" })
         }
      }
   }


   public async editMaterial(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, id_cliente, nome, descricao, imagem } = req.body

         const result = await MaterialBusiness.editMaterial(
            token,
            id,
            id_cliente,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar material" })
         }
      }
   }

   public async deleteMaterial(req: Request, res: Response) {
      try {
         const  id  = req.query.id

         const result = await MaterialBusiness.deleteMaterial(
 
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar material" })
         }
      }
   }


}

export default new MaterialController()
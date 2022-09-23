import { Request, Response } from "express";
import FeedbacksBusiness from "../business/FeedbacksBusiness";
import { body, validationResult } from "express-validator";

export class FeedbacksController {

   public async feedbacks(req: Request, res: Response) {
      try {


         const result = await FeedbacksBusiness.feedbacks();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar feedbacks" })
         }
      }
   }

   public async addFeedbacks(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, cargo, nome, descricao, imagem } = req.body

         const result = await FeedbacksBusiness.addFeedback(
            token,
            cargo,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar feedback" })
         }
      }
   }


   public async editFeedback(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, cargo, nome, descricao, imagem } = req.body

         const result = await FeedbacksBusiness.editFeedback(
            token,
            id,
            cargo,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar feedback" })
         }
      }
   }

   public async deleteFeedback(req: Request, res: Response) {
      try {
         const  id  = req.query.id

         const result = await FeedbacksBusiness.deleteFeedback(
 
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar feedback" })
         }
      }
   }


}

export default new FeedbacksController()
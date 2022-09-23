import { Request, Response } from "express";
import InformationBusiness from "../business/InformationBusiness";
import { body, validationResult } from "express-validator";

export class InformationController {

   public async information(req: Request, res: Response) {
      try {

         const result = await InformationBusiness.information();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao retornar informações" })
         }
      }
   }

   public async editInformation(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }
         
         const {token, id, telefone, whats, email, endereco, bairro, cidade, estadoPaisCep, facebook, instagram} = req.body

         const result = await InformationBusiness.editInformation(
            token,
            id,
            telefone, 
            whats, 
            email, 
            endereco, 
            bairro, 
            cidade, 
            estadoPaisCep,
            facebook, 
            instagram
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar informações" })
         }
      }
   }

}

export default new InformationController()
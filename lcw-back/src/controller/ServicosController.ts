import { Request, Response } from "express";
import ServicosBusiness from "../business/ServicosBusiness";
import { body, validationResult } from "express-validator";

export class ServicosController {

   public async servicos(req: Request, res: Response) {
      try {

         const result = await ServicosBusiness.servicos();
         
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar servicos" })
         }
      }
   }

   public async editServicos(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const { token, id, nome, descricao, imagem, texto, icone } = req.body

         const result = await ServicosBusiness.editServicos(
            token,
            id,
            nome,
            descricao,
            imagem,
            texto,
            icone
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar serviços" })
         }
      }
   }



}

export default new ServicosController()
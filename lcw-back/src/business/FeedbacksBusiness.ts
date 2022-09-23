import { FeedbacksDatabase } from "../data/FeedbacksDataBase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class FeedbacksBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private feedbacksDatabase: FeedbacksDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async feedbacks(

   ) {
      try {

         const info = await this.feedbacksDatabase.getFeedbacks();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar feedbacks");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar feedbacks")
         }
      }
   }

   public async addFeedback(
      token:string,
      cargo: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         const id = this.idGenerator.generate();
         
          await this.feedbacksDatabase.addFeedback(
            id,
           cargo,
            nome,
            descricao,   
            imagem
         );

         return ("Business - feedback adicionado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionarfeedback")
         }
      }
   }



   public async editFeedback(
      token:string,
      id: String,
      cargo: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

            const Gallerie = await this.feedbacksDatabase.editFeedback(
               id,
               cargo,
               nome,
               descricao,
               imagem
            );
         

         return ("Business - feedback editado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar feedback")
         }
      }
   }

   public async deleteFeedback(
      id: String
   ) {
      try {
         
         await this.feedbacksDatabase.deletefeedback(
            id
         );

         return ("Business - feedback deletado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao deletar feedback")
         }
      }
   }  

}
export default new FeedbacksBusiness(
   new IdGenerator(),
   new FeedbacksDatabase(),
   new TokenGenerator()
)
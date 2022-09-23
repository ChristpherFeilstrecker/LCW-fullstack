import { ServicosDatabase } from "../data/ServicosDatabase";
import { TokenGenerator } from "../services/tokenGenerator";

export class ServicosBusiness {

   constructor(
      private servicosDatabase: ServicosDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async servicos(

   ) {
      try {

         const servicos = await this.servicosDatabase.getServicos();

         if (!servicos || servicos.length === 0) {

            throw new Error("BD - Erro ao retornarserviços");
         }

         return (servicos);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar serviços")
         }
      }
   }

   public async editServicos(
      token:string,
      id: String,
      nome: String,
      descricao: String,
      imagem: String,
      texto: String,
      icone: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

            const servicos = await this.servicosDatabase.editServicos(
               id,
               nome,
               descricao,
               imagem,
               texto,
               icone
            );
         
         return ("Business - Serviço editado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar serviço")
         }
      }
   }


   
}
export default new ServicosBusiness(
   new ServicosDatabase(),
   new TokenGenerator()
)
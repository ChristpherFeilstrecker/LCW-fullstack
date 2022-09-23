import { AmostrasDatabase } from "../data/AmostrasDatabase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class AmostrasBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private amostrasDatabase: AmostrasDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async amostras(

   ) {
      try {

         const info = await this.amostrasDatabase.getAmostras();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar amostras");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar amostras")
         }
      }
   }

   public async addAmostra(
      token:string,
      service_id: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         const id = this.idGenerator.generate();
         
          await this.amostrasDatabase.addAmostra(
            id,
            service_id,
            nome,
            descricao,   
            imagem
         );

         return ("Business - Amostra adicionada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar amostra")
         }
      }
   }



   public async editAmostra(
      token:string,
      id: String,
      service_id: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

            const Gallerie = await this.amostrasDatabase.editAmostra(
               id,
               service_id,
               nome,
               descricao,
               imagem
            );
         

         return ("Business - Amostra editada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar amostra")
         }
      }
   }

   public async deleteAmostra(
   
      id: String
   ) {
      try {

         await this.amostrasDatabase.deleteAmostra(
            id
         );

         return ("Business - Amostra deletada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao deletar amostra")
         }
      }
   }  

}
export default new AmostrasBusiness(
   new IdGenerator(),
   new AmostrasDatabase(),
   new TokenGenerator()
)
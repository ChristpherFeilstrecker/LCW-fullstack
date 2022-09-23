import { InformationDatabase } from "../data/InformationDataBase";
import { TokenGenerator } from "../services/tokenGenerator";

export class InformationBusiness {

   constructor(
      private informationDatabase: InformationDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async information(
     
   ) {
      try {

         const info = await this.informationDatabase.getInformations();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar informações");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar informações")
         }
      }
   }

   public async editInformation(
      token:string,
      id: String,
      telefone: String,
      whats: String,
      email: String,
      endereco: String,
      bairro: String,
      cidade: String,
      estadoPaisCep: String,
      facebook: String,
      instagram: String

   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)
         
            const highlights = await this.informationDatabase.editInformation(
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
      
         return ("Business - Informações editadas com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar informações")
         }
      }
   }


   
}
export default new InformationBusiness(
   new InformationDatabase(),
   new TokenGenerator()
)
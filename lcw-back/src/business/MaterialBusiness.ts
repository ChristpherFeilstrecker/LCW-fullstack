import { FeedbacksDatabase } from "../data/FeedbacksDataBase";
import { MaterialDatabase } from "../data/MaterialDataBase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class MaterialBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private feedbacksDatabase: FeedbacksDatabase,
      private materialDatabase: MaterialDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async materiais(

   ) {
      try {

         const info = await this.materialDatabase.getMateriais();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar materiais");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar materiais")
         }
      }
   }

   public async addMaterial(
      token:string,
      id_cliente: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         const id = this.idGenerator.generate();
         
          await this.materialDatabase.addMaterial(
            id,
            id_cliente,
            nome,
            descricao,   
            imagem
         );

         return ("Business - Material adicionado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar material")
         }
      }
   }



   public async editMaterial(
      token:string,
      id: String,
      id_cliente: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

            const Gallerie = await this.materialDatabase.editMaterial(
               id,
               id_cliente,
               nome,
               descricao,
               imagem
            );
         

         return ("Business - material editado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar material")
         }
      }
   }

   public async deleteMaterial(
      id: String
   ) {
      try {
         
         await this.materialDatabase.deleteMaterial(
            id
         );

         return ("Business - material deletado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao deletar material")
         }
      }
   }  

}
export default new MaterialBusiness(
   new IdGenerator(),
   new FeedbacksDatabase(),
   new MaterialDatabase(),
   new TokenGenerator()
)
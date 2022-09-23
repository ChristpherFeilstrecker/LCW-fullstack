import idGenerator from "../services/idGenerator";
import BaseDataBase from "./BaseDatabase";

export class ServicosDatabase extends BaseDataBase {

   protected tableName: string = "lcw_servicos";

   public async getServicos(): Promise<void | any> {
      try {
         const result = await BaseDataBase.connection.raw(`
         SELECT * from ${this.tableName};
         `);

         return result[0]
         
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

   public async getServicosById(
    id: String
   ): Promise<void | any> {
    try {
       const result = await BaseDataBase.connection.raw(`
       SELECT * from ${this.tableName};
       `);

       return result[0]
       
    } catch (error) {
       if (error instanceof Error) {
          throw new Error(error.message)
       }
    }
 }

 public async editServicos(
   id: String,
   nome: String,
   descricao: String,
   imagem: String,
   texto: String,
   icone: String
   
  ): Promise<void | any> {
   try {
  let query = `UPDATE \`${this.tableName}\` SET \`nome\`="${nome}", \`descricao\`="${descricao}", \`imagem\`="${imagem}", \`texto\`="${texto}", \`icone\`="${icone}" WHERE \`id\`="${id}";`

      const result = await BaseDataBase.connection.raw(
        query
      );

   } catch (error) {

      if (error instanceof Error) {
         throw new Error(error.message)
      }
   }
}

 

 


}
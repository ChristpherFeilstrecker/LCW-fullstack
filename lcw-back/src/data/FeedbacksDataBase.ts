import BaseDataBase from "./BaseDatabase";

export class FeedbacksDatabase extends BaseDataBase {

   protected tableName: string = "lcw_feedbacks";

   
   public async getFeedbacks(): Promise<void | any> {
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

    public async addFeedback(
      id: String,
      cargo: String,
      nome: String,
      descricao: String,
      imagem: String
   ): Promise<void> {
      try {

         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, cargo, nome, descricao, imagem)
            VALUES (
            '${id}', 
            '${cargo}',
            '${nome}', 
            '${descricao}',
            '${imagem}'
            )`
         );
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
         }
         
      }
   }

   public async deletefeedback(
      id: String
        
     ): Promise<void | any> {
      try {
         let query = `DELETE FROM \`${this.tableName}\` WHERE \`id\`="${id}";`
      
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

   public async editFeedback(
      id: String,
      cargo: String,
      nome: String,
      descricao: String,
      imagem: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`cargo\`="${cargo}", \`nome\`="${nome}", \`descricao\`="${descricao}", \`imagem\`="${imagem}" WHERE \`id\`="${id}";`
  
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
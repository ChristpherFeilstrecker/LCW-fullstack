import BaseDataBase from "./BaseDatabase";

export class InformationDatabase extends BaseDataBase {

   protected tableName: string = "lcw_informacoes";

   /*
   public async getInformations(): Promise<void | any> {
      
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
*/
   public async getInformations(): Promise<void | any> {
      
      let query = `SELECT * from ${this.tableName};`
    
      try {

         const result = await BaseDataBase.connection.raw(query);

         return result[0]
         
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }



   public async editInformation(
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
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\`
            SET \`telefone\`="${telefone}",
            \`whats\`="${whats}",
            \`email\`="${email}",
            \`endereco\`="${endereco}",
            \`bairro\`="${bairro}",
            \`cidade\`="${cidade}",
            \`estadoPaisCep\`="${estadoPaisCep}",
            \`facebook\`="${facebook}",
            \`instagram\`="${instagram}"
            WHERE \`id\`="${id}";`
  
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
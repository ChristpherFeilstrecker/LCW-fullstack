import BaseDataBase from "./BaseDatabase";

export class MaterialDatabase extends BaseDataBase {

   protected tableName: string = "lcw_material";

   
   public async getMateriais(): Promise<void | any> {
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

    public async addMaterial(
      id: String,
      id_cliente: String,
      nome: String,
      descricao: String,
      imagem: String
   ): Promise<void> {
      try {

         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, id_cliente, nome, descricao, imagem)
            VALUES (
            '${id}', 
            '${id_cliente}',
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

public async editMaterial(
      id: String,
      id_cliente: String,
      nome: String,
      descricao: String,
      imagem: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`id_cliente\`="${id_cliente}", \`nome\`="${nome}", \`descricao\`="${descricao}", \`imagem\`="${imagem}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

   public async deleteMaterial(
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

   

}
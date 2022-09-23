import BaseDataBase from "./BaseDatabase";

export class AmostrasDatabase extends BaseDataBase {

   protected tableName: string = "lcw_amostras";

   
   public async getAmostras(): Promise<void | any> {
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

    public async addAmostra(
      id: String,
      service_id: String,
      nome: String,
      descricao: String,
      imagem: String
   ): Promise<void> {
      try {

         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, service_id, nome, descricao, imagem)
            VALUES (
            '${id}', 
            '${service_id}',
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

   public async deleteAmostra(
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

   public async editAmostra(
      id: String,
      service_id: String,
      nome: String,
      descricao: String,
      imagem: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`service_id\`="${service_id}", \`nome\`="${nome}", \`descricao\`="${descricao}", \`imagem\`="${imagem}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }
  
/*
   public async editGallerieNome(
      id: String,
      nome: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`nome\`="${nome}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }
  
   public async editGallerieDescricao(
      id: String,
      descricao: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`descricao\`="${descricao}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }
  
   public async editGallerieImagem(
      id: String,
      imagem: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`imagem\`="${imagem}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

  

   public async deleteGallerie(
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
*/

}
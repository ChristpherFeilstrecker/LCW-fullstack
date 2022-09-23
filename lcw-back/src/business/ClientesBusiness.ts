import { ClientesDatabase } from "../data/ClientesDatabase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class ClientesBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private clientesDatabase: ClientesDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async clientes(

   ) {
      try {

         const info = await this.clientesDatabase.getClientes();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar clientes");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar clientes")
         }
      }
   }

   public async editClientes(
      token: string,
      id: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         const Gallerie = await this.clientesDatabase.editCliente(
            id,
            nome,
            descricao,
            imagem
         );


         return ("Business - Cliente editado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar cliente")
         }
      }
   }

   public async addCliente(
      token: string,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         const id = this.idGenerator.generate();

         await this.clientesDatabase.addCliente(
            id,
            nome,
            descricao,
            imagem
         );

         return ("Business - Cliente adicionado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar cliente")
         }
      }
   }

   public async deleteCliente(
      id: String
   ) {
      try {

         await this.clientesDatabase.deleteCliente(
            id
         );

         return ("Business - Cliente deletado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao excluir cliente")
         }
      }
   }



}
export default new ClientesBusiness(
   new IdGenerator(),
   new ClientesDatabase(),
   new TokenGenerator()
)
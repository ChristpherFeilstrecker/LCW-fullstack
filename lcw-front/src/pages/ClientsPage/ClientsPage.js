import "./StyledClientsPage.css";
import { useContext } from "react";
import GlobalContext from "../../components/global/globalContext";
//import { useNavigate } from "react-router-dom";

export default function ClientsPage() {
  const data = useContext(GlobalContext);
  let clientes = data.clientes;
  let setClientId = data.setClientId;
  let setModalView = data.setModalView;
  let modalView = data.modalView

  //let navigate = useNavigate();

  let modalFunction = ((id) => {
    setClientId(id);
    setModalView(!modalView)
})

  let listClientes = clientes && clientes
        .map((cli) => {
            return <div key={cli.id} onClick={()=>modalFunction(cli.id)} className="logo-box-section-2">
            <img className="logo-section-2" src={cli.imagem} alt="logo" />
            <div className="text-logo-section-2">{cli.descricao}</div>
          </div>

        })

  return (
    <div id="intro-section-2">
      <div className="container-text-section-2">
        <div className="text-section-2">Nossos parceiros</div>
        <div className="text-section-2">e clientes</div>
      </div>

      <div className="container-intro-section-2">
        
       {listClientes}

      </div>

    </div>
  )
}
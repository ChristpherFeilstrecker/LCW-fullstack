import "./StyledFooter.css";
import { useContext } from "react";
import GlobalContext from "../../components/global/globalContext";
import logo from "../../images/lcwlogo.jpg"
import arrowLeft from "../../images/arrowleft.png"
import arrowRigth from "../../images/arrowrigth.png"
import { useState } from "react";

export default function Footer() {
    const data = useContext(GlobalContext);
    const informacoes = data.informacoes;
    let modalView = data.modalView
    let setModalView = data.setModalView;
    let materiais = data.materiais;
    let clienteId = data.clienteId;

    let [indexPosition, setIndexPosition] = useState(1);
    let arrayOfMaterials = data.arrayOfMaterials;

    let modalFunction = (() => {
        setModalView(!modalView)
    });

    let ModalMaterialToDetail = materiais && materiais.map((mat) => {

        if (mat.id_cliente === clienteId) {
            return <div key={mat.id} className="gallery">
                <div className="text-modal">
                    <strong>{mat.nome}</strong>
                    <div>{mat.descricao}</div>
                </div>
                <img className="img-modal" src={mat.imagem} alt={mat.nome} />
            </div>
        }
    });



    let cal = arrayOfMaterials.length - 1

    let backPosition = (() => {
        if (indexPosition > 1) {
            setIndexPosition(indexPosition - 1)
        } else {
            setIndexPosition(cal)
        }
    });

    let nextPosition = (() => {
        if (indexPosition < cal) {
            setIndexPosition(indexPosition + 1)
        } else {
            setIndexPosition(1)
        }
    });

    /*
        return <div key={mat.id} className="item current-item">
                    <div>
                        <div>{mat.nome}</div>
                        <div>{mat.descricao}</div>
                    </div>
    
                    <img className="logo-section-4 margin-top" src={mat.imagem} alt={mat.nome} />
                </div>
                */
    let telefone = informacoes && informacoes[0].telefone.split("") // separa caracteres em array
    let tel = telefone && `(${telefone[0]}${telefone[1]}) ${telefone[2]}` + `${telefone[3]}` + `${telefone[4]}` + `${telefone[5]}-` + `${telefone[6]}` + `${telefone[7]}` + `${telefone[8]}` + `${telefone[9]}`
    // tel adiciona espaços e parentes

    let celular = informacoes && informacoes[0].whats.split("")  // retorna array de caracteres
    let cel = celular && `(${celular[0]}${celular[1]}) ${celular[2]}` + `${celular[3]}` + `${celular[4]}` + `${celular[5]}` + `${celular[6]}-` + `${celular[7]}` + `${celular[8]}` + `${celular[9]}` + `${celular[10]}`
    // cel adiciona espaços e parenteses
    return (
        <div id="footer">
            <div className="logo-container">
                <img className="logo-footer" src={logo} alt="logo" />
            </div>

            <div className="info-container">
                <div className="collum-footer">
                    <div>{tel} | {cel}</div>
                    <div className="space-footer"></div>
                    <div>{informacoes && informacoes[0].email}</div>

                </div>

                <div className="collum-footer">
                    <div>{informacoes && informacoes[0].endereco}</div>
                    <div className="space-footer"></div>
                    <div>{informacoes && informacoes[0].bairro}</div>
                    <div className="space-footer"></div>
                    <div>{informacoes && informacoes[0].estadoPaisCep}</div>

                </div>
            </div>

            <div id="modal-materials" className={modalView ? "modal-container mostrar" : "modal-container"}>
                <div onClick={() => modalFunction()} className="btn-close-modal">X</div>
                <div className="modal">

                    <div className="carrosel">
                        {ModalMaterialToDetail}
                    </div>

                </div>
            </div>

        </div>
    )
}
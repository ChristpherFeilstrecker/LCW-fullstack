import "./StyledIntroSection4.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import arrowLeft from "../../../../images/arrowleft.png"
import arrowRigth from "../../../../images/arrowrigth.png"
import { useState } from "react";


export default function IntroSection4() {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let clientes = data.clientes;
    let setClientId = data.setClientId;
    let clienteId = data.clienteId;
    let setModalView = data.setModalView;
    let modalView = data.modalView;
    let materiais = data.materiais;
    

    const navigateVideosPage = (() => {
        navigate("/clientes")
        window.scrollTo(0, 0);
    })

    let modalFunction = ((id) => {
        setClientId(id);
        setModalView(!modalView);
    })


    let logostoDetail = clientes && clientes.map((logo) => {

        return <div onClick={() => modalFunction(logo.id)} key={logo.id} className="video-container">
            <img className="logo-section-4 margin-top" src={logo.imagem} alt={logo.nome} />
        </div>

    })


    return (
        <div id="intro-section-4">
            <div className="container-section4">
                <div className="box-container-video-section4">
                    {logostoDetail}
                </div>
                <div className="box-container-section4">
                    <div className="text-container-section4">
                        <div onClick={() => navigateVideosPage()} className="btn-rigth-container-more margin-top" data-aos="fade-up">VER MAIS</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
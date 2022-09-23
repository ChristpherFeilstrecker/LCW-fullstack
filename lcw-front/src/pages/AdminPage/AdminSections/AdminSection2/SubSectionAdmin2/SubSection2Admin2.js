import { useContext } from "react"
import "./StyledSubSection2Admin2.css";
import GlobalContext from "../../../../../components/global/globalContext";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../../../../components/hooks/useProtectPage";
//import { BASE_URL } from "../../../../../components/constants/BaseURL"

export default function SubSection2Admin2() {
    useProtectedPage();
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let setToAdd = data.setToAdd
    let setToEdit = data.setToEdit

    const goToAdd = (add) => {
        setToAdd(add)
        navigate("/admin/painel_de_controle/add")
    }

    const goToEdit = (edit) => {

        setToEdit(edit)
        navigate("/admin/painel_de_controle/edit")
    }


    return (
        <div className="body-subsection2">
            <div className="title-subsection2">Administração</div>

            <div className="services-container-subsection2">
                <div className="title-container-subsection2">APP</div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">FEEDBACKS</strong>
                    <div className="options-service-subsection2">
                        <div onClick={() => goToAdd("FEEDBACKS")} className="option-service-subsection2">ADD</div>
                        <div onClick={() => goToEdit("FEEDBACKS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">SERVIÇOS</strong>
                    <div className="options-service-subsection2">
                        <div onClick={() => goToEdit("SERVIÇOS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">AMOSTRAS</strong>
                    <div className="options-service-subsection2">
                        <div onClick={() => goToAdd("AMOSTRAS")} className="option-service-subsection2">ADD</div>
                        <div onClick={() => goToEdit("AMOSTRAS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">CLIENTES</strong>
                    <div className="options-service-subsection2">
                        <div onClick={() => goToAdd("CLIENTES")} className="option-service-subsection2">ADD</div>
                        <div onClick={() => goToEdit("CLIENTES")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">MATERIAIS</strong>
                    <div className="options-service-subsection2">
                        <div onClick={() => goToAdd("MATERIAIS")} className="option-service-subsection2">ADD</div>
                        <div onClick={() => goToEdit("MATERIAIS")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">INFORMAÇÕES</strong>
                    <div className="options-service-subsection2">
                        <div onClick={() => goToEdit("INFORMAÇÕES")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>

                
            </div>
            <div className="users-container-subsection2">
                <div className="title-container-subsection2">AUTENTICAÇÃO E AUTORIZAÇÃO</div>

                <div className="service-subsection2">
                    <strong className="service-type-subsection2">USUÁRIO</strong>
                    <div className="options-service-subsection2">
                        <div onClick={() => goToAdd("USUÁRIO")} className="option-service-subsection2">ADD</div>
                        <div onClick={() => goToEdit("USUÁRIO")} className="option-service-subsection2">EDITAR</div>
                    </div>
                </div>
            </div>
        </div>
    )

}
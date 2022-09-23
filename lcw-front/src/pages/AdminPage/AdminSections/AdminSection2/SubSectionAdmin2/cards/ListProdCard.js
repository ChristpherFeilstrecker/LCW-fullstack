import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyledCards.css"
import axios from "axios";
import delRequestData from "../../../../../../components/hooks/delRequestData"
import { BASE_URL } from "../../../../../../components/constants/BaseURL";
import GlobalContext from "../../../../../../components/global/globalContext";
import useForm from "../../../../../../components/hooks/useForm";
import EditRequestData from "../../../../../../components/hooks/EditRequestData";


export default function ListProdCard(props) {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let toEdit = data.toEdit
    let token = data.token
    let setInfoOpen = props.setInfoOpen
    let setProdSel = props.setProdSel
    let prodSel = props.prodSel

    let feedbacks = data.feedbacks

    let destaques = data.feedbacks

    let servicos =  data.areas

    let clientes =  data.clientes

    let amostras =  data.imgsService

    let usuarios = data.usuarios

    let videos = data.videos

    let materiais = data.materiais

    let [message, setMessage] = useState("")

    const goToApp = () => {
        navigate("/admin/painel_de_controle")
    }
  
    // Informações para editar
    
    const [formEditInfo, onChangeEditInfo] = useForm({ telefone:  prodSel.telefone, celular: prodSel.whats, email: prodSel.email, endereco: prodSel.endereco, facebook: prodSel.facebook, instagram:prodSel.instagram, twiter: prodSel.twiter,bairro: prodSel.bairro, cidade: prodSel.cidade, estadoPaisCep: prodSel.estadoPaisCep })

    const EditInfoBD = e => {
        e.preventDefault()
        let body = {
            token:token,
            id: "1a",
            telefone: formEditInfo.telefone,
            whats: formEditInfo.celular,
            email: formEditInfo.email,
            endereco: formEditInfo.endereco,
            facebook: formEditInfo.facebook,
            instagram: formEditInfo.instagram,
            bairro:formEditInfo.bairro,
            cidade:formEditInfo.cidade,
            estadoPaisCep: formEditInfo.estadoPaisCep
        }
        console.log("body", body)
        EditRequestData(BASE_URL + "/editarinformacoes", body)

        setMessage("Informações editadas com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }

//inputs informacoes

    let InputsInformacoesDetail = () => {
        return <div className="product-to-edit">
        <form onSubmit={EditInfoBD} className="form-Subsection3">
            <strong>Editar Informações:</strong>
            <div className="flex-container" >
                <label>Telefone:</label>
                <input
                    placeholder={"Telefone*"}
                    type='telefone'
                    name="telefone"
                    value={formEditInfo.telefone}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                /></div>
            <div className="flex-container" >
                <label>Celular:</label>
                <input
                    placeholder={"Celular*"}
                    type='celular'
                    name="celular"
                    value={formEditInfo.celular}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                />
            </div>

            <div className="flex-container" >
                <label>Email:</label>
                <input
                    placeholder={"Email*"}
                    type='email'
                    name="email"
                    value={formEditInfo.email}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                />
            </div>

            <div className="flex-container" >
                <label>Endereço:</label>
                <input
                    placeholder={"Endereço*"}
                    type='endereco'
                    name="endereco"
                    value={formEditInfo.endereco}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                />
            </div>

            <div className="flex-container" >
                <label>Bairro:</label>
                <input
                    placeholder={"Bairro*"}
                    type='bairro'
                    name="bairro"
                    value={formEditInfo.bairro}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                />
            </div>

            <div className="flex-container" >
                <label>Cidade:</label>
                <input
                    placeholder={"Cidade*"}
                    type='cidade'
                    name="cidade"
                    value={formEditInfo.cidade}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                />
            </div>

            <div className="flex-container" >
                <label>Estado, pais e Cep:</label>
                <input
                    placeholder={"Estado, Pais e CEP*"}
                    type='estadoPaisCep'
                    name="estadoPaisCep"
                    value={formEditInfo.estadoPaisCep}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                />
            </div>

            <div className="flex-container" >
                <label>Facebook:</label>
                <input
                    placeholder={"Facebook*"}
                    type='facebook'
                    name="facebook"
                    value={formEditInfo.facebook}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                />
            </div>

            <div className="flex-container" >
                <label>Instagram:</label>
                <input
                    placeholder={"Instagram*"}
                    type='instagram'
                    name="instagram"
                    value={formEditInfo.instagram}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                    required

                />
            </div>


            <div className="btn-container" >
                <button type="submit">Salvar</button>
            </div>
        </form>
        <div>{message}</div>
        <div>
            <button onClick={() => goToApp()}>voltar</button>
        </div>

        <div className="product-to-edit" >
            <strong>Informações Atuais:</strong>
            <label>Telefone: {prodSel.telefone}</label>
            <label>Celular: {prodSel.whats}</label>
            <label>Email: {prodSel.email}</label>
            <label>Endereço: {prodSel.endereco}</label>
            <label>Bairro: {prodSel.bairro}</label>
            <label>CIdade: {prodSel.cidade}</label>
            <label>Estado, Pais e CEP: {prodSel.estadoPaisCep}</label>
            <label>Facebook: {prodSel.facebook}</label>
            <label>Instagram: {prodSel.instagram}</label>
        </div>

    </div>

    };

    //fim editar informações

    //abrir opção selecionada para editar
    const openProdToEdit = (prod) => {
        setInfoOpen(true)
        setProdSel(prod)
    }


    const DeleteGaleriaBD = (id) => {

        delRequestData(BASE_URL + `/deletargaleria?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listServicos = servicos && servicos
        .map((serv) => {
            return <div key={serv.id} className="body-position-to-edit-or-delete">
                <div onClick={() => openProdToEdit(serv)} className="position-name-edit-or-delete">{serv.nome}</div>
                
            </div>
        })

//Delete Feedback

    const DeleteFeedbacksBD = (id) => {

        delRequestData(BASE_URL + `/deletarfeedback?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listFeed = feedbacks && feedbacks
        .map((prod) => {
            return <div key={prod.id} className="body-position-to-edit-or-delete">
                <div onClick={() => openProdToEdit(prod)} className="position-name-edit-or-delete">{prod.nome}</div>
                <strong onClick={() => DeleteFeedbacksBD(prod.id)} className="button-delete">X</strong>
            </div>
        })

 // Delete amostras

 const DeleteAmostrasBD = (id) => {

    delRequestData(BASE_URL + `/deletaramostra?id=${id}`)

    setTimeout(() => {
        document.location.reload(true);
    }, 1000)

}

const listAmostras = amostras && amostras
    .map((amos) => {
        return <div key={amos.id} className="body-position-to-edit-or-delete">
            <div onClick={() => openProdToEdit(amos)} className="position-name-edit-or-delete">{amos.nome}</div>
            <strong onClick={() => DeleteAmostrasBD(amos.id)} className="button-delete">X</strong>
        </div>
    })


// Delete materiais

    const DeleteMateriaisBD = (id) => {

    delRequestData(BASE_URL + `/deletarmaterial?id=${id}`)

    setTimeout(() => {
        document.location.reload(true);
    }, 1000)

}

const listMateriais = materiais && materiais
    .map((amos) => {
        return <div key={amos.id} className="body-position-to-edit-or-delete">
            <div onClick={() => openProdToEdit(amos)} className="position-name-edit-or-delete">{amos.nome}</div>
            <strong onClick={() => DeleteMateriaisBD(amos.id)} className="button-delete">X</strong>
        </div>
    })

    // Delet Clientes
    const DeleteClientesBD = (id) => {

        delRequestData(BASE_URL + `/deletarcliente?id=${id}`)
    
        setTimeout(() => {
            document.location.reload(true);
        }, 1000)
    
    }
    
    const listClientes = clientes && clientes
        .map((amos) => {
            return <div key={amos.id} className="body-position-to-edit-or-delete">
                <div onClick={() => openProdToEdit(amos)} className="position-name-edit-or-delete">{amos.nome}</div>
                <strong onClick={() => DeleteClientesBD(amos.id)} className="button-delete">X</strong>
            </div>
        })

 // Delere Admin
    const DeleteAdminBD = (id) => {

        delRequestData(BASE_URL + `/deletaradmin?id=${id}`)

        
        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listUsers = usuarios && usuarios
        .map((user) => {

            return <div key={user.id} className="body-position-to-edit-or-delete">
                <div className="position-name-edit-or-delete">{user.nome}</div>
                <strong onClick={() => DeleteAdminBD(user.id)} className="button-delete">X</strong>
            </div>
        })

    const DeleteVideoBD = (id) => {

        delRequestData(BASE_URL + `/deletarvideo?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listVideos = videos && videos
        .map((video) => {
            return <div key={video.id} className="body-position-to-edit-or-delete">
                <div onClick={() => openProdToEdit(video)} className="position-name-edit-or-delete">{video.titulo}</div>
                <strong onClick={() => DeleteVideoBD(video.id)} className="button-delete">X</strong>
            </div>
        })

    const prodToEdit = () => {
        if (toEdit === "CLIENTES") {
            return <div>
            <strong>Selecione o cliente que deseja editar</strong>
            <div className="container-list-to-edit">
                <div className="title-list-to-edit-or-delete">
                    <div className="title-position-to-edit">Editar</div>
                    <div>Excluir</div>
                </div>
                <div>

                    {listClientes}

                </div>

            </div>
        </div>
        } else if (toEdit === "FEEDBACKS") {
            return <div>
                <strong>Selecione o feedback que deseja editar</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit">Editar</div>
                        <div>Excluir</div>
                    </div>
                    <div>

                        {listFeed}

                    </div>

                </div>
            </div>
        } else if (toEdit === "SERVIÇOS") {
            return <div>
                <strong>Selecione o serviço que deseja editar</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit">Editar</div>

                    </div>
                    <div>

                        {listServicos}

                    </div>

                </div>
            </div>
        } else if (toEdit === "AMOSTRAS") {
            return <div>
                <strong>Selecione a amostra que deseja editar</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit">Editar</div>
                        <div>Excluir</div>
                    </div>
                    <div>

                        {listAmostras}

                    </div>

                </div>
            </div>
        } else if (toEdit === "INFORMAÇÕES") {

            return <div>
                {InputsInformacoesDetail()}
            </div>

        } else if (toEdit === "USUÁRIO") {
            return <div>
                <strong>Excluir Administrador</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit"></div>
                        <div>Excluir</div>
                    </div>
                    <div>

                        {listUsers}

                    </div>

                </div>
            </div>
        } else if (toEdit === "MATERIAIS") {
            return <div>
                 <strong>Selecione o material que deseja editar</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit">Editar</div>
                        <div>Excluir</div>
                    </div>
                    <div>

                        {listMateriais}

                    </div>

                </div>
            </div>
        }
    }

    return (
        <div className="list-product-card">
            {prodToEdit()}
        </div>
    )
}
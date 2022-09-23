import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../../../components/constants/BaseURL";
import { FILE_BASE_URL } from "../../../../../../components/constants/FileBaseUrl";
import GlobalContext from "../../../../../../components/global/globalContext";
import EditRequestData from "../../../../../../components/hooks/EditRequestData";
import useForm from "../../../../../../components/hooks/useForm";

export default function ProdToEditCard(props) {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let toEdit = data.toEdit
    let prodSel = props.prodSel
    let [message, setMessage] = useState("")
    let servicos = data.areas
    let token = data.token
    let clientes = data.clientes

    const goToApp = () => {
        navigate("/admin/painel_de_controle")
    }

    let InputsNomeDetail = () => {
        return <div>
            
        </div>

    };


    // cliente para editar
    const [formEditClientes, onChangeEditClientes] = useForm({ nome: prodSel.nome, descricao: prodSel.descricao })

    const [imageEditClientes, setImageEditClientes] = useState("")



    const EditClientesBD = (url) => {
        let body = {
            token:token,
            id: prodSel && prodSel.id,
            nome: formEditClientes.nome,
            descricao: formEditClientes.descricao,
            imagem: prodSel && prodSel.imagem,
        }

        if (url) {
            body.imagem = url
        }


        EditRequestData(BASE_URL + "/editarcliente", body)
        document.getElementById("inputFile").value = "";
        setMessage("Cliente editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)
    }


    let editClientes = async e => {
        e.preventDefault()
        let url = false

        if (imageEditClientes !== "") {
            const formData = new FormData();
            formData.append('image', imageEditClientes);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(BASE_URL + "/upload", formData, headers)
                .then((response) => {
                    url = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }

        EditClientesBD(url)

    }

//Inputs Clientes
    let InputsClientesDetail = () => {
        return <div className="product-to-edit">
        <form onSubmit={editClientes} className="form-Subsection3">

            <div className="flex-container" >
                <label>Nome do cliente:</label>
                <input
                    placeholder={"Nome*"}
                    type='nome'
                    name="nome"
                    value={formEditClientes.nome}
                    onChange={onChangeEditClientes}
                    className="input-Subsection3"
                    required
                />
            </div>

            <div className="flex-container" >
                <label>Descrição:</label>
                <textarea
                    placeholder={"Descrição*"}
                    type='descricao'
                    name="descricao"
                    value={formEditClientes.descricao}
                    onChange={onChangeEditClientes}
                    className="description"
                    required
                />
            </div>

            <div className="flex-container" >
                <label>Editar Imagem:</label>
            </div>
            <input
                id="inputFile"
                type="file"
                name="image"
                className="input-Subsection3"
                onChange={e => setImageEditClientes(e.target.files[0])}

            />
            <div className="btn-container" >
                <button type="submit">Salvar</button>
            </div>
        </form>
        <div>{message}</div>
        <div>
            <button onClick={() => goToApp()}>voltar</button>
        </div>

        <div className="info-actual">
            <div className="container-img">Imagem Atual:
                <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
            </div>
        </div>
    </div>

    };


    //Fim editar cliente

    //Servicos para editar

    const [formEditServicos, onChangeEditServicos] = useForm({ nome: prodSel.nome, descricao: prodSel.descricao, texto: prodSel.texto })

    const [imageEditServicos, setImageEditServicos] = useState("")
    const [iconEditServicos, setIconEditServicos] = useState("")

    const EditServicosBD = (url,icon) => {
        let body = {
            token:token,
            id: prodSel && prodSel.id,
            nome: formEditServicos.nome,
            descricao: formEditServicos.descricao,
            imagem: prodSel && prodSel.imagem,
            texto:formEditServicos.texto,
            icone: prodSel && prodSel.icone
        }

        if (url) {
            body.imagem = url
        }

        if (icon) {
            body.icone = icon
        }

        EditRequestData(BASE_URL + "/editarservico", body)
        document.getElementById("inputFile").value = "";
        setMessage("Servico editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }


    let editServicos = async e => {
        e.preventDefault()
        let url = false
        let icon = false

        if (imageEditServicos !== "") {
            const formData = new FormData();
            formData.append('image', imageEditServicos);

            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }

            await axios.post(BASE_URL + "/upload", formData, headers)
                .then((response) => {

                    url = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }

        if (iconEditServicos !== "") {
            const formData = new FormData();
            formData.append('image', iconEditServicos);

            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }

            await axios.post(BASE_URL + "/upload", formData, headers)
                .then((response) => {

                    icon = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }

        EditServicosBD(url,icon)
    }

    //inputs serviços
    let InputsServicosDetail = () => {
        return <div className="product-to-edit">
        <form onSubmit={editServicos} className="form-Subsection3">
            <div className="flex-container" >
                <label>Nome do Serviço:</label>
                <input
                    placeholder={"Nome do serviço*"}
                    type='nome'
                    name="nome"
                    value={formEditServicos.nome}
                    onChange={onChangeEditServicos}
                    className="input-Subsection3"
                    required
                /></div>
            <div className="flex-container" >
                <label>Descrição Destaque:</label>
                <textarea
                    placeholder={"Descrição*"}
                    type='descricao'
                    name="descricao"
                    value={formEditServicos.descricao}
                    onChange={onChangeEditServicos}
                    className="description"
                    required
                />
            </div>
            <div className="flex-container" >
                <label>Texto:</label>
                <textarea
                    placeholder={"texto*"}
                    type='texto'
                    name="texto"
                    value={formEditServicos.texto}
                    onChange={onChangeEditServicos}
                    className="description"
                    required
                />
            </div>

            <div className="flex-container" >
                <label>Editar Imagem Destaque:</label>
            </div>
            <input
                id="inputFile"
                type="file"
                name="image"
                className="input-Subsection3"
                onChange={e => setImageEditServicos(e.target.files[0])}

            />

            <div className="flex-container" >
                <label>Editar Icone:</label>
            </div>
            <input
                id="inputFile"
                type="file"
                name="image"
                className="input-Subsection3"
                onChange={e => setIconEditServicos(e.target.files[0])}

            />
            <div className="btn-container" >
                <button type="submit">Salvar</button>
            </div>
        </form>
        <div>{message}</div>
        <div>
            <button onClick={() => goToApp()}>voltar</button>
        </div>

        <div className="info-actual">
            <div className="container-img">Imagem Destaque Atual:
                <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
            </div>
            <div className="container-img">icone Atual:
                <img className="actual-img" src={prodSel && prodSel.icone} alt="img" />
            </div>
        </div>
    </div>

    };

    // Fim editar Servicos

    // Feedback para editar

    const [formEditFeedbacks, onChangeEditFeedbacks] = useForm({ nome: prodSel.nome, cargo: prodSel.cargo, descricao: prodSel.descricao })

    const [imageEditFeedbacks, setImageEditFeedbacks] = useState("")



    const EditFeedbacksBD = (url) => {
        let body = {
            token:token,
            id: prodSel && prodSel.id,
            nome: formEditFeedbacks.nome,
            descricao: formEditFeedbacks.descricao,
            cargo: formEditFeedbacks.cargo,
            imagem: prodSel && prodSel.imagem
        }

        if (url) {
            body.imagem = url
        }


        EditRequestData(BASE_URL + "/editarfeedback", body)
        document.getElementById("inputFile").value = "";
        setMessage("Feedback editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)
    }


    let editFeedbacks = async e => {
        e.preventDefault()
        let url = false

        if (imageEditFeedbacks !== "") {
            const formData = new FormData();
            formData.append('image', imageEditFeedbacks);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(BASE_URL + "/upload", formData, headers)
                .then((response) => {
                    url = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }

        EditFeedbacksBD(url)

    }

    //inputs feedbacks
    let InputsFeedbacksDetail = () => {
        return <div className="product-to-edit2">
        <form onSubmit={editFeedbacks} className="form-Subsection3">

            <div className="flex-container" >
                <label>Nome:</label>
                <input
                    placeholder={"Nome*"}
                    type='nome'
                    name="nome"
                    value={formEditFeedbacks.nome}
                    onChange={onChangeEditFeedbacks}
                    className="input-Subsection3"
                    required
                /></div>

            <div className="flex-container" >
                <label>Cargo/empresa:</label>
                <input
                    placeholder={"Cargo*"}
                    type='cargo'
                    name="cargo"
                    value={formEditFeedbacks.cargo}
                    onChange={onChangeEditFeedbacks}
                    className="input-Subsection3"
                    required
                /></div>

            <div className="flex-container" >
                <label>Descrição:</label>
                <textarea
                    placeholder={"Descrição*"}
                    type='descricao'
                    name="descricao"
                    value={formEditFeedbacks.descricao}
                    onChange={onChangeEditFeedbacks}
                    className="description"
                    required
                />
            </div>

            <div className="flex-container" >
                <label>Editar Imagem :</label>
            </div>
            <input
                id="inputFile"
                type="file"
                name="image"
                className="input-Subsection3"
                onChange={e => setImageEditFeedbacks(e.target.files[0])}

            />

            <div className="btn-container" >
                <button type="submit">Salvar</button>
            </div>
            <div>{message}</div>
            <div className="container-img">Imagem Atual :
                <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />

            </div>
        </form>

    </div>

    };
    // fim editar feedbacks

    // Amostra para editar
    const [formEditAmostras, onChangeEditAmostras] = useForm({ service_id: prodSel.service_id, nome: prodSel.nome, descricao: prodSel.descricao })
    const [idGaleriaAmostras, setIdGaleriaAmostras] = useState("")
    const [imageEditAmostras, setImageEditAmostras] = useState("")


    let updateIdAmostras = (ev) => {
        setIdGaleriaAmostras(ev.target.value)
    }

    //listaserviços para selecionar id
    let idServicoAmostraList = servicos && servicos
        .map((gal) => {
            return <option key={gal.id} value={gal.id}>{gal.nome}</option>

        })

    const EditAmostrasBD = (url) => {
        let body = {
            token:token,
            id: prodSel && prodSel.id,
            service_id: formEditAmostras.service_id,
            nome: formEditAmostras.nome,
            descricao: formEditAmostras.descricao,
            imagem: prodSel && prodSel.imagem
        }
        if (idGaleriaAmostras) {
            body.id_galeria = idGaleriaAmostras
        }

        if (url) {
            body.imagem = url
        }


        EditRequestData(BASE_URL + "/editarvideo", body)
        document.getElementById("inputFile").value = "";
        setMessage("Amostra editada com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)
    }


    let editAmostras = async e => {
        e.preventDefault()
        let url = false


        if (imageEditAmostras !== "") {
            const formData = new FormData();
            formData.append('image', imageEditAmostras);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(BASE_URL + "/upload", formData, headers)
                .then((response) => {
                    url = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }


        EditAmostrasBD(url)

    }

    //inputs amostras
    let InputsAmostrasDetail = () => {
        return <div className="product-to-edit2">
        <form onSubmit={editAmostras} className="form-Subsection3">
            <div className="flex-container" >
                <label>Serviço:</label>

                <select name="idgaleria" value={idGaleriaAmostras} onChange={updateIdAmostras} >
                    <option value="">Selecionar serviço</option>
                    {idServicoAmostraList}
                </select>
            </div>
            <div className="flex-container" >
                <label>Nome da amostra:</label>
                <input
                    placeholder={"Nome*"}
                    type='nome'
                    name="nome"
                    value={formEditAmostras.nome}
                    onChange={onChangeEditAmostras}
                    className="input-Subsection3"
                    required
                /></div>
            <div className="flex-container" >
                <label>Descrição:</label>
                <input
                    placeholder={"Descrição*"}
                    type='descricao'
                    name="descricao"
                    value={formEditAmostras.descricao}
                    onChange={onChangeEditAmostras}
                    className="input-Subsection3"
                    required
                />
            </div>

            <div className="flex-container" >
                <label>Editar Imagem :</label>
            </div>
            <input
                id="inputFile"
                type="file"
                name="image"
                className="input-Subsection3"
                onChange={e => setImageEditAmostras(e.target.files[0])}
            />

            <div className="btn-container" >
                <button type="submit">Salvar</button>
            </div>
            <div>{message}</div>

            <div className="info-actual">
                <div className="container-img">Imagem Atual:
                    <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
                </div>
            </div>

        </form>

    </div>

    };

    //fim editar amostra

    // Admin para editar
    const [formEditAdmin, onChangeEditAdmin] = useForm({ nome: prodSel.nome, password: prodSel.senha })

    const EditAdminBD = e => {
        e.preventDefault()
        let body = {
            token:token,
            id: prodSel && prodSel.id,
            nome: formEditAdmin.nome,
            senha: formEditAdmin.password,
        }

        EditRequestData(BASE_URL + "/editaradmin", body)

        setMessage("Administrador editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }

    //inputs admin
    let InputsAdminDetail = () => {
        return <div className="product-to-edit">
        <form onSubmit={EditAdminBD} className="form-Subsection3">
            <div className="flex-container" >
                <label>Nome:</label>
                <input
                    placeholder={"Nome do Administrador*"}
                    type='nome'
                    name="nome"
                    value={formEditAdmin.nome}
                    onChange={onChangeEditAdmin}
                    className="input-Subsection3"
                    required
                /></div>
            <div className="flex-container" >
                <label>Senha:</label>
                <input
                    placeholder={"Senha*"}
                    type='password'
                    name="password"
                    value={formEditAdmin.password}
                    onChange={onChangeEditAdmin}
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
    </div>

    };

    // fim editar admin

    // Materias para editar
    const [formEditMateriais, onChangeEditMateriais] = useForm({ id_cliente: prodSel.id_cliente, nome: prodSel.nome, descricao: prodSel.descricao })
    const [idClienteMateriais, setIdClienteMateriais] = useState("")
    const [imageEditMateriais, setImageEditMateriais] = useState("")


    let updateIdMateriais = (ev) => {
        setIdClienteMateriais(ev.target.value)
    }

    //listaserviços para selecionar id
    let idClientesMateriasList = clientes && clientes
        .map((gal) => {
            return <option key={gal.id} value={gal.id}>{gal.nome}</option>

        })

    const EditMateriaisBD = (url) => {
        let body = {
            token:token,
            id: prodSel && prodSel.id,
            id_cliente: formEditMateriais.id_cliente,
            nome: formEditMateriais.nome,
            descricao: formEditMateriais.descricao,
            imagem: prodSel && prodSel.imagem
        }
        if (idClienteMateriais) {
            body.id_galeria = idClienteMateriais
        }

        if (url) {
            body.imagem = url
        }


        EditRequestData(BASE_URL + "/editarmaterial", body)
        document.getElementById("inputFile").value = "";
        setMessage("Material editado com sucesso");
        setTimeout(() => {
            setMessage("")
            //document.location.reload(true);
        }, 1000)
    }


    let editMateriais = async e => {
        e.preventDefault()
        let url = false

        if (imageEditMateriais !== "") {
            const formData = new FormData();
            formData.append('image', imageEditMateriais);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(BASE_URL + "/upload", formData, headers)
                .then((response) => {
                    url = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }


        EditMateriaisBD(url)

    }
console.log("imagem",prodSel.imagem)
    //inputs materiais
    let InputsMateriaisDetail = () => {
        return <div className="product-to-edit2">
        <form onSubmit={editMateriais} className="form-Subsection3">
            <div className="flex-container" >
                <label>Serviço:</label>

                <select name="idgaleria" value={idClienteMateriais} onChange={updateIdMateriais} >
                    <option value="">Selecionar cliente</option>
                    {idClientesMateriasList}
                </select>
            </div>
            <div className="flex-container" >
                <label>Nome do material:</label>
                <input
                    placeholder={"Nome*"}
                    type='nome'
                    name="nome"
                    value={formEditMateriais.nome}
                    onChange={onChangeEditMateriais}
                    className="input-Subsection3"
                    required
                /></div>
            <div className="flex-container" >
                <label>Descrição:</label>
                <input
                    placeholder={"Descrição*"}
                    type='descricao'
                    name="descricao"
                    value={formEditMateriais.descricao}
                    onChange={onChangeEditMateriais}
                    className="input-Subsection3"
                    required
                />
            </div>

            <div className="flex-container" >
                <label>Editar Imagem :</label>
            </div>
            <input
                id="inputFile"
                type="file"
                name="image"
                className="input-Subsection3"
                onChange={e => setImageEditMateriais(e.target.files[0])}
            />

            <div className="btn-container" >
                <button type="submit">Salvar</button>
            </div>
            <div>{message}</div>

            <div className="info-actual">
                <div className="container-img">Imagem Atual:
                    <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
                </div>
            </div>
        </form>
    </div>

    };

    //fim editar amostra

    //Listagem de inputs
    const prodToEdit = () => {

        if (toEdit === "CLIENTES") {

            return <div>
                {InputsClientesDetail()}
            </div>

        } else if (toEdit === "FEEDBACKS") {

            return <div>
                {InputsFeedbacksDetail()}
            </div>

        } else if (toEdit === "SERVIÇOS") {

            return <div>
                {InputsServicosDetail()}
            </div>

        } else if (toEdit === "AMOSTRAS") {

            return <div>
                {InputsAmostrasDetail()}
            </div>

        } else if (toEdit === "USUÁRIO") {
            return <div>
                {InputsAdminDetail()}
            </div>
        } else if (toEdit === "MATERIAIS") {
            return <div>
                {InputsMateriaisDetail()}
            </div>
        }
    }

    //retorno

    return (
        <div className="product-to-edit-card">
            {prodToEdit()}
        </div>
    )
}
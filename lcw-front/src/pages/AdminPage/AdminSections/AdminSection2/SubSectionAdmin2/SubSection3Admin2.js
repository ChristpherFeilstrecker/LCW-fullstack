import { useContext, useState } from "react"
import "./StyledSubSection3Admin2.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../../../../../components/global/globalContext";
import useForm from "../../../../../components/hooks/useForm";
import { BASE_URL } from "../../../../../components/constants/BaseURL";
import { FILE_BASE_URL } from "../../../../../components/constants/FileBaseUrl";
import newRequestData from "../../../../../components/hooks/newRequestData";
import { useProtectedPage } from "../../../../../components/hooks/useProtectPage";

export default function SubSection3Admin2() {
    useProtectedPage();
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let clientes = data.clientes
    let setToAdd = data.setToAdd
    let toAdd = data.toAdd
    let servicos = data.areas
    let setToEdit = data.setToEdit
    let token = data.token
    let [message, setMessage] = useState("")

    /*
    const useRequestData = (url) => {
        const [data, setData] = useState();
        let urlLink = url + "?req=" + new Date().getTime()

        useEffect((url) => {
            axios
                .get(urlLink)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log("erro", error)
                });
        }, [url]);

        return data;
    }
*/

    const goToAdd = (add) => {
        setToAdd(add)
    }

    const goToApp = () => {
        navigate("/admin/painel_de_controle")
    }

    const goToEdit = (edit) => {

        setToEdit(edit)
        navigate("/admin/painel_de_controle/edit")
    }

    //Add Feedbacks

    const [formAddFeedbacks, onChangeAddFeedbacks, clearFeedbacks] = useForm({ nome: "", cargo: "", descricao: "" })

    const [image, setImage] = useState("")

    const NewFeedbacksBD = (url) => {
        let body = {
            token:token,
            nome: formAddFeedbacks.nome,
            descricao: formAddFeedbacks.descricao,
            cargo: formAddFeedbacks.cargo,
            imagem: url
        }

        newRequestData(BASE_URL + "/addfeedback", body)
        clearFeedbacks()
        document.getElementById("inputFile").value = "";
        setMessage("Feedback adicionado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 4000)

    }


    let addFeedbacks = async e => {
        e.preventDefault()
        let url = ""
        const formData = new FormData();
        formData.append('image', image);

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

        NewFeedbacksBD(url)

    }

//Inputs Feedbacks
    let InputsFeedbacksDetail = () => {
        return <div>
            <form onSubmit={addFeedbacks} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Nome:</label>
                        <input
                            placeholder={"Nome*"}
                            type='nome'
                            name="nome"
                            value={formAddFeedbacks.nome}
                            onChange={onChangeAddFeedbacks}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Cargo/empresa:</label>
                        <input
                            placeholder={"Cargo/empresa*"}
                            type='cargo'
                            name="cargo"
                            value={formAddFeedbacks.titulo}
                            onChange={onChangeAddFeedbacks}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label className="label">Descrição:</label>
                        <textarea

                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formAddFeedbacks.descricao}
                            onChange={onChangeAddFeedbacks}
                            className="description"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Imagem:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImage(e.target.files[0])}
                        required
                    />
                    <div className="btn-container" >
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
                <button onClick={() => goToApp()}>voltar</button>
                <div>{message}</div>
        </div>
            

    };

    //End Add Feedbacks

    //Add Cliente

    const [formAddClientes, onChangeAddClientes, clearClientes] = useForm({nome:"", descricao: "" })

    const [imageClientes, setImageClientes] = useState("")


    /*
    let updateIdGalery = (ev) => {
        setIdGaleriaProduto(ev.target.value)
    }
    */

    const NewClientesBD = (url) => {
        let body = {
            token:token,
            nome: formAddClientes.nome,
            descricao: formAddClientes.descricao,
            imagem: url
        }

        newRequestData(BASE_URL + "/addcliente", body)
        clearClientes()
        document.getElementById("inputFile").value = "";
        setMessage("Cliente adicionado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 4000)
    }

    let addClientes = async e => {
        e.preventDefault()
        let url = ""
        const formData = new FormData();
        formData.append('image', imageClientes);

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

        NewClientesBD(url)

    }

    /*
//lista as galerias para selecionar id
    let idGaleryList = galerias && galerias
        .map((gal) => {
            return <option key={gal.id} value={gal.id}>{gal.nome}</option>

        })
*/

//Inputs Clientes
    let InputsClientesDetail = () => {
        return <div>
            <form onSubmit={addClientes} className="form-Subsection3">

            <div className="flex-container" >
                    <label>Nome do cliente:</label>
                    <textarea
                        placeholder={"Nome*"}
                        type='nome'
                        name="nome"
                        value={formAddClientes.nome}
                        onChange={onChangeAddClientes}
                        className="input-Subsection3"
                        required
                    />
                </div>

                <div className="flex-container" >
                    <label>Descrição do cliente:</label>
                    <textarea
                        placeholder={"Descrição*"}
                        type='descricao'
                        name="descricao"
                        value={formAddClientes.descricao}
                        onChange={onChangeAddClientes}
                        className="input-Subsection3"
                        required
                    />
                </div>

                <div className="flex-container" >
                    <label>Imagem do Cliente:</label>
                </div>
                <input
                    id="inputFile"
                    type="file"
                    name="image"
                    className="input-Subsection3"
                    onChange={e => setImageClientes(e.target.files[0])}
                    required
                />

                <button type="submit">Adicionar</button>

            </form>
            <button onClick={() => goToApp()}>voltar</button>

            <div>{message}</div>
        </div>

    };


//End Add Clientes

//Add Amostras

    const [formAddAmostras, onChangeAddAmostras, clearAmost] = useForm({ descricao: "", nome: "" })

    const [imageAmostras, setImageAmostras] = useState("")

    const [idGaleriaAmostras, setIdGaleriaAmostras] = useState("")

    let updateIdAmostras = (ev) => {
        setIdGaleriaAmostras(ev.target.value)
    }
    const NewAmostrasBD = (url) => {
        let body = {
            token:token,
            service_id: idGaleriaAmostras,
            nome: formAddAmostras.nome,
            descricao: formAddAmostras.descricao,
            imagem: url
        }

        newRequestData(BASE_URL + "/addvideo", body)
        clearAmost()
        document.getElementById("inputFile").value = "";
        setMessage("Amostra adicionada com sucesso");
        setTimeout(() => {
            setMessage("")
           document.location.reload(true);
        }, 4000)

    }


    let addAmostras = async e => {
        e.preventDefault()
        let url = ""
        const formData = new FormData();
        formData.append('image', imageAmostras);

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

        if (idGaleriaAmostras === "") {
            setMessage("Selecione o serviço");
            setTimeout(() => {
                setMessage("")
            }, 4000)

        } else {
            NewAmostrasBD(url)
        }
    }

//lista as galerias para selecionar id
    let idAmostrasList = servicos && servicos
        .map((serv) => {
            return <option key={serv.id} value={serv.id}>{serv.nome}</option>

        })

//Inputs Amostras
    let InputsAmostrasDetail = () => {
        return <div>
            <form onSubmit={addAmostras} className="form-Subsection3">

                <div className="flex-container" >
                    <label>Serviço:</label>

                    <select name="idgaleria" value={idGaleriaAmostras} onChange={updateIdAmostras} >
                        <option value="">Selecionar Serviço</option>
                        {idAmostrasList}
                    </select>
                </div>

                <div className="flex-container" >
                    <label>Nome da Amostra:</label>
                    <input
                        placeholder={"Nome da Amostra*"}
                        type='nome'
                        name="nome"
                        value={formAddAmostras.nome}
                        onChange={onChangeAddAmostras}
                        className="input-Subsection3"
                        required
                    />
                </div>

                <div className="flex-container" >
                    <label>Descrição da Amostra:</label>
                    <textarea
                        placeholder={"Descrição*"}
                        type='descricao'
                        name="descricao"
                        value={formAddAmostras.descricao}
                        onChange={onChangeAddAmostras}
                        className="input-Subsection3"
                        required
                    />
                </div>

                <div className="flex-container" >
                    <label>Imagem da Amostra:</label>
                </div>
                <input
                    id="inputFile"
                    type="file"
                    name="image"
                    className="input-Subsection3"
                    onChange={e => setImageAmostras(e.target.files[0])}
                    required
                />

                <button type="submit">Adicionar</button>

            </form>
            <button onClick={() => goToApp()}>voltar</button>

            <div>{message}</div>
        </div>

    };


    //End Add Amostras

    //Add Materiais

    const [formAddMateriais, onChangeAddMateriais, clearMat] = useForm({ descricao: "", nome: "" })

    const [imageMateriais, setImageMateriais] = useState("")

    const [idClienteMateriais, setIdClienteMateriais] = useState("")
console.log("idcliente",)
    let updateIdMateriais = (ev) => {
        setIdClienteMateriais(ev.target.value)
    }
    const NewMateriaisBD = (url) => {
        let body = {
            token:token,
            id_cliente: idClienteMateriais,
            nome: formAddMateriais.nome,
            descricao: formAddMateriais.descricao,
            imagem: url
        }

        newRequestData(BASE_URL + "/addmaterial", body)
        clearMat()
        document.getElementById("inputFile").value = "";
        setMessage("Material adicionada com sucesso");
        setTimeout(() => {
            setMessage("")
           document.location.reload(true);
        }, 4000)

    }


    let addMateriais = async e => {
        e.preventDefault()
        let url = ""
        const formData = new FormData();
        formData.append('image', imageMateriais);

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

        if (idClienteMateriais === "") {
            setMessage("Selecione o cliente");
            setTimeout(() => {
                setMessage("")
            }, 4000)

        } else {
            NewMateriaisBD(url)
        }
    }

//lista os clientes para selecionar id
    let idMateriaisList = clientes && clientes
        .map((serv) => {
            return <option key={serv.id} value={serv.id}>{serv.nome}</option>

        })

//Inputs Amostras
    let InputsMateriaisDetail = () => {
        return <div>
            <form onSubmit={addMateriais} className="form-Subsection3">

                <div className="flex-container" >
                    <label>Cliente:</label>

                    <select name="idgaleria" value={idClienteMateriais} onChange={updateIdMateriais} >
                        <option value="">Selecionar Cliente</option>
                        {idMateriaisList}
                    </select>
                </div>

                <div className="flex-container" >
                    <label>Nome do material:</label>
                    <input
                        placeholder={"Nome do material*"}
                        type='nome'
                        name="nome"
                        value={formAddMateriais.nome}
                        onChange={onChangeAddMateriais}
                        className="input-Subsection3"
                        required
                    />
                </div>

                <div className="flex-container" >
                    <label>Descrição do material</label>
                    <textarea
                        placeholder={"Descrição*"}
                        type='descricao'
                        name="descricao"
                        value={formAddMateriais.descricao}
                        onChange={onChangeAddMateriais}
                        className="input-Subsection3"
                        required
                    />
                </div>

                <div className="flex-container" >
                    <label>Imagem do material:</label>
                </div>
                <input
                    id="inputFile"
                    type="file"
                    name="image"
                    className="input-Subsection3"
                    onChange={e => setImageMateriais(e.target.files[0])}
                    required
                />

                <button type="submit">Adicionar</button>

            </form>
            <button onClick={() => goToApp()}>voltar</button>

            <div>{message}</div>
        </div>

    };


    //End Add Materias

    //add Admin

    const [formAddAdmin, onChangeAddAdmin, clearAdmin] = useForm({ nome: "", senha: "" })

    const NewAdminBD = () => {
        let body = {
            token:token,
            nome: formAddAdmin.nome,
            password: formAddAdmin.password
        }
        let url = BASE_URL + "/addAdmin"

        newRequestData(url, body)
        clearAdmin()
        setMessage("Administrador adicionado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 4000)

    }

    const AddAdmin = (ev) => {
        ev.preventDefault()
        NewAdminBD(formAddAdmin)
    }

    //Inputs Admin
    let InputsAdminDetail = () => {
        return <div>
            <form onSubmit={AddAdmin} className="form-Subsection3">
                <div className="flex-container" >
                    <label>Nome do Administrador:</label>
                    <input
                        placeholder={"Nome*"}
                        type='nome'
                        name="nome"
                        value={formAddAdmin.nome}
                        onChange={onChangeAddAdmin}
                        className="input-Subsection3"
                        required
                    /></div>
                <div className="flex-container" >
                    <label>Senha:</label>
                    <input
                        placeholder={"Senha*"}
                        type='password'
                        name="password"
                        value={formAddAdmin.password}
                        onChange={onChangeAddAdmin}
                        className="input-Subsection3"
                        required
                    />
                </div>

                <div className="btn-container" >
                    <button>Adicionar</button>
                </div>
            </form>
            <button onClick={() => goToApp()}>voltar</button>
            <div>{message}</div>
        </div>

    };

    //End Add Admin

    //lista inputs 

    const inputsToAdd = () => {
        if (toAdd === "FEEDBACKS") {
            return <div>
                {InputsFeedbacksDetail()}
            </div>
        } else if (toAdd === "CLIENTES") {
            return <div>
                {InputsClientesDetail()}
            </div>
        } else if (toAdd === "AMOSTRAS") {
            return <div>
                {InputsAmostrasDetail()}
            </div>
        } else if (toAdd === "USUÁRIO") {
            return <div>
                {InputsAdminDetail()}
            </div>
        } else if (toAdd === "MATERIAIS") {
            return <div>
                {InputsMateriaisDetail()}
            </div>
        }
    }


    return (
        <div className="body-subsection3">
            <div>
                <div className="title-subsection3">Administração: Adicionar</div>

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

            <div className="container-to-add">
                <div>Adicionar {toAdd}</div>
                {inputsToAdd()}

            </div>
        </div>
    )

}
import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/BaseURL";

export default function GlobalState(props) {
    let [cart, setCart] = useState([])
    let [detailActing, setDetailActing] = useState("")
    const [prodToDetail, setProdToDetail] = useState([""]);
    let [refresh, setRefresh] = useState(false);
    let [toAdd, setToAdd] = useState("");
    let [toEdit, setToEdit] = useState("");
    let [token, setToken] = useState("");
    let [clienteId, setClientId] = useState("")
    let [modalView,setModalView]=useState(false)

    let arrayOfMaterials = [{
        id: "01",
        id_cliente: "75832b6c-a576-4a0d-89ae-47a74c87e11c",
        nome: "nome fixo",
        descricao: "descricao fixa",
        imagem: ""
    }];

   

    /*
    const galerias = useRequestData(BASE_URL+"/galerias/")
    const parametros = useRequestData(BASE_URL+"/parametros/")
    const json = useRequestData(BASE_URL+"/produto/")
    const produtos = json && JSON.parse(json)
    
    let destaques = [
        { id: 0, imagem: img1, descricao: "Um bom desafio tem em si sua recompensa" },
        { id: 1, imagem: img2, descricao: "Na estratégia, decisiva é a aplicação" },
        { id: 2, imagem: img3, descricao: "A dedicação é fruto da persistência" },
        { id: 3, imagem: img4, descricao: "Turkienicz Advogados Associados" }
    ]
    
*/

let areas = useRequestData("http://lcwcomunicacao.com.br:21073/app"+"/servicos")

let imgsService = useRequestData(BASE_URL+"/amostras")

let clientes = useRequestData(BASE_URL+"/clientes")

let feedbacks = useRequestData(BASE_URL+"/feedbacks")

let informacoes = useRequestData(BASE_URL+"/informacoes")

let usuarios = useRequestData(BASE_URL+"/adminLCW")

let materiais = useRequestData(BASE_URL+"/materiais")

let ModalMaterialToDetail = materiais && materiais.map((mat) => {

    if (mat.id_cliente === clienteId) {
        arrayOfMaterials.push(mat)
    }
});

    /*   
      const removeFromCart = (item) => {
          const index = cart.findIndex((i) => item.id === i.id)
          const newCart = [...cart]
          newCart.splice(index, 1)
          setCart(newCart)
      }
  
      const addCountProduct = ((id) => {
          const newCart = [...cart]
          const index = newCart.findIndex((i) => id === i.id)
  
          const newQtd = Number(newCart[index].quantidade) + 1
  
          newCart[index].quantidade = newQtd
          setCart(newCart)
      })
  
      const removeCountProduct = ((id) => {
          const newCart = [...cart]
          const index = newCart.findIndex((i) => id === i.id)
  
          if (newCart[index].quantidade === 0) {
              return newCart
          } else {
              const newQtd = Number(newCart[index].quantidade) - 1
              newCart[index].quantidade = newQtd
  
          }
          setCart(newCart)
  
      })
  */
    /*
        useEffect(() => {
            const data = localStorage.getItem('cart')
            if (data) {
                setCart(JSON.parse(data))
            }
        }, [])
    
        
        useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cart))
        }, [cart])
   
*/
    useEffect(() => {
        const data = localStorage.getItem('token')
        if (data) {
            setToken(JSON.parse(data))
        }
    }, [])
 

    const data = {
        informacoes,
        usuarios,
        feedbacks,
        areas,
        clientes,
        cart,
        setCart,
        detailActing,
        setDetailActing,
        imgsService,
        toAdd,
        setToAdd,
        toEdit,
        setToEdit,
        token,
        setToken,
        materiais,
        clienteId,
        setClientId,
        modalView,
        setModalView,
        arrayOfMaterials,
        ModalMaterialToDetail
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}


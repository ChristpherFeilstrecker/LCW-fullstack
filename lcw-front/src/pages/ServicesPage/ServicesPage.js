
import { useContext } from "react";
import GlobalContext from "../../components/global/globalContext";
import "./StyledServicesPage.css";

export default function ServicesPage() {
    const data = useContext(GlobalContext);
    let areas = data.areas
    let setDetailActing = data.setDetailActing
    let detailActing = data.detailActing
    let imgsService = data.imgsService

    let toDetail= areas && areas.map((area)=>{
        if(area.id === detailActing){
            return <div key={area.id} className="container-acting-text">
                <div className="acting-title">{area.nome}</div>
            <div className="acting-text">{area.texto}</div>
                </div>
        }
    })

    let imgsToDetail= imgsService && imgsService.map((img)=>{
        if(img.service_id === detailActing){
            return <div key={img.id} className="container-imgs">
                <div className="box-text">
                <div className="title-text-amostras">{img.nome}</div>
                <div className="img-text">{img.descricao}</div>  
                </div>
                <img className="img-service" src={img.imagem} alt={img.id} />
                </div>
        }
    })

    let toDetailActions=()=>{
        if(detailActing === ""){
          return <div className="container-initial-text">
            <div className="initial-text">Veja todas as nossas soluções em mídia.</div>
            <i className="autor-text"></i>
                </div>
        }else{

            return <div>
                {toDetail}
            </div> 
        }
        
    }
    let listActions = areas && areas.map((area) => {
        return <div key={area.id} onClick={() => setDetailActing(area.id)} data-aos="fade-up" className="area-box-ActingPage">
            <img className="img-icon-ActingPage" src={area.icone} alt={area.nome} />
            <div className="img-text-ActingPage">{area.nome}</div>
        </div>
    })

    return (
        <div className="ActingPage">
            <div className="body-ActingPage">
                <div className="buttons-ActingPage">
                    {listActions}
                </div>
                <div className="services-container">
                 {toDetailActions()}
                {imgsToDetail}   
                </div>
                

            </div>

        </div>
    )
}
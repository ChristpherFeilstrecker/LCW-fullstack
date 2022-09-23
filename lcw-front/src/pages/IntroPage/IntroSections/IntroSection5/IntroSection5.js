import useForm from "../../../../components/hooks/useForm";
import "./StyledIntroSection5.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function IntroSection5() {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let setDetailActing = data.setDetailActing
    let servicos = data.areas
    
    const navigateServicesPage = ((id) => {
         setDetailActing(id)
        navigate("/servicos")
        window.scrollTo(0, 0);
    })

    return (
        <div id="intro-section-5">
            <div className="title-container-intro-section-5">
                <div className="title-intro-section-5">O QUE FAZEMOS</div>
            </div>
            <div className="body-container-intro-section-5">
                <div className="collum-container-intro-section-5">
                    <div onClick={() => navigateServicesPage(servicos && servicos[0].id)} className="service-container-intro-section-5">
                        <div>{servicos && servicos[0].nome}</div>
                        
                        <img className="serviceimg-section-5" src={servicos && servicos[0].icone} alt="service" />
                    </div>

                    <div onClick={() => navigateServicesPage(servicos && servicos[1].id)} className="service-container-intro-section-5">
                        <div>{servicos && servicos[1].nome}</div>
                        
                        <img className="serviceimg-section-5" src={servicos && servicos[1].icone} alt="service" />
                    </div>

                    <div onClick={() => navigateServicesPage(servicos && servicos[2].id)} className="service-container-intro-section-5">
                        <div>{servicos && servicos[2].nome}</div>
                       
                        <img className="serviceimg-section-5" src={servicos && servicos[2].icone} alt="service" />
                    </div>

                    <div onClick={() => navigateServicesPage(servicos && servicos[3].id)} className="service-container-intro-section-5">
                        <div>{servicos && servicos[3].nome}</div>
                      
                        <img className="serviceimg-section-5" src={servicos && servicos[3].icone} alt="service" />
                    </div>

                    <div onClick={() => navigateServicesPage(servicos && servicos[4].id)} className="service-container-intro-section-5">
                        <div>{servicos && servicos[4].nome}</div>
                       
                        <img className="serviceimg-section-5" src={servicos && servicos[4].icone} alt="service" />
                    </div>
                    
                    

                </div>

                


            </div>

        </div>
    )
}
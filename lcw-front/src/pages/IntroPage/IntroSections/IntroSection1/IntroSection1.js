import "./StyledIntroSection1.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function IntroSection1() {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let setDetailActing = data.setDetailActing
    const imgs = data.areas
    
    const navigateServicesPage = ((id) => {
        setDetailActing(id)
        navigate("/servicos")
        window.scrollTo(0, 0);
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id="intro-section-1">
            <div key={1} className="body-intro-section-1">
                
                 <img onClick={() => navigateServicesPage(imgs && imgs[0].id)} className="img-intro-section1" src={imgs && imgs[0].imagem} alt="img" />
                <div onClick={() => navigateServicesPage(imgs && imgs[0].id)} className="text-intro-section1">
                    {imgs && imgs[0].descricao}
                </div>   
            </div>
            <div key={2} className="body-intro-section-1">
                <img onClick={() => navigateServicesPage(imgs && imgs[1].id)} className="img-intro-section1" src={imgs && imgs[1].imagem} alt="img" />
                <div onClick={() => navigateServicesPage(imgs && imgs[1].id)} className="text-intro-section1">
                    {imgs && imgs[1].descricao}

                </div>
            </div>
            <div key={3} className="body-intro-section-1">
                <img onClick={() => navigateServicesPage(imgs && imgs[2].id)} className="img-intro-section1" src={imgs && imgs[2].imagem} alt="img" />
                <div onClick={() => navigateServicesPage(imgs && imgs[2].id)} className="text-intro-section1">
                    {imgs && imgs[2].descricao}
                </div>
            </div>

            <div key={4} className="body-intro-section-1">
                <img onClick={() => navigateServicesPage(imgs && imgs[3].id)} className="img-intro-section1" src={imgs && imgs[3].imagem} alt="img" />
                <div onClick={() => navigateServicesPage(imgs && imgs[3].id)} className="text-intro-section1">
                    {imgs && imgs[3].descricao}

                </div>
            </div>
            <div key={5} className="body-intro-section-1">
                <img onClick={() => navigateServicesPage(imgs && imgs[4].id)} className="img-intro-section1" src={imgs && imgs[4].imagem} alt="img" />
                <div onClick={() => navigateServicesPage(imgs && imgs[4].id)} className="text-intro-section1">
                    {imgs && imgs[4].descricao}
                </div>
            </div>
        </div>
    )
}
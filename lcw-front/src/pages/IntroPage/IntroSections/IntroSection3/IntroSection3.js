import "./StyledIntroSection3.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import { useNavigate } from "react-router-dom";
import fontIcon from "../../../../images/font-icon.jpg"

export default function IntroSection3() {
    const data = useContext(GlobalContext);
    let noticias = data.noticias
    let navigate = useNavigate();

    const navigateAboutPage = (() => {
        navigate("/sobre")
        window.scrollTo(0, 0);
    })
    return (
        <div id="intro-section-3">
           <div className="container-text-intro-section-3">
            <div className="title-intro-section-3">QUEM SOMOS</div>
            <div className="text-intro-section-3">Conheça mais sobre tudo que a nossa empresa tem a oferecer.</div>
            <button onClick={()=>navigateAboutPage()} className="btn-intro-section-3">SAIBA MAIS</button>
           </div>


        </div>
    )
}
import "./StyledIntroSection7.css";
//import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function IntroSection7() {
    //let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let feedbacks = data.feedbacks

    /*
    const navigateVideosPage = (() => {
        navigate("/videos")
        window.scrollTo(0, 0);
    })
*/
    let feedbacksList = feedbacks && feedbacks.map((feed) => {

        return <div key={feed.id} className="body-section-7">
            <div  className="collum-section-7">
                <i className="text-body-section-7">{feed.descricao}</i>
            </div>
            <div className="collum2-section-7">
                <img className="img-section-7" src={feed.imagem} alt="face" />
                <div className="name-box-section-7">
                    <div className="name-section-7">{feed.nome}</div>
                    <div className="name-section-7">{feed.cargo}</div>
                </div>
            </div>
        </div>
    })

    return (
        <div id="intro-section-7">
            <div className="container-intro-section-7">
                <div className="text-container-intro-section-7">
                    <div className="title-intro-section-7">FEEDBACKS</div>
                    <div className="text-intro-section-7">Confira o que nossos clientes estão falando da gente.</div>
                </div>
            </div>

            {feedbacksList}


        </div>
    )
}
import useForm from "../../../../components/hooks/useForm";
import "./StyledIntroSection6.css";
import { useNavigate } from "react-router-dom";

export default function IntroSection6() {
    let navigate = useNavigate();

    const navigateVideosPage = (() => {
        navigate("/videos")
        window.scrollTo(0, 0);
    })

    return (
        <div id="intro-section-6">
            <div className="container-intro-section-6">
                <div className="text-container-intro-section-6">
                   <div className="title-intro-section-6">Entre em contato conosco</div>
                <div className="text-intro-section-6">Peça seu orçamento ou tenha mais informações de nossos produtos.</div> 
                </div>
                
            </div>

            <div className="container2-intro-section-6">
                

                <form action="https://api.staticforms.xyz/submit" method="POST" className="form-container-section-6">
                <input type="hidden" name="accessKey" value="88f39418-4729-45df-8538-625fd2cb75e5"/>
                    <div>Nome:</div>
                    <input
                     className="input-section-6" 
                     name="name"
                     required
                     />
                    <div>Email:</div>
                    <input
                     className="input-section-6"
                     name="email"
                     required
                      />
                    <div>Empresa:</div>
                    <input
                     className="input-section-6"
                     name="$empresa"
                     required
                     />
                    <div>Mensagem:</div>
                    <textarea
                     className="message-section-6"
                     name="message"
                     required
                     />
                     <input type="hidden" name="redirectTo" value="http://localhost:3000/"></input>
                    <button className="btn-intro-section-6">ENVIAR</button>
                </form>
            </div>
           

        </div>
    )
}
import "./StyledContactSection2.css";
//import { useNavigate } from "react-router-dom";
import useForm from "../../../../components/hooks/useForm";

import iconFacebookBlack from "../../../../images/icon_face_cinza.png"
import iconFacebookBlue from "../../../../images/icon_face_cinza.png"

import iconInstaBlack from "../../../../images/icon_insta_cinza.png"
import iconInstaBlue from "../../../../images/icon_insta_cinza.png"

import iconLetterBlue from "../../../../images/icon_email.png"
import iconPhoneBlue from "../../../../images/icon-fone.png"
import iconPointer from "../../../../images/pointer-map.png"

import GlobalContext from "../../../../components/global/globalContext";
import { useContext } from "react";

//import { useEffect, useState } from "react";
//import axios from "axios";
//import { BASE_URL } from "../../../../components/constants/BaseURL";

export default function ContactSection2() {
    //let navigate = useNavigate();
    const data = useContext(GlobalContext);


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
        }, [url, urlLink]);

        return data;

    }
    */

    const parametros = data.informacoes

    const [form, onChange] = useForm({ name: "", email: "", empresa: "", phone: "", message: "" })

    /*
    const onChangeInputs = (ev) => {
        ev.preventDefault()
        // registDataMessage(form, clear)
        console.log("form", form)
        clear()
    }
    */

    let telefone= parametros && parametros[0].telefone.split(""); // separa caracteres em array
let tel = telefone && "("+telefone[0] + telefone[1]+")"+telefone[2]+telefone[3]+telefone[4]+telefone[5]+"-"+telefone[6]+telefone[7]+telefone[8]+telefone[9];
// tel adiciona espaços e parentes

let celular= parametros && parametros[0].whats.split("")  // retorna array de caracteres
let cel =celular && "("+celular[0]+celular[1]+")" +celular[2]+celular[3]+celular[4]+celular[5]+celular[6]+"-"+celular[7]+celular[8]+celular[9]+celular[10];
// cel adiciona espaços e parenteses


let bairro = parametros && parametros[0].bairro
    return (
        <div id="contact-section-2">

            <div className="body-container-contact-section-2">
                <div className="left-box-contact-section-2">
                    <form action="https://api.staticforms.xyz/submit" method="POST" className="form-container-box-contact-section-2" >
                        <input type="hidden" name="accessKey" value="88f39418-4729-45df-8538-625fd2cb75e5" />
                        <div className="title-contact-section-2">
                            <div className="title-word-contact-section-2">Entre em contato conosco</div>
                        </div>
                        <div className="form-container-contact-section-2">
                            <div className="form-personal-data-container-contact-section-2">
                                <input

                                    placeholder={"Seu nome*"}
                                    type='name'
                                    name="name"
                                    value={form.name}
                                    onChange={onChange}
                                    required
                                />

                                <input

                                    placeholder={"Seu e-mail*"}
                                    type='email'
                                    name="email"
                                    value={form.email}
                                    onChange={onChange}
                                    required
                                />

                                <input

                                    placeholder={"Empresa*"}
                                    type='text'
                                    name="$empresa"
                                    value={form.celPhone}
                                    onChange={onChange}
                                    required
                                />

                                <input

                                    placeholder={"Telefone*"}
                                    type='phone'
                                    name="phone"
                                    value={form.phone}
                                    onChange={onChange}
                                    required
                                />

                            </div>
                            <div className="form-message-container-contact-section-2">
                                <input

                                    placeholder={"Mensagem*"}
                                    type='text'
                                    name="message"
                                    value={form.message}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <input type="hidden" name="redirectTo" value="http://localhost:3000/"></input>
                            <div className="form-btn-container-contact-section-2">
                                <div className="btns-send-container-contact-section-2">
                                    <button className="btn-send-contact-section-2">ENVIAR</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="rigth-box-contact-section-2">

                    <div className="rigth-first-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">MIDIAS</div>

                        <div className="rigth-box-itens-contact-section-2">
                            <a href={parametros && parametros[0].facebook} target="_blank" rel="noreferrer">
                                <div className="rigth-box-icon-contact-section-2">
                                    <img className="rigth-icon-contact-section-2" src={iconFacebookBlack} alt="facebook-icon" />
                                    <img className="rigth-sub-icon-contact-section-2" src={iconFacebookBlue} alt="facebook-icon" />
                                </div>
                            </a>
                            <a href={parametros && parametros[0].instagram} target="_blank" rel="noreferrer">
                                <div className="rigth-box-icon-contact-section-2">
                                    <img className="rigth-icon-contact-section-2" src={iconInstaBlack} alt="insta-icon" />
                                    <img className="rigth-sub-icon-contact-section-2" src={iconInstaBlue} alt="insta-icon" />
                                </div>
                            </a>

                        </div>
                    </div>

                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">TELEFONE</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPhoneBlue} alt="letter-icon" />
                            <div className="eddress-Container">
                             <div className="rigth-box-text-contact-section-2">{cel}</div>
                            <div className="rigth-box-text-contact-section-2">{tel}</div>   
                            </div>
                            
                        </div>
                    </div>

                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">E-MAIL</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconLetterBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">{parametros && parametros[0].email}</div>
                        </div>
                    </div>

                    <div className="rigth-last-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">ENDEREÇO</div>
                        <div className="rigth-box-edress-contact-section-2">

                            <img className="rigth-icon-contact-section-2" src={iconPointer} alt="letter-icon" />
                            
                            <div className="eddress-Container">
                                <div className="rua-eddress-Container">
                                    <div className="rigth-box-text-edress-contact-section-2">{parametros && parametros[0].endereco}</div>
                                    <div className="rigth-box-text-edress-contact-section-2">{", " + bairro}</div>
                                </div>
                            <div className="rigth-box-text-edress-contact-section-2">{parametros && parametros[0].cidade}</div>
                            <div className="rigth-box-text-edress-contact-section-2">{parametros && parametros[0].estadoPaisCep}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="visita-container">
                <strong className="visita-text">Venha nos visitar!</strong>
            </div>

            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.3036355915883!2d-51.189277685364154!3d-29.65296222013745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95195b364b1e1d6f%3A0x925754a689b26f5a!2sR.%20Humait%C3%A1%2C%20207%20-%20Lira%2C%20Est%C3%A2ncia%20Velha%20-%20RS%2C%2093615-130!5e0!3m2!1spt-BR!2sbr!4v1663089054064!5m2!1spt-BR!2sbr" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}
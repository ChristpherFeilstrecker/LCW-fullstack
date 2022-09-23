import { Route, Routes } from "react-router-dom";
import "./StyledAboutSection2.css";
import SubSection1About2 from "./SubSectionAbout2/SubSection1About2";
import { useNavigate } from "react-router-dom";
import SubSection2About2 from "./SubSectionAbout2/SubSection2About2";
import SubSection3About2 from "./SubSectionAbout2/SubSection3About2";

export default function AboutSection2() {
    let navigate = useNavigate();
    return (
        <div id="about-section-2">

            <div className="body-container-about-section-2">

                <Routes id="routes" className="routes-container-about-section-2">
                    <Route exact path={""} element={<SubSection1About2 />} />
                    <Route exact path={"servicos"} element={<SubSection2About2 />} />
                    <Route exact path={"historia"} element={<SubSection3About2 />} />
                </Routes>


                <div className="rigth-container-about-section-2">
                    <div className="title-rigth-container-about-section-2">
                        <div data-aos="fade-left" className="title-rigth-about-section-2">
                           <div>Porque a  </div> 
                           <div>Comunicação</div> 
                           <div>é fundamental </div>
                           
                        </div>
                    </div>
                    <ul data-aos="fade" className="nav-container-rigth-about-section-2">
                        <li onClick={() => navigate(``)} className="nav-button-container-about-section-2" href="">
                            <div className="nav-button-about-section-2">SOBRE NÓS</div>
                        </li>
                        <li onClick={() => navigate(`servicos`)} className="nav-button-container-about-section-2">
                            <div className="nav-button-about-section-2">SERVIÇOS</div>
                        </li>
                        <li onClick={() => navigate(`historia`)} className="nav-button-container-about-section-2">
                            <div className="nav-button-about-section-2">NOSSA HISTÓRIA</div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
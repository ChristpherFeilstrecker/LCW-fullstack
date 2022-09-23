import sobrenos from "../../../../../images/sobrenos.jpg"

export default function SubSection1About2() {

    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">SOBRE NÓS</div>
            <div data-aos="fade" className="text-left-about-section-2">A LCW Comunicação é uma empresa que mistura jornalismo, propaganda e marketing para oferecer as melhores soluções em divulgação off e online. Temos diversas ferramentas para garantir que você atinja o seu público-alvo com muita eficiência. .</div>
            <img data-aos="fade" className="image-section-2" src={sobrenos} alt="hands" />
        </div>
    )
}
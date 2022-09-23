import produtoseservicos from "../../../../../images/servicos.jpg"

export default function SubSection2About2() {
    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">SERVIÇOS</div>
            <div data-aos="fade" className="text-left-about-section-2">A LCW é um birô de comunicação e tem expertise em diversos meios para divulgar sua empresa ou produto.
São anúncios impressos em várias publicações, outdoor, busdoor, placas de rua, carros de som, panfletos, cartões de visita, publicidade corpo-a-corpo, assessoria de imprensa e em redes sociais e criação de sites, entre muitas outras opções.
</div>
            <img data-aos="fade" className="image-section-2" src={produtoseservicos} alt="hands" />
        </div>
    )
}
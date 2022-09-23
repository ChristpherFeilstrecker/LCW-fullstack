import hands from "../../../../../images/cliente_missao.jpg"

export default function SubSection1About2() {


    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">SOBRE NÓS</div>
            <div data-aos="fade" className="text-left-about-section-2">Com mais de 30 anos de experiência no mercado, a Comercial e Instaladora Hidráulica Aggostini tem como diferencial o conhecimento que é decisivo, tanto na compra dos produtos, quanto na execução e manutenção de seu projeto.</div>
            <img data-aos="fade" className="image-section-2" src={hands} alt="hands" />
        </div>
    )
}
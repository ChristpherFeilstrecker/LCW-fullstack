import nossahistoria from "../../../../../images/nossahistoria.jpg"

export default function SubSection3About2() {

    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">NOSSA HISTÓRIA</div>
            <div data-aos="fade" className="text-left-about-section-2">A empresa iniciou em 2002, com a criação da Revista O Polvo, focada no público jovem e com distribuição gratuita no Vale do Sinos e Grande POA. Além do público jovem, a empresa começou a assessorar empresas na parte de comunicação e a produzir eventos culturais e esportivos. Há sete anos a nossa empresa faz a produção dos Jogos Mostratec, reunindo cerca de 1 mil estudantes em diversos dias de competição.
        </div>
            <img data-aos="fade" className="image2-section-2" src={nossahistoria} alt="img" />
        </div>
    )
}
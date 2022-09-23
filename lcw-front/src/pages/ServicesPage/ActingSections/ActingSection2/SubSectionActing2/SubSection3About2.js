import hands from "../../../../../images/cliente_missao.jpg"

export default function SubSection3About2() {

    return (
        <div className="left-container-about-section-2">
            <div data-aos="fade-left" className="title-left-about-section-2">NOSSA HISTÓRIA</div>
            <div data-aos="fade" className="text-left-about-section-2">Em janeiro de 1987, o então instalador Hilton Aggostini iniciou as atividades da Instaladora Hidráulica Aggostini, incluindo outras especialidades com o passar dos anos, como na parte de aquecedores e metais sanitários. Com o passar do tempo, a Aggostini foi diversificando sua linha de produtos e serviços, procurando satisfazer o mercado e sendo procurada por profissionais e clientes interessados em construir ou reformar com qualidade. Dessa forma, a Aggostini se destaca a cada dia como uma empresa séria, com uma equipe de técnicos treinados nas fábricas, em contato permanente para possíveis soluções, garantindo a qualidade nos produtos e serviços que presta.</div>
            <img data-aos="fade" className="image-section-2" src={hands} alt="hands" />
        </div>
    )
}
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import "./StyledRouter.css";

import logoseta1 from '../../images/logo_seta.jpg';
import logolcw from '../../images/logo_lcw.jpg';
import logoseta2 from '../../images/logo_seta2.jpg';
import logocomunic from '../../images/logo_comunic.jpg';
import iconWhats from '../../images/whatsapp-fixed.png';
import GlobalContext from '../../components/global/globalContext';

import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer';
import IntroPage from '../IntroPage/IntroPage'
import AboutPage from '../AboutPage/AboutPage'
import ContactPage from '../ContactPage/ContactPage';
import AdminPage from '../AdminPage/AdminPage';
import ClientsPage from '../ClientsPage/ClientsPage';
import ServicesPage from '../ServicesPage/ServicesPage';

export const Router = () => {
  const [splash, setSplash] = useState(false)
  const data = useContext(GlobalContext);
  let informacoes = data.informacoes
  useEffect(() => {
    setSplash(true)
    setTimeout(() => {
      setSplash(false)
    }, 4000)
  }, [])
let number = informacoes && informacoes[0].whats
  let whats = 55+number

  return (
    <div>
      {splash ?
        <div className='splash-screm'>
          <img className="image-splash" src={logoseta1} alt="logo" />
          <img className="image-splash2" src={logolcw} alt="logo" />
          <img className="image-splash3" src={logoseta2} alt="logo" />
          <img className="image-splash4" src={logocomunic} alt="logo" />

        </div>
        :
        <BrowserRouter className="page">
          <div className='whats-icon-container'>
            <a href={`https://api.whatsapp.com/send?phone=${whats}&text=Olá! Gostária de solicitar um serviço.`}
              target="_blank" rel="noreferrer">
              <img className="whats-fixed-icon" src={iconWhats} alt="icon-whats" />
            </a>
          </div>
          <TopBar />
          <Routes id="routes">
            <Route exact path={"/"} element={<IntroPage />} />
            <Route exact path={"/servicos"} element={<ServicesPage />} />
            <Route exact path={"/sobre/*"} element={<AboutPage />} />
            <Route exact path={"/contato"} element={<ContactPage />} />
            <Route exact path={"/clientes"} element={<ClientsPage />} />
            <Route exact path={"/admin/*"} element={<AdminPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </div>



  )

}

import "./StyledAdminPage.css";
//import AboutSection1 from "./AdminSections/AdminSection1/AdminSection1";
import AdminSection2 from "./AdminSections/AdminSection2/AdminSection2";

export default function AdminPage() {
 

    /*
SubSection1Admin2 - Login

SubSection2Admin2 - Navegador 

SubSection3Admin2 - Navegador, Add Feedback, Add Cliente, Add amsotras, Add Admin, add materiais

SubSection4Admin2 - Navegador 

LstProdCard - Edit Informações, Delete Feedback, Delete amostras, Delete Clientes, Delete Admin, Delete Materiais

ProdToEditCard - Edit Cliente, Edit Servicos, Edit Feedback, Edit Amostras, Edit Admin

    */

if (window.location.protocol == 'https:') {
          
    window.location.href = 
        window.location.href.replace(
                   'https:', 'http:');
} 
else if
    (window.location.protocol == "http:") {

    }

    return (
<div className="aboutPage">
    <AdminSection2/>
</div>
    )
}
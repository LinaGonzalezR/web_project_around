import React from "react";
{
  /*import { useState } from "react";*/
}
import "./pages/index.css";

/*import Avatar from ".images/Avatar.png";*/
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Main/Popup/Popup";
import NewCard from "./components/Main/Popup/NewCard/NewCard";
import EditAvatar from "./components/Main/Popup/EditAvatar/EditAvatar";
import EditProfile from "./components/Main/Popup/EditProfile/EditProfile";

function App() {
    const [popup, setPopup] = useState(initialState: null);
  const popupEditAvatar = {
  title: "Editar Avatar",
  children: <EditAvatar />,
  }

  const popupEditProfile = {
    title: "Editar Perfil",
    children: <EditProfile />,
    }

    const popupCreateCard = {
      title: "Nuevo Lugar",
      children: <NewCard />,
      }

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
{popup && <Popup title={popup.title}>{popup.children}</Popup>}
      <Popup title="">
        </Popup>

       
      </div>

      {/*<section className="popup popup__delete" id="popup__delete">
        <div className="popup__container popup__container-delete">
          <div className="popup__close">
            <img
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Icono de
              cerrar ventana"
              className="popup__image"
            />
          </div>
          <h3 className="form__title">¿Estás seguro?</h3>
          <button type="submit" className="button__form">
            Sí
          </button>
        </div>
      </section>

      
<section className="popup popup-image" id="popup-image">
        <div className="popup__content">
          <img className="popup__image-big" alt="Imagen ampliada" src="" />
          <h3 className="popup__title"></h3>
          <button className="popup__close">
            <img
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Icono de cerrar ventana"
              className="popup__image-close-icon"
            />
          </button>
        </div>
      </section>*/}
    </>
  );
}

export default App;

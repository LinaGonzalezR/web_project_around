import { useState } from "react";
import Avatar from "./images/Avatar.png";
import Pen from "./images/Pen.png";

{
  /*export default function Main() {
  const [popup, setPopup] = useState(null);
}*/
}

const Main = () => {
  return (
    <main className="content">
      <section className="profile">
        <img
          src={Avatar}
          alt="Foto Jacques Cousteau"
          className="profile__image"
        />
        <div className="profile__data">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <h2 className="profile__subtitle">Explorador</h2>
        </div>

        <button className="profile__button-small">
          <img
            src={Pen}
            alt="imagen de lápiz"
            className="profile__image-small"
          />
        </button>
        <button className="profile__button">
          <img
            src="<%=require('./images/Button-Symbol.svg')%>"
            alt="símbolo adición"
            className="button__add"
          />
        </button>
      </section>

      <section className="card__box"></section>
    </main>
  );
};

{
  /*export default Main;*/
}

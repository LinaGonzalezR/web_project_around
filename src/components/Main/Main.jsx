const Main = () => {
  return (
    <main className="content">
      <section className="profile">
        <img
          src="<%=require('./images/Avatar.png')%>"
          alt="Foto Jacques Cousteau"
          className="profile__image"
        />
        <div className="profile__data">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <h2 className="profile__subtitle">Explorador</h2>
        </div>

        <button className="profile__button-small">
          <img
            src="<%=require('./images/Pen.png')%>"
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

export default Main;

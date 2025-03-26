const NewCard = () => {
  return (
    <section className="popup popup__card" id="popup-card">
      <div className="popup__container">
        <form className="form" name="form2" id="form2">
          <div className="popup__close">
            <img
              src="<%=require('./images/CloseIcon.svg')%>"
              alt="Icono de cerrar ventana"
              className="popup__image"
            />
          </div>
          <h3 className="form__title">Nuevo lugar</h3>
          <input
            type="text"
            placeholder="Titulo"
            id="input-title"
            className="form__input"
            minlength="2"
            maxlength="30"
            required
            name="name"
          />
          <span className="form__input-error input-title-error"></span>

          <input
            type="url"
            placeholder="Enlace de la imagen"
            id="input-link"
            className="form__input"
            required
            name="link"
          />
          <span className="form__input-error input-link-error"></span>
          <button type="submit" className="button__form button__form_disabled">
            Crear
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewCard;

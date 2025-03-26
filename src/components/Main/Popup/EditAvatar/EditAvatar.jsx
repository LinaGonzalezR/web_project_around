const EditAvatar = () => {
  return (
    <section className="popup" id="popup-avatar">
      <div className="popup__container">
        <form className="form" name="form-avatar" id="form-avatar" novalidate>
          <div className="popup__close">
            <img
              src={Avatar}
              alt="Icono de
              cerrar ventana"
              className="popup__image"
            />
          </div>
          <h3 className="form__title">Actualizar Foto</h3>
          <input
            type="url"
            placeholder="Enlace de la nueva imagen"
            className="form__input"
            required
            name="avatar"
            id="input-avatar"
          />
          <span className="form__input-error input-avatar-error"></span>
          <button type="submit" className="button__form button__form_disabled">
            Guardar
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditAvatar;

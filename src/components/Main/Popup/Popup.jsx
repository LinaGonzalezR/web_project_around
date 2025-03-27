export default function Popup(props) {
  const { title, children } = props;

  return (
    <div className="popup">
      <div className="popup__content">
        <Popup title="Editar Perfil">
          <EditProfile />
        </Popup>

        <Popup title="Nuevo lugar">
          <NewCard />
        </Popup>

        <Popup title="Editar Avatar">
          <EditAvatar />
        </Popup>
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}

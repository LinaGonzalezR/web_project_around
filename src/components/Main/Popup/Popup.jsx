export default function Popup(props) {
  const { title, children } = props;

  return (
    <div className="popup">
      <div className="popup__content">
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

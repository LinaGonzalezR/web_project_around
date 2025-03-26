import Logo from "../../images/Header.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo alrededor de" className="header__logo" />
    </header>
  );
};

export default Header;

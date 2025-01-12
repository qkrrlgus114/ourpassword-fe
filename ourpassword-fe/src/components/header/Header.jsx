import Qr from "./Qr";
import "../../css/header/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="kakao_popup">
        <Qr />
      </div>
      <img src="/assets/logo.png" className="header__logo" />
    </div>
  );
}

export default Header;

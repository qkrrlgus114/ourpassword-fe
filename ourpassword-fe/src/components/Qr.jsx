import { useState } from "react";
import KakaoPopup from "./kakaoPopup";

function Qr() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="qr">
      <img
        className="qr_btn"
        src="/assets/coffee-btn.png"
        onClick={openPopup}
      />
      {isPopupOpen && <KakaoPopup onClose={closePopup} />}
    </div>
  );
}

function popupKakaoPay() {}

export default Qr;

import "../css/KakaoPopup.css";
import { useState } from "react";

function KakaoPopup({ onClose }) {
  const [buttonText, setButtonText] = useState("닫기");

  const handleMouseEnter = () => setButtonText("정말로 커피 안 주실 거예요?");
  const handleMouseLeave = () => setButtonText("닫기");

  return (
    <div className="popup_overlay">
      <div className="popup_content">
        <div className="popup_title">
          박기현에게 커피를 주지 않으시겠습니까?
        </div>
        <img src="/assets/qr.png" alt="" />
        <button
          className="popup_close"
          onClick={onClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default KakaoPopup;

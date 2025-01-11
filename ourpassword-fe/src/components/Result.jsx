import { useState } from "react";
import "../css/Result.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Result({ encryptedValue, submitFormData }) {
  // 복사 상태
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  // 복사 알림 표시
  const handleCopy = () => {
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  const handleBack = () => {
    window.location.reload();
  };

  return (
    <div className="result">
      <div className="result_input">
        <div className="result_group">
          <label>암호화 방식</label>
          <input
            className="form_key"
            type="text"
            autoComplete="off"
            readOnly
            value={submitFormData.encryptModule}
          ></input>
        </div>
        <div className="result_group">
          <label>Key</label>
          <input
            className="form_key"
            type="text"
            autoComplete="off"
            readOnly
            value={submitFormData.key}
          ></input>
        </div>
        <div className="result_group">
          <label>변환 전</label>
          <input
            className="form_key"
            type="text"
            autoComplete="off"
            value={submitFormData.value}
            readOnly
          ></input>
        </div>
        <div className="result_group">
          <label>변환 후</label>
          <div className="result_wrapper">
            <input
              className="result_content"
              type="text"
              autoComplete="off"
              value={encryptedValue}
              readOnly
            ></input>
            <CopyToClipboard text={encryptedValue} onCopy={handleCopy}>
              <img
                src="/assets/copy_icon.png"
                className="copy_icon"
                onClick={handleCopy}
              ></img>
            </CopyToClipboard>
            {showCopyMessage && (
              <div className="copy-message">복사되었습니다!</div>
            )}
          </div>
        </div>
        <button className="reset_btn" onClick={handleBack}>
          초기화
        </button>
      </div>
    </div>
  );
}

export default Result;

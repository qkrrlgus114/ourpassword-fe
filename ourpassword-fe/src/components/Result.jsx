import "../css/Result.css";

function Result({ encryptedValue, submitFormData }) {
  const handleBack = () => {
    window.location.reload();
  };

  return (
    <div className="result">
      <div className="result_input">
        <div className="result_group">
          <label htmlFor="form_key">암호화 방식</label>
          <input
            id="form_key"
            className="form_key"
            type="text"
            autoComplete="off"
            readOnly
            value={submitFormData.encryptModule}
          ></input>
        </div>
        <div className="result_group">
          <label htmlFor="form_key">Key</label>
          <input
            id="form_key"
            className="form_key"
            type="text"
            autoComplete="off"
            readOnly
            value={submitFormData.key}
          ></input>
        </div>
        <div className="result_group">
          <label htmlFor="form_key">변환 전</label>
          <input
            id="form_key"
            className="form_key"
            type="text"
            autoComplete="off"
            value={submitFormData.value}
            readOnly
          ></input>
        </div>
        <div className="result_group">
          <label htmlFor="form_content">내용</label>
          <input
            id="form_content"
            className="form_content"
            type="text"
            autoComplete="off"
            value={encryptedValue}
            readOnly
          ></input>
        </div>
        <button className="btn_encrypt" onClick={handleBack}>
          다시 변환하기
        </button>
      </div>
    </div>
  );
}

export default Result;

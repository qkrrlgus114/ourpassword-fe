import { useState } from "react";

function Form({ encryptModules, onSubmit }) {
  // 값 상태
  const [encryptModule, setEncryptModule] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  // 값이 없을 경우를 확인하기 위한 상태
  const [noEncryptModule, setNoEncryptModule] = useState("");
  const [noKey, setNoKey] = useState("");
  const [noValue, setNoValue] = useState("");

  const handleEncrypt = () => {
    let status = true;

    if (!encryptModule) {
      setNoEncryptModule(" (암호 방식을 선택해주세요)");
      status = false;
    } else {
      setNoEncryptModule("");
    }

    if (!key) {
      setNoKey(" (암호 키를 입력해주세요)");
      status = false;
    } else {
      setNoKey("");
    }

    if (!value) {
      setNoValue(" (암호 내용을 입력해주세요)");
      status = false;
    } else {
      setNoValue("");
    }

    if (!status) return;

    onSubmit({ encryptModule, key, value });
  };

  return (
    <div className="form">
      <div className="form_input">
        <div className="form_group">
          <label>
            암호화 방식
            {noEncryptModule && (
              <span className="error_message">{noEncryptModule}</span>
            )}
          </label>
          <select
            id="form_type"
            value={encryptModule}
            onChange={(e) => {
              setEncryptModule(e.target.value);
              if (e.target.value) setNoEncryptModule("");
            }}
          >
            <option value="" disabled>
              선택하세요
            </option>
            {encryptModules.map((module) => {
              if (module.name === "BCrypt") {
                return (
                  <option key={module.id} value={module.name} disabled>
                    {module.name}(준비중입니다)
                  </option>
                );
              }
              return (
                <option key={module.id} value={module.name}>
                  {module.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form_group">
          <label>
            Key
            {noKey && <span className="error_message">{noKey}</span>}
          </label>
          <input
            id="form_key"
            className="form_key"
            type="text"
            placeholder="암호 키"
            onChange={(e) => {
              setKey(e.target.value);
              if (e.target.value) setNoKey("");
            }}
            autoComplete="off"
          ></input>
        </div>
        <div className="form_group">
          <label>
            내용
            {noValue && <span className="error_message">{noValue}</span>}
          </label>
          <input
            id="form_content"
            className="form_content"
            type="text"
            placeholder="암호화 내용"
            onChange={(e) => {
              setValue(e.target.value);
              if (e.target.value) setNoValue("");
            }}
            autoComplete="off"
          ></input>
        </div>
        <button className="btn_encrypt" onClick={handleEncrypt}>
          변환하기
        </button>
      </div>
    </div>
  );
}

export default Form;

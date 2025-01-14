import axios from "axios";
import Form from "./Form";
import Loading from "./Loading";
import Result from "./Result";
import "../../css/content/Content.css";
import { useState } from "react";

function Content({ encryptModules, onError, setIsResultVisible }) {
  // Form에서 전달 받은 값
  const [submitFormData, setSubmitFormData] = useState(null);
  // 암호화를 진행한 값
  const [encryptedValue, setEncryptedValue] = useState("");
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // Form으로부터 받은 데이터 저장
  const handlerFormSubmit = (data) => {
    const encryptModule = data.encryptModule;
    const key = data.key;
    const value = data.value;

    if (encryptModule == null) {
      onError("암호화 방식을 선택해주세요.");
      return;
    }

    if (key == null) {
      onError("암호 키를 입력해주세요.");
      return;
    }

    if (value == null) {
      onError("암호화 내용을 입력해주세요.");
      return;
    }

    if (encryptModule === "AES_256" && key.length != 32) {
      onError("AES_256의 암호 키는 32자여야 합니다.");
      return;
    }

    const baseURL = import.meta.env.VITE_API_BASE_URL;
    setSubmitFormData(data);
    setIsLoading(true);

    axios
      .post(`${baseURL}/api/encrypt`, data)
      .then((res) => {
        setTimeout(() => {
          setEncryptedValue(res.data.data.encryptedValue);
          setIsLoading(false);
        }, 3000);
        setIsResultVisible(true);
      })
      .catch((err) => {
        onError(err.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="content">
      {isLoading ? (
        <Loading />
      ) : encryptedValue ? (
        <Result
          encryptedValue={encryptedValue}
          submitFormData={submitFormData}
        />
      ) : (
        <Form encryptModules={encryptModules} onSubmit={handlerFormSubmit} />
      )}
    </div>
  );
}

export default Content;

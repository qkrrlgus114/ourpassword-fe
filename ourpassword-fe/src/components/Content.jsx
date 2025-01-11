import axios from "axios";
import Form from "./Form";
import Loading from "./Loading";
import Result from "./Result";
import { useState } from "react";

function Content({ encryptModules, onError }) {
  // Form에서 전달 받은 값
  const [submitFormData, setSubmitFormData] = useState(null);
  // 암호화를 진행한 값
  const [encryptedValue, setEncryptedValue] = useState("");
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // Form으로부터 받은 데이터 저장
  const handlerFormSubmit = (data) => {
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
      })
      .catch((err) => {
        console.log(err.response.data.message);
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

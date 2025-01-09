import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Qr from "../components/Qr";
import ErrorModal from "../components/ErrorModal";
import "../css/MainPage.css";
import "../css/ErrorModal.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [encryptModules, setEncryptModules] = useState([]);

  const [errorState, setErrorState] = useState({ isError: false, message: "" });

  // 에러 모달 보여주기
  const showErrorModal = (message) => {
    setErrorState({ isError: true, message });
  };

  // 에러 모달 닫기
  const closeErrorModal = () => {
    setErrorState({ isError: false, message: "" });
    const navigate = useNavigate();
    navigate("/");
  };

  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    axios
      .get(`${baseURL}/api/modules`)
      .then((res) => {
        setEncryptModules(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mainPage">
      <Qr />
      <Header />
      <Content encryptModules={encryptModules} onError={showErrorModal} />
      <Footer />
      {errorState.isError && (
        <ErrorModal
          message={errorState.message}
          closeErrorModal={closeErrorModal}
        />
      )}
    </div>
  );
}

export default MainPage;

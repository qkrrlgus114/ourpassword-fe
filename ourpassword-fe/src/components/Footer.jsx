import axios from "axios";
import { useState, useEffect } from "react";

function Footer() {
  const [totalVisitor, setTotalVisitor] = useState(0);
  const [todayVisitor, setTodayVisitor] = useState(0);
  const [totalEncrypt, setTotalEncrypt] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const baseURL = import.meta.env.VITE_API_BASE_URL;
      try {
        const [totalRes, todayRes, encryptRes] = await Promise.all([
          axios.get(`${baseURL}/api/visited-all`),
          axios.get(`${baseURL}/api/visited-today`),
          axios.get(`${baseURL}/api/encrypt-all`),
        ]);

        setTotalVisitor(totalRes.data.data);
        setTodayVisitor(todayRes.data.data);
        setTotalEncrypt(encryptRes.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="footer">
      <div className="footer_bar">
        <div className="footer_count">누적 방문자 : {totalVisitor}명</div>
        <div className="footer_count">오늘 방문자 : {todayVisitor}명</div>
        <div className="footer_count">누적 변환 횟수 : {totalEncrypt}회</div>
      </div>
    </div>
  );
}

export default Footer;

import { useNavigate } from "react-router-dom";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useState } from "react";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10); //ISO형식의 문자열 반환 YYYY-MM-DD형식으로 9번째 자리까지만 자름
};

const New = () => {
  console.log();
  const navigate = useNavigate();
  const [date, setDate] = useState(getStringDate(new Date())); //getStringDate(new Date()) 로 초기값을 해주어야 현재 내 날짜로 초기값됨
  return (
    <div>
      <MyHeader
        headText={"새 일기쓰기"}
        leftChild={
          <MyButton text={" < 뒤로가기 "} onClick={() => navigate(-1)} />
        }
      />

      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input-box">
            <input
              className="input-date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default New;

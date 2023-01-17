import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10); //ISO형식의 문자열 반환 YYYY-MM-DD형식으로 9번째 자리까지만 자름
};

const DiaryEditor = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(getStringDate(new Date()));
  return (
    <div>
      <MyHeader
        headText={"새 일기쓰기"}
        leftChild={
          <MyButton text={" < 뒤로가기 "} onClick={() => navigate(-1)} />
        }
      />
      <div className="DiaryEditor">
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
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
export default DiaryEditor;

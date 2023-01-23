import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "./../App";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        //일기가 있을 때
        setData(targetDiary);
      } else {
        //일기가 없읕 때
        alert("없는 일기 입니다");
        navigate("/", { replace: "true" });
      }
    }
  }, [id, diaryList]);
  return (
    <div>
      <h1>Diary</h1>
      <p>이 곳은 일기 상세페이지 입니다.</p>
    </div>
  );
};

export default Diary;

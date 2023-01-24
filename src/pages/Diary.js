import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { emotionList } from "../util/emotion";
import { DiaryStateContext } from "./../App";

import { getStringDate } from "./../util/date";

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

  if (!data) {
    return <div className="DiaryPage">로딩중입니다..</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    console.log(curEmotionData);
    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton
              text={"< 뒤로가기 "}
              onClick={() => {
                navigate(-1);
              }}
            />
          }
          rightChild={
            <MyButton
              text={"수정하기 > "}
              type={"positive"}
              onClick={() => {
                navigate(`/edit/${data.id}`);
              }}
            />
          }
        />
        <article>
          <section className="section1">
            <h4>오늘의 감정</h4>
            <div className="diary_img_wrapper">
              <img src={curEmotionData.emotion_img}></img>
            </div>
            <div className="emotion_descript">
              {curEmotionData.emotion_descript}
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;

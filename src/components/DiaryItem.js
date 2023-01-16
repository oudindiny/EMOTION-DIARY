import MyButton from "./MyButton";

const DairyItem = ({ id, emotion, content, date }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  return (
    <div className="DiaryItem">
      <div
        className={["emotion_img_wrapper", `/assets/emotion${emotion}`].join(
          " "
        )}
      >
        <img src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`} />
      </div>
      <div className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">
          {content.slice(0, 25)}
          {/* slice해서 25글자까지만 보이게 하기 */}
        </div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"수정하기"} />
      </div>
    </div>
  );
};
export default DairyItem;

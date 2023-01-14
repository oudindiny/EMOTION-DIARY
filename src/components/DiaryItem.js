
const DairyItem = (id, emotion, content, date) => {

    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";

    return (
    <div className="DairyItem">
        <div className="emotion_img_wrapper">
            <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        </div>
        <div></div>
        <div></div>
    </div>
    )
    
}
export default DairyItem;

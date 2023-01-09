import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

//COMPONENTS
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";


const Home = () => {
    const diaryList = useContext(DiaryStateContext);
    //console.log(diaryList);
    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1} 월` //header에 올라가는 년도와 월
     
    useEffect( () => {
        if(diaryList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                1 // 해당 년도 해당 월 1일
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0 // 해당 년도 해당 월 마지막일
            ).getTime();
            
            setData(
                diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
            ); //해당 월에 맞는 일기만 추려내기
            
            }
    },[diaryList,curDate]); 

    useEffect( () => {
        console.log(data);
    },[data]);
    
    
    
    
    const increaseMonth = () =>{  //월 증가 :: header 오른쪽 버튼
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
        );
    };
    const decreaseMonth = () =>{  //월 감소 :: header 왼쪽 버튼
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
        );
    };

    return(
        <div>
            <MyHeader 
            headText={headText} 
            leftChild={<MyButton text={"<"} onClick={decreaseMonth}/>}
            rightChild={<MyButton text={">"} onClick={increaseMonth}/>}
            />
            <DiaryList diaryList={data}/>
        </div>
    );
    
};

export default Home;
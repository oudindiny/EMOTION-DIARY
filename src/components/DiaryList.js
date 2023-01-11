import { useState } from "react";

const sortOptionList = [
    { value: "lastest", name: "최신순" },
    { value: "oldest", name: "오래된 순" },
]

const ControlMenu = ({value,onChange,optionList}) =>{
    return(
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {optionList.map((it,idx) => <option key={idx} value={it.value}>{it.name}</option>)} 
        </select> //여기서 it은 optionList 첫번째 객체를 가리킴
        
    );

};


const DiaryList = ({ diaryList }) => {
    const [sortType, setSortType] = useState("lastest"); //최신순
    
    const getProcessedDiaryList = () =>{
        const compare = (a,b) => {
                if (sortType === 'latest'){
                    return parseInt(b.date) - parseInt(a.date); //parseInt를 하는 이유 -> 문자열이 들어올 수도 있기 때문
                }else{
                    return parseInt(a.date) - parseInt(b.date);
                }
            
            }
        const copyList = JSON.parse(JSON.stringify(diaryList)); //바로 sort를 쓰면 원본 배열 자체가 정렬됨.
        //diaryList라는 배열을 문자열로 만들어서 parse를 시키면 배열로 다시 만들어줌
        const sortedList = copyList.sort(compare);
        return sortedList;
    }
    return(
        <div>
            <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList}/>
            {getProcessedDiaryList.map((it)=> (
                <div key={it.id}>
                    {it.content}
                </div>
            ))}
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;
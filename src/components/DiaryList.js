import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from './MyButton';

const sortOptionList = [
    {value: "latest", name:"최신순"},
    {value: "oldest", name:"오래된 순"},
];

const filterOptionList = [
    {value: "all", name: "전부 다"},
    {value: "good", name: "좋은 감정만"},
    {value: "bad", name: "안좋은 감정만"},
]

const ControlMenu = ({value, onChange, optionList}) => {
    return (
        <select className="ControlMenu" value={value} onChange={(e) => onChange(e.target.value)}>
            {optionList.map((it, idx) => (
                <option key={idx} value={it.value}>
                    {it.name}
                </option>
            ))} 
        </select>
    );
};
//value -> select의 선택값, onChange -> select가 선택할 때 바꿀 함수, optionList -> 안에 옵션

const DiaryList = ({ diaryList }) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("lastest");
    const [filter, setFilter] = useState("all");

const getProcessedDiaryList = () => {

    const filterCallBack = (item) =>{
        if(filter === "good") {
            return parseInt(item.emotion) <= 3;
        }else{
            return parseInt(item.emotion) > 3;
        }

    }


    const compare = (a,b) => {
        if(sortType === "latest"){
            return parseInt(b.date) - parseInt(a.date); //parseInt를 하는 이유 : 문자열이 들어올 수 도 있으니까 Int로 다 맞춰주기 위해
        }else{
            return parseInt(a.date) - parseInt(b.date);
        }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList));// diaryList를 문자화 -> parse를 시키면 다시 배열로 돌아와

    const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filteredList.sort(compare); //바로 sort하면 원본 배열이 망가지니 copy본에 sort

    return sortedList;
} 
    


    return(
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <ControlMenu 
                    value={sortType} 
                    onChange={setSortType}
                    optionList={sortOptionList}
                    />
                    <ControlMenu 
                    value={filter}
                    onChange={setFilter}
                    optionList={filterOptionList}
                    />
                </div>
                <div className="right_col">
                    <MyButton 
                        type={'positive'} 
                        text="새 일기 쓰기" 
                        onClick={ () => navigate("/new")}
                        />
                </div>
            </div>
            
            
            {getProcessedDiaryList().map((it)=> (
                <div key={it.id}>
                    {it.content} {it.emotion}
                </div>
            ))}
        </div>
    );
};

export default DiaryList;
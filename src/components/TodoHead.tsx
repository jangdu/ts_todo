import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    // 요소와 테두리 사이의 여백
    padding-top: 48px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    
    // 요소 테두리
    border-bottom: 1px solid black;

    h1{
        margin: 0;
        font-size: 35px;
        color: black;
    }
    // className을 이용해 특정요소 디자인
    .day{
        margin-top: 3px;
        font-size: 20px;
        color: #7b7b7bc7;
    }
    .todo-left{
        margin-top: 20px;
        font-size: 15px;
        // 글자 두껍게
        font-weight: bold;
    }
`

function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2020.20.20</h1>
            <div className="day">토요일</div>
            <div className="todo-left">할거 ㅈㄴ 많아</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;
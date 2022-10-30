import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 510px;
    height: 750px;
    
    // box하단 추가 버튼 위치 설정
    position: relative;

    // round 테두리
    border-radius: 16px;
    background-color: white;
    margin: 0 auto;

    // 위아래 여백
    margin-top: 100px;
    margin-bottom: 30px;

    display: flex;
    // 아이템들 위에서 아래로 배치
    flex-direction: column;
`;

function TodoTemplete({children}: any){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}
export default TodoTemplete;
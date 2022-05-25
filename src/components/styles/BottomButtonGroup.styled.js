import styled from "styled-components";


export const StyledBottomButtonGroup = styled.div`
    display:flex;
    justify-content: space-between;

`

export const StyledBottomButton = styled.div`
    width: 10%;
    border-radius: 50%;
    margin: 0 30px;
    &::after{
        content:"";
        display:block;
        padding-bottom: 100%;
    }
    border: 1px solid black;
    
`
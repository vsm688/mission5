import styled from "styled-components";


export const StyledBannerHolder = styled.div`
    display:flex;
    justify-content: center;
`

export const StyledBannerImg = styled.div`

    float:left;
    width: calc(30.3% - 10px);
    padding: 5px;

    &::after{
        content: "";
        display:table;
        clear:both;
    }
    img{
        width: 100%;
        border: 1px solid black;
    }
`
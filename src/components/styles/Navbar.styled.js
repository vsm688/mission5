import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.header`
    display:flex;
  
`

export const StyledNavBarList = styled.ul`
    display:flex;
    justify-content: space-between;
    width: 100%;
`

export const StyledNavBarListItem = styled.li`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: calc(100vw / 7);
    font-family: 'Inter', sans-serif;

    &:hover{
        cursor: pointer;
    }
    
    img{
        width: 100px;
        margin: 0;
        padding :0 ;
    }

    &:hover{
        .insurance-items{
            display:flex;
        }
    }
`
export const StyledNavBarListItemQuestion = styled.div`
    img{
        width: 20px;
    }
    margin-right: 50px;
`

export const StyledNavBarTop = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-right: 50px;
`

export const StyledSignInRegisterButton = styled.div`
    display:flex;
    padding: 10px;
    font-family: 'Inter', sans-serif;
`

export const StyledSocialsContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-end;
    :last-child{
        margin-right: 20px;
    }
    img{
        width: 50px;
        margin-right: 10px;
    }
`

export const StyledNavBarButton = styled.div`
    font-family: 'Inter', sans-serif;
`

export const StyledNavBarDropDownMenu = styled.div`
    display:none;
    flex-direction: column;
    z-index:20;
    position:absolute;
    margin-top: 20px;

`

export const StyledNavBarDropDownMenuItem = styled(Link)`
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    margin-bottom: 1px;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    padding: 0 15px;
    text-decoration: none;
    color: #000000;
    &:hover{
        background-color: #C4C4C4;
        cursor: pointer;
    }
    display:flex;
    justify-content: center;

`
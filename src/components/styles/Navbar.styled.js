import styled from "styled-components";


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
    justify-content: center;
    align-items: center;
    img{
        width: 100px;
        margin: 0;
        padding :0 ;
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
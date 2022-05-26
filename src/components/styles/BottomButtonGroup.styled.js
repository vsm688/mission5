import styled from "styled-components";

export const StyledBottomButton = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  /* &::after {
    content: "";
    display: table;
    padding-bottom: 100%;
  } */
  border: 1px solid black;
`;

export const StyledBottomButtonHolder = styled.div``;

export const StyledBottomButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

export const StyledRoundButtonHolderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 30.3%;
`;
export const StyledRoundButtonHolderCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 30.3%;
`;
export const StyledRoundButtonHolderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30.3%;
`;

export const StyledRoundButton = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledRoundButtonDrawCircle = styled.div`
  width: 60%;
  height: 0;
  padding-bottom: 60%;
  border-radius: 50%;
  border: 1px solid #2E98FB;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    padding-top: 100%;
  }
`;

export const StyledRoundButtonContainer = styled.div`
  display: flex;
  height: 20%;
  justify-content: center;
`;

export const StyledRoundButtonText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
`;

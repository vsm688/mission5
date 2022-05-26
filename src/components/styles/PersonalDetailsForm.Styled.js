import styled from "styled-components";

export const StyledRadioButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledRadioButtonWrapperInner = styled.div`
  input[type="radio"] {
    padding: 0.5em;
    -webkit-appearance: none;
    outline: 0.1em solid black;
    background-color: #C4C4C4;
  }
  input[type="radio"]:checked {
    display: inline-block;
    background-color: #000;
  }
`;

export const StyledRadioButton = styled.input``;

export const StyledRadioButtonWrapper = styled.label`
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
    font-size: 1.5em;
  }
`;

export const PolicyHeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PolicyHoldersForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
`;

export const PolicyHeadersFormInput = styled.input`
  width: 100%;
  height: 20px;
  border: 1.36364px solid #d5d8de;
  border-radius: 5.45455px;
  margin-bottom: 20px;
`;

export const StyledYesNoQuestions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
`;

export const StyledYesnoActualQuestion = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledYesNoButtonGroup = styled.div`
  button {
    padding: 14px 45px;
    border: none;
    margin-left: 10px;
    color: #2e98fb;
  }
`;

export const StyledInsuredVehicleQuestions = styled.div`
  margin-bottom: 120px;
`;

export const StyledContinueButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    padding: 14px 45px;
    border: none;
    margin-left: 10px;
    color: #2e98fb;
  }
`;

export const StyledFormProgressDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

export const StyledFormProgressWrapperInner = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
    font-size: 1.5em;
  }
`;


export const StyledFormProgressIcon = styled.div`
    img{
        width: 20px;
    }
`
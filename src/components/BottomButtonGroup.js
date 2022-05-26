import React from "react";
import {
  StyledRoundButton,
  StyledRoundButtonHolderLeft,
  StyledRoundButtonHolderCenter,
  StyledRoundButtonHolderRight,
  StyledRoundButtonDrawCircle,
  StyledRoundButtonContainer,
  StyledRoundButtonText
} from "./styles/BottomButtonGroup.styled";

const BottomButtonGroup = () => {
  return (
    <>
      <StyledRoundButtonContainer>
        <StyledRoundButtonHolderLeft>
          <StyledRoundButton>
            <StyledRoundButtonDrawCircle>
              <img src={"svg/hand.svg"} width={"80px"} alt="hand"></img>
            </StyledRoundButtonDrawCircle>
            <StyledRoundButtonText>Do it Online</StyledRoundButtonText>
          </StyledRoundButton>
        </StyledRoundButtonHolderLeft>
        <StyledRoundButtonHolderCenter>
          <StyledRoundButton>
            <StyledRoundButtonDrawCircle>
              <img src={"svg/laptop.svg"} alt="laptop"></img>
            </StyledRoundButtonDrawCircle>
            <StyledRoundButtonText>MultiPolicy Saving</StyledRoundButtonText>
          </StyledRoundButton>
        </StyledRoundButtonHolderCenter>
        <StyledRoundButtonHolderRight>
          <StyledRoundButton>
            <StyledRoundButtonDrawCircle>
              <img src={"svg/points.svg"} alt="earn points"></img>
            </StyledRoundButtonDrawCircle>
            <StyledRoundButtonText>Earn Points</StyledRoundButtonText>
          </StyledRoundButton>
        </StyledRoundButtonHolderRight>
      </StyledRoundButtonContainer>
    </>
  );
};

export default BottomButtonGroup;

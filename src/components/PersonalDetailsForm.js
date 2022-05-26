import React from "react";
import {
  StyledRadioButtonsContainer,
  StyledRadioButton,
  StyledRadioButtonWrapper,
  StyledRadioButtonWrapperInner,
  PolicyHeaderDetails,
  PolicyHoldersForm,
  PolicyHeadersFormInput,
  StyledYesNoQuestions,
  StyledYesnoActualQuestion,
  StyledYesNoButtonGroup,
  StyledInsuredVehicleQuestions,
  StyledContinueButtonDiv,
  StyledFormProgressDiv,
  StyledFormProgressWrapperInner,
  StyledFormProgressIcon,
} from "./styles/PersonalDetailsForm.Styled";

import BlueCarBanner from "../components/BlueCarBanner";
import BannerHolder from "../components/BannerHolder";
import BottomButtonGroup from "../components/BottomButtonGroup";
import SocialContainer from "../components/SocialContainer";
import NavBarCarBannerHolder from "../components/NavBarCarBannerHolder";

const PersonalDetailsForm = () => {
  return (
    <>
      <div style={{marginBottom:"50px"}}>
        <NavBarCarBannerHolder></NavBarCarBannerHolder>
      </div>
      <StyledFormProgressDiv>
        <StyledFormProgressWrapperInner style={{ opacity: "0.3" }}>
          <StyledFormProgressIcon>
            <img src={"svg/form.svg"} alt="random"></img>
          </StyledFormProgressIcon>
          <p>1. Sign in / register</p>
        </StyledFormProgressWrapperInner>
        <StyledFormProgressWrapperInner>
          <StyledFormProgressIcon>
            <img src={"svg/form.svg"} alt="random"></img>
          </StyledFormProgressIcon>
          <p>2. Personal Details</p>
        </StyledFormProgressWrapperInner>
        <StyledFormProgressWrapperInner style={{ opacity: "0.3" }}>
          <StyledFormProgressIcon>
            <img src={"svg/form.svg"} alt="random"></img>
          </StyledFormProgressIcon>
          <p>3. Accident Details</p>
        </StyledFormProgressWrapperInner>
        <StyledFormProgressWrapperInner style={{ opacity: "0.3" }}>
          <StyledFormProgressIcon>
            <img src={"svg/form.svg"} alt="random"></img>
          </StyledFormProgressIcon>
          <p>4. Submit</p>
        </StyledFormProgressWrapperInner>
      </StyledFormProgressDiv>
      <PolicyHoldersForm>
        <StyledRadioButtonsContainer>
          <StyledRadioButtonWrapper>
            <StyledRadioButtonWrapperInner>
              <StyledRadioButton
                type={"radio"}
                name={"AccidentType"}
              ></StyledRadioButton>
            </StyledRadioButtonWrapperInner>
            <p>I hit someone</p>
          </StyledRadioButtonWrapper>
          <StyledRadioButtonWrapper>
            <StyledRadioButtonWrapperInner>
              <StyledRadioButton
                type={"radio"}
                name={"AccidentType"}
              ></StyledRadioButton>
            </StyledRadioButtonWrapperInner>
            <p>I hit someone</p>
          </StyledRadioButtonWrapper>
          <StyledRadioButtonWrapper>
            <StyledRadioButtonWrapperInner>
              <StyledRadioButton
                type={"radio"}
                name={"AccidentType"}
              ></StyledRadioButton>
            </StyledRadioButtonWrapperInner>
            <p>I hit someone</p>
          </StyledRadioButtonWrapper>
          <StyledRadioButtonWrapper>
            <StyledRadioButtonWrapperInner>
              <StyledRadioButton
                type={"radio"}
                name={"AccidentType"}
              ></StyledRadioButton>
            </StyledRadioButtonWrapperInner>
            <p>I hit someone</p>
          </StyledRadioButtonWrapper>
        </StyledRadioButtonsContainer>
        <PolicyHeaderDetails>
          <h1>Policy Holder's Details</h1>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <h1>Policy Holder's Details</h1>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <PolicyHeadersFormInput></PolicyHeadersFormInput>
          <StyledYesNoQuestions>
            <StyledYesnoActualQuestion>
              <p>Is this person the main driver of the vehicle?</p>
              <StyledYesNoButtonGroup>
                <button>Yes</button>
                <button>No</button>
              </StyledYesNoButtonGroup>
            </StyledYesnoActualQuestion>
            <StyledYesnoActualQuestion>
              <p>Is this person the main driver of the vehicle?</p>
              <StyledYesNoButtonGroup>
                <button>Yes</button>
                <button>No</button>
              </StyledYesNoButtonGroup>
            </StyledYesnoActualQuestion>
          </StyledYesNoQuestions>

          <StyledInsuredVehicleQuestions>
            <h1>Insured Vehicle</h1>
            <PolicyHeadersFormInput></PolicyHeadersFormInput>
            <StyledYesnoActualQuestion>
              <p>Is there any modification done to this vehicle?</p>
              <StyledYesNoButtonGroup>
                <button>Yes</button>
                <button>No</button>
              </StyledYesNoButtonGroup>
            </StyledYesnoActualQuestion>
            <PolicyHeadersFormInput></PolicyHeadersFormInput>
            <PolicyHeadersFormInput></PolicyHeadersFormInput>
          </StyledInsuredVehicleQuestions>
          <StyledContinueButtonDiv>
            <button>Continue</button>
          </StyledContinueButtonDiv>
        </PolicyHeaderDetails>
      </PolicyHoldersForm>
      <BlueCarBanner></BlueCarBanner>
      <BannerHolder></BannerHolder>
      <BottomButtonGroup></BottomButtonGroup>
      <SocialContainer></SocialContainer>
    </>
  );
};

export default PersonalDetailsForm;

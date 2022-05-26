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

import { useState, useEffect } from "react";







const PersonalDetailsForm = () => {

  const [FormContentState, SetFormContentState] = useState(
    {
      AccidentType: null,
      PolicyNumber: "",
      Address: "",
      Contact: "",
      LicenseNo: "",
      PolicyHolderLicenseVersion: "",
      Name: "",
      NonPolicyHolderAddress: "",
      NonPolicyHolderContact: "",
      NonPolicyHolderLicenseNumber: "",
      DOB: "",
      MainDriver: null,
      PolicyHolderIfNotOwner: null,
      InsuredVehicleRegoNo: "",
      Modifications: null,
      RegisteredOwner: "",
      ParkedAddress: "",
    }
  )
  useEffect(
    () => { console.log(FormContentState) }

    , [FormContentState])

  const handleFormInputChange = (e, valToChange, value) => {
    SetFormContentState(prevState => ({
      ...prevState,
      [valToChange]: value
    }))
  }


  return (
    <>

      <div style={{ marginBottom: "50px" }}>
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
                onClick={(e) => {
                  handleFormInputChange(e, "AccidentType", 1)
                }}
              ></StyledRadioButton>
            </StyledRadioButtonWrapperInner>
            <p>I hit someone</p>
          </StyledRadioButtonWrapper>
          <StyledRadioButtonWrapper>
            <StyledRadioButtonWrapperInner>
              <StyledRadioButton
                type={"radio"}
                name={"AccidentType"}
                onClick={(e) => {
                  handleFormInputChange(e, "AccidentType", 2)
                }}
              ></StyledRadioButton>
            </StyledRadioButtonWrapperInner>
            <p>I hit someone</p>
          </StyledRadioButtonWrapper>
          <StyledRadioButtonWrapper>
            <StyledRadioButtonWrapperInner>
              <StyledRadioButton
                type={"radio"}
                name={"AccidentType"}
                onClick={(e) => {
                  handleFormInputChange(e, "AccidentType", 3)
                }}
              ></StyledRadioButton>
            </StyledRadioButtonWrapperInner>
            <p>I hit someone</p>
          </StyledRadioButtonWrapper>
          <StyledRadioButtonWrapper>
            <StyledRadioButtonWrapperInner>
              <StyledRadioButton
                type={"radio"}
                name={"AccidentType"}
                onClick={(e) => {
                  handleFormInputChange(e, "AccidentType", 4)
                }}
              ></StyledRadioButton>
            </StyledRadioButtonWrapperInner>
            <p>I hit someone</p>
          </StyledRadioButtonWrapper>
        </StyledRadioButtonsContainer>
        <PolicyHeaderDetails>
          <h1>Policy Holder's Details</h1>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "PolicyNumber", e.target.value)
          }} placeholder={"Policy Number"}></PolicyHeadersFormInput>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "Address", e.target.value)
          }} placeholder={"Address"}></PolicyHeadersFormInput>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "Contact", e.target.value)
          }} placeholder={"Contact"}></PolicyHeadersFormInput>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "LicenseNo", e.target.value)
          }} placeholder={"Driving License No"}></PolicyHeadersFormInput>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "PolicyHolderLicenseVersion", e.target.value)
          }} placeholder={"License Version No"}></PolicyHeadersFormInput>
          <h1>Policy Holder's Details</h1>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "Name", e.target.value)
          }} placeholder={"Name"}></PolicyHeadersFormInput>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "NonPolicyHolderAddress", e.target.value)
          }} placeholder={"Address"}></PolicyHeadersFormInput>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "NonPolicyHolderContact", e.target.value)
          }} placeholder={"Contact"}></PolicyHeadersFormInput>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "NonPolicyHolderLicenseVersion", e.target.value)
          }} placeholder={"Driving License No"}></PolicyHeadersFormInput>
          <PolicyHeadersFormInput onChange={(e) => {
            handleFormInputChange(e, "DOB", e.target.value)
          }} placeholder={"Date of Birth"}></PolicyHeadersFormInput>
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
            <PolicyHeadersFormInput placeholder={"Rego No"} ></PolicyHeadersFormInput>
            <StyledYesnoActualQuestion>
              <p>Is there any modification done to this vehicle?</p>
              <StyledYesNoButtonGroup>
                <button>Yes</button>
                <button>No</button>
              </StyledYesNoButtonGroup>
            </StyledYesnoActualQuestion>
            <PolicyHeadersFormInput placeholder={"Registered Owner"}></PolicyHeadersFormInput>
            <PolicyHeadersFormInput placeholder={"Address where vehicle is normally parked"}></PolicyHeadersFormInput>
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

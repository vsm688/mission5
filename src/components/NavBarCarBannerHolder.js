import React from "react";
import {
  StyledNavBar,
  StyledNavBarList,
  StyledNavBarListItem,
  StyledNavBarListItemQuestion,
  StyledNavBarTop,
  StyledSignInRegisterButton,

} from "./styles/Navbar.styled";
import { StyledBlueCarImage } from "./styles/BlueCarImage.styled";

const NavBarCarBannerHolder = () => {
  return (
    <>
      <StyledNavBarTop>
        <StyledSignInRegisterButton>Login</StyledSignInRegisterButton>
        <StyledSignInRegisterButton>Register</StyledSignInRegisterButton>
      </StyledNavBarTop>
      <StyledNavBar>
        <StyledNavBarList>
          <StyledNavBarListItem><img src={"svg/turnerslogo.svg"} alt="turners logo"></img></StyledNavBarListItem>
          <StyledNavBarListItem>My Account</StyledNavBarListItem>
          <StyledNavBarListItem>Buy A Car</StyledNavBarListItem>
          <StyledNavBarListItem>Sell A Car</StyledNavBarListItem>
          <StyledNavBarListItem>Auction</StyledNavBarListItem>
          <StyledNavBarListItem>Insurance</StyledNavBarListItem>
          <StyledNavBarListItem>Finance</StyledNavBarListItem>
          <StyledNavBarListItemQuestion><img src={"svg/question.svg"} alt="questionmark icon"></img></StyledNavBarListItemQuestion>
        </StyledNavBarList>
      </StyledNavBar>
      <StyledBlueCarImage>
        <img src={"/images/bmwcar.png"} alt="bmw car"></img>
      </StyledBlueCarImage>
    </>
  );
};

export default NavBarCarBannerHolder;

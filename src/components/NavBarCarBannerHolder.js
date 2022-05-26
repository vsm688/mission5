import React from "react";
import {
  StyledNavBar,
  StyledNavBarList,
  StyledNavBarListItem,
  StyledNavBarListItemQuestion,
  StyledNavBarTop,
  StyledSignInRegisterButton,
  StyledNavBarButton,
  StyledNavBarDropDownMenu,
  StyledNavBarDropDownMenuItem,
} from "./styles/Navbar.styled";


const NavBarCarBannerHolder = () => {
  return (
    <>
      <StyledNavBarTop>
        <StyledSignInRegisterButton>Login</StyledSignInRegisterButton>
        <StyledSignInRegisterButton>Register</StyledSignInRegisterButton>
      </StyledNavBarTop>
      <StyledNavBar>
        <StyledNavBarList>
          <StyledNavBarListItem>
            <img src={"svg/turnerslogo.svg"} alt="turners logo"></img>
          </StyledNavBarListItem>

          <StyledNavBarListItem>
            <StyledNavBarButton>Buy A Car</StyledNavBarButton>
          </StyledNavBarListItem>
          <StyledNavBarListItem>Sell A Car</StyledNavBarListItem>

          <StyledNavBarListItem>Auction</StyledNavBarListItem>

          <StyledNavBarListItem>
            <StyledNavBarButton>Insurance</StyledNavBarButton>
            <StyledNavBarDropDownMenu className={"insurance-items"}>
                <StyledNavBarDropDownMenuItem to = {"/"}>Get A Quote</StyledNavBarDropDownMenuItem>
                <StyledNavBarDropDownMenuItem to = {"/claimform"}>Claim</StyledNavBarDropDownMenuItem>
                <StyledNavBarDropDownMenuItem to = {"/"}>Retrieve A Quote</StyledNavBarDropDownMenuItem>
            </StyledNavBarDropDownMenu>
          </StyledNavBarListItem>
          <StyledNavBarListItem>Finance</StyledNavBarListItem>
          <StyledNavBarListItemQuestion>
            <img src={"svg/question.svg"} alt="questionmark icon"></img>
          </StyledNavBarListItemQuestion>
        </StyledNavBarList>
      </StyledNavBar>
    </>
  );
};

export default NavBarCarBannerHolder;

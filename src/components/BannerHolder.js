import React from "react";
import {
  StyledBannerHolder,
  StyledBannerImg,
  
} from "./styles/BannerHolder.Styled";

const BannerHolder = () => {
  return (
    <StyledBannerHolder>
      <StyledBannerImg>
        <img src={"images/money.png"} alt=" money"></img>
      </StyledBannerImg>{" "}
      <StyledBannerImg>
        <img src={"images/blue.png"} alt=" money"></img>
      </StyledBannerImg>{" "}
      <StyledBannerImg>
        <img src={"images/turnerslot.png"} alt=" money"></img>
      </StyledBannerImg>
    </StyledBannerHolder>
  );
};

export default BannerHolder;

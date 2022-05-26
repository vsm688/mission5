import React from "react";

import { StyledBlueCarImage } from "./styles/BlueCarImage.styled";

const BlueCarBanner = () => {
  return (
    <StyledBlueCarImage>
      <img src={"/images/bmwcar.png"} alt="bmw car"></img>
    </StyledBlueCarImage>
  );
};

export default BlueCarBanner;

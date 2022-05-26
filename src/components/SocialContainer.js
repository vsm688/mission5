import React from 'react'
import { StyledSocialsContainer } from './styles/Navbar.styled'
const SocialContainer = () => {
  return (
    <StyledSocialsContainer>
        <img src={"svg/fb.svg"} alt="facebook link"></img>
        <img src={"svg/linkedin.svg"} alt="linkedin link"></img>
        <img src={"svg/twitter.svg"} alt="twitter link"></img>
    </StyledSocialsContainer>
  )
}

export default SocialContainer
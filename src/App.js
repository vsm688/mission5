import BannerHolder from "./components/BannerHolder";
import BottomButtonGroup from "./components/BottomButtonGroup";
import GlobalStyle from "./global/GlobalStyle";
import NavBarCarBannerHolder from "./components/NavBarCarBannerHolder";
import SocialContainer from "./components/SocialContainer";
function App() {
  return (
    <>
      <NavBarCarBannerHolder></NavBarCarBannerHolder>
      <GlobalStyle></GlobalStyle>
      <BannerHolder></BannerHolder>
      <BottomButtonGroup></BottomButtonGroup>
      <SocialContainer></SocialContainer>
    </>
  );
}

export default App;

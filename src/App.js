import BannerHolder from "./components/BannerHolder";
import BottomButtonGroup from "./components/BottomButtonGroup";
import GlobalStyle from "./global/GlobalStyle";
import NavBarCarBannerHolder from "./components/NavBarCarBannerHolder";
import SocialContainer from "./components/SocialContainer";
import BlueCarBanner from "./components/BlueCarBanner";
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <NavBarCarBannerHolder></NavBarCarBannerHolder>
      <BlueCarBanner></BlueCarBanner>
      <BannerHolder></BannerHolder>
      <BottomButtonGroup></BottomButtonGroup>
      <SocialContainer></SocialContainer>
    </>
  );
}

export default App;

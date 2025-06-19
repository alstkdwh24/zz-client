import Header from "Components/Layout/header/header";
import Main from "Components/Layout/main/main";
import MainBanner from "Components/Layout/mainbanner/MainBanner";
const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <MainBanner></MainBanner>
            <Main></Main>
        </div>
       
    )
}

export default MainPage
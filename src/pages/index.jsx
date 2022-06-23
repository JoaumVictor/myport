import S from "../styles/Home.module.scss";
import Header from "./components/Header/index";
import Introduction from "./components/Introduction/index";
import MyGoals from "./components/MyGoals/index";
import MyProjects from "./components/MyProjects/index";
import Footer from "./components/Footer/index";

export default function Home() {
  return (
    <>
      <Header />
      <div className={S.home}>
        <Introduction />
        <MyGoals />
        <MyProjects />
        <Footer />
      </div>
    </>
  );
}

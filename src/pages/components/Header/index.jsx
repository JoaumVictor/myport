import React from "react";
import S from "./style.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { AiFillProject, AiFillTrophy } from "react-icons/ai";
import { MdConnectWithoutContact, MdDarkMode } from "react-icons/md";

export default function Header() {
  const [hamb, setHamb] = React.useState(false);
  const showHamb = () => setHamb(!hamb);
  return (
    <header className={S.header}>
      <h2>Meu portfólio</h2>
      <button className={S.showHamb} type="button" onClick={showHamb}>
        <GiHamburgerMenu />
      </button>
      <div className={`${S.hamb} ${hamb && S.activate}`}>
        <span>
          <ImProfile />
          <a href="">Sobre mim</a>
        </span>
        <span>
          <AiFillProject />
          <a href="">Meus projetos</a>
        </span>
        <span>
          <AiFillTrophy />
          <a href="">Meus Objetivos</a>
        </span>
        <span>
          <MdConnectWithoutContact />
          <a href="">Contato</a>
        </span>
        <button type="button" className={S.handleTheme}>
          <MdDarkMode />
          <p>Tema</p>
        </button>
      </div>
    </header>
  );
}

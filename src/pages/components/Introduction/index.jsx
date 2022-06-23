import React from "react";
import S from "./style.module.scss";

export default function Introduction() {
  return (
    <div className={S.introduction}>
      <h1 className={S.title}>Victor Dev</h1>
      <p>
        100% dedicado, flamenguista, mestre do capitalismo, sul americano,
        caçador de casadas, otaku, heheboy.
      </p>
    </div>
  );
}

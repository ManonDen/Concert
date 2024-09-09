import Style from "./barreDeRecherche.module.css";
import filtreImg from "../../../assets/icons8-filter-30.png";
import { React, useEffect, useState, useRef } from "react";

function barreRecherche({setBarreRecherche}) {
  return (
    <>
      <input
        type="text"
        placeholder="Rechercher Salle"
        onChange={(e) => setBarreRecherche(e.target.value)}
        className={Style.barreRecherche}
      />
      <img className={Style.filtre} src={filtreImg} alt="filtre"  />
      <div className={Style.filtreMenuDeroulant}></div>
    </>
  );
}



export default barreRecherche;

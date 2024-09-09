import React from "react";
import Styles from './AfficherAvis.module.css'
import Avis from './Avis/Avis.jsx'
import DemanderAvis from "../DemanderAvis/DemanderAvis.jsx";
function AfficherAvis({ salle ,setSalle }) {

  const listeAvis = salle.avis;

  return (
    <>
  <DemanderAvis salle={salle} setSalle={setSalle} />
  <div className={Styles.containerParent}>
    {listeAvis != null && listeAvis.map((avis, index) => <Avis avis={avis} key={index} />)}      
  </div>
  </>
  )
}
export default AfficherAvis


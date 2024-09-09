import React, { useState } from "react";
import Style from './InformationSalle.module.css';
function InformationSalle({ salle }) {

    const adresse = salle.adresse;
    let styles = '';
    if (salle.styles != null) {
        styles = salle.styles.join('-');
    }
    return (
        <div className={Style.info}>
            <p>{adresse.numero + " " + adresse.voie}</p>
            <p>{adresse.codePostal + " " + adresse.ville}</p>
            <p>{styles}</p>
            <p>{"capacite " + salle.capacite}</p>
            {salle.smac != false && <p>smac</p>}
        </div>

    )
}
export default InformationSalle
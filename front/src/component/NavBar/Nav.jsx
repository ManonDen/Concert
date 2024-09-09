import React, { useState, useContext } from "react";
import Style from './Nav.module.css';
import logo from '../../assets/logo.png';
import connexionMobile from '../../assets/icons8-male-user-32.png';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import BarreRecherche from "../accueil/BarreDeRecherche/barreDeRecherche";
import Sign from "./Sign/Sign";
import { ContextJwt } from "../../App"


function Nav({ salle = null, setBarreRecherche = null }) {

    const navigate = useNavigate();
    const contextJwt = useContext(ContextJwt)
    const handleClick = ({ route }) => {
        navigate(`/${route}`);
    };


    function deconnexion(){
        localStorage.removeItem('tokens')
        localStorage.removeItem('admin')
          window.location.reload(false);

    }


    let noteMoyen = 0;
    if (salle != null && salle.avis != null) {
        salle.avis.map((avisUnique) => { noteMoyen += (avisUnique.note / 2) })
        noteMoyen = noteMoyen / salle.avis.length

    }

    return (
        <nav>
            <div className={Style.identification}>
                <img className={Style.logo} src={logo} alt="Logo" onClick={() => handleClick({ route: "" })} />
                <h1 className={Style.nomSite}>Salle de Conserf</h1>
            </div>
            {/* page detail  */}
            {salle != null ?
                <div className={Style.rating}>
                    <h2 className={Style.detailSalle}>{salle.nom}</h2>
                    <Rating className={"rate"} allowFraction transition initialValue={noteMoyen} readonly={true} />
                </div> :
                // page accueil
                setBarreRecherche != null ?
                    <div className={Style.barre}>
                        <BarreRecherche setBarreRecherche={setBarreRecherche} />
                    </div>
                    //page connexion
                    : ""
            }
            <div className={Style.connexion}>
                {contextJwt == null || contextJwt=='undefined' ?
                    <>
                        <Sign className={Style.btnConnexion} />
                        <img className={Style.connexionMobile} src={connexionMobile} alt="Connexion" />
                    </> : <button className={Style.btnConnexion} onClick={()=>{deconnexion()}}>Déconnexion</button>
                }

            </div>
        </nav>
    )
}


export default Nav
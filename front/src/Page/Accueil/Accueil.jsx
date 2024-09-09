import React, { useState, useEffect, useContext } from 'react';
import AffichageFiltre from '../../component/accueil/Filtre/Filtre';
import AffichageSalles from '../../component/accueil/AfficherSalles/AffichageSalles';
import Style from './Accueil.module.css';
import Navbar from '../../component/NavBar/Nav';
import { url } from "../../env";
import { ContextTabStyle } from "../../Context/ContextStyle"



function Accueil() {
    const { UpdateTabStyle } = useContext(ContextTabStyle)

    const [salles, setSalles] = useState([]);
    const [tabStyleFiltrer, setTabstyleFiltrer] = useState([])
    const [tabSalleFiltrer, setTabsalleFiltrer] = useState([])
    const [tabStylesFiltreAffiche, setTabStyle] = useState([])
    const [barreRecherche, setBarreRecherche] = useState("")


    useEffect(() => {
        fetch(`${url}Salles`)
            .then(res => res.json())
            .then(salles => {
                setSalles(salles);
                let stylesArray = [];
                salles.forEach(salle => {
                    salle.styles.forEach(style => {
                        stylesArray.push(style);

                    });
                });
                let uniqueStyles = Array.from(new Set(stylesArray));
                setTabStyle([uniqueStyles.sort()]);
                UpdateTabStyle('styles', [uniqueStyles.sort()])

            });

    }, []);
    
    return (

        <>
            <Navbar setBarreRecherche={setBarreRecherche} />
            <div className={Style.page} >
                {tabStylesFiltreAffiche !== null && <AffichageFiltre tabStyles={tabStylesFiltreAffiche} tabSalleFiltrer={tabSalleFiltrer} stylesFilter={tabStyleFiltrer} setTabStyleFilter={setTabstyleFiltrer} />}
                {salles.length > 0 && <AffichageSalles barreRecherche={barreRecherche} salles={salles} setTabsalleFiltrer={setTabsalleFiltrer} stylesFilter={tabStyleFiltrer} />}
            </div>

        </>
    )
}

export default Accueil;
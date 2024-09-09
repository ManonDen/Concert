import { useState, useEffect } from 'react';
import CreateMap from '../../component/CreateMap/CreateMap';
import InformationSalle from '../../component/pageDetail/InformationSalle/InformationSalle';
import AfficherAvis from '../../component/pageDetail/AfficherAvis/AfficherAvis';
import AfficherConcerts from '../../component/pageDetail/AfficherConcerts/AfficherConcerts';
import { useParams } from 'react-router-dom';
import Style from './PageDetail.module.css'
import Navbar from '../../component/NavBar/Nav';
import { url } from "../../env";


function PageDetail() {

    const { id } = useParams();

    const urlGetById = `${url}Salles/`+id;

    const [salle, setSalle] = useState({});
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        fetch(urlGetById)
            .then(res => res.json())
            .then(salle => {
                setSalle(salle)
                setCoordinates(salle.adresse.localisation.coordinates)
            })
    }, [])
    return (   
        <>
            <Navbar className={Style.navbar}  salle={salle} />

        <div className={Style.pageDetail}>
            <div className={Style.listeConcert}>
            {Object.keys(salle).length > 0 && <AfficherConcerts salle={salle} />}
            </div>
            <div className={Style.avis}>
            {Object.keys(salle).length > 0 && <AfficherAvis salle={salle} setSalle={setSalle} />}
            </div>
            <div className={Style.carteInfo}>
            {coordinates.length > 0 && <CreateMap coordinates={coordinates} />}
            {Object.keys(salle).length > 0 && <InformationSalle salle={salle} className={Style.infoSalle}/>}
            </div>
        </div>
        </>

    )

}

export default PageDetail
import React from 'react';
import Style from './Concert.module.css'
function Concert({concert}){
    let date = new Date(concert.date);
    return(
        <div className={Style.concertContainer}>
            <p>{concert.nom}</p>
            <p>{(date).toLocaleDateString("fr")}</p>
            <p>{concert.placesRestantes} places</p>
        </div>
    )
}
export default Concert
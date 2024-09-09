import React from 'react';
import Style from './AfficherConcerts.module.css'
import Concert from './Concert/Concert';
import FormConcert from './FormConcert/FormConcert';

function AfficherConcerts({salle}){
    const listeConcerts = salle.concerts
    return(
        
        <div className={Style.ContainerListeConcerts}>
        {localStorage.getItem("admin") == "true" && <div className={Style.salles}>
          <FormConcert salle={salle} />
        </div>}
        {listeConcerts!=null && listeConcerts.map((concert,index) => <Concert concert={concert} key={index}/>)}
       </div> 
       )
}

export default AfficherConcerts
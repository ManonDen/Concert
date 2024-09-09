import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Style from './DemangerAvis.module.css'
import 'dayjs/locale/fr'
import dayjs from 'dayjs'

const Stars = ({ salle ,setSalle}) => {
  const [rating, setRating] = useState(100) 

  let newSalle = salle;

  const handleRating = (rate) => {
    setRating(rate)
    if (newSalle.avis != null) {
      newSalle.avis.push({
        "date": dayjs().format(),
        "note": rate * 2
      })
    } else {
      newSalle.avis = [{
        "date": dayjs().format(),
        "note": rate * 2
      }]
    }   
  }

  const envoyerDonner = () => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSalle)
    };

    console.log(options)
    fetch('https://localhost:44314/api/Salles/' + newSalle.id, options)
    .then(rep => {
      if(rep.status == 204)
      {
        setSalle({...newSalle})
      }
    })
    .catch(error => console.error('Erreur :', error));

  }

  return (
    <div className={Style.notation}>
      <>
        <Rating
          onClick={handleRating}
          allowFraction
          transition
          ratingValue={rating} />
      </>
      <button onClick={envoyerDonner} >Valider</button>
    </div>
  )
}

const DemanderAvis = ({ salle,setSalle }) => {
  return (
    <div className={Style.DemanderAvis}>
      <Stars salle={salle} setSalle={setSalle} />
    </div>
  )
}

export default DemanderAvis

import { React, useContext, useState } from "react";
import Modal from 'react-modal';
import Style from './FormConcert.module.css';
import { ContextTabStyle } from '../../../../Context/ContextStyle'
import { ContextJwt } from "../../../../App";
import 'dayjs/locale/fr'
import dayjs from 'dayjs'

function FormConcert({ salle }) {
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { styles } = useContext(ContextTabStyle);
  let newSalle = salle;

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  function recupForm(e) {
    const concert = {
      "nom": e.target.elements.nom.value,
      "placesRestantes": parseInt(e.target.elements.places.value),
      "date": dayjs(e.target.date.value).format()
    }
    if (newSalle.concerts != null) {
      newSalle.concerts.push(concert)
    } else {
      newSalle.concerts = [{ concert }]
    }
    envoyerDonne()
    e.preventDefault()
    closeModal()
  }

  function envoyerDonne() {

    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ContextJwt._currentValue}`
      },
      body: JSON.stringify(newSalle)
    }

    fetch('https://localhost:44314/api/Salles/' + newSalle.id, option)
      .then(res => {
        console.log('Content-Type:', res.headers.get('Content-Type'));
        if (!res.ok) {
          throw new Error(`Erreur HTTP! Statut: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        // Traitement du JSON ici
        console.log(data);
      })
      ;
  }


  return (
    <div className={Style.divAdd}>
      <button className={Style.btnAdd} onClick={openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={Style.modal}
      >
        <div >
          <h2>Ajouter Salle </h2>
          <form onSubmit={recupForm} action='/' method='POST'>
            <div className={Style.divForm}>
              <label htmlFor="nom">Nom</label>
              <input className={Style.inputForm} id="nom" type="text" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="places">Nombre de place</label>
              <input className={Style.inputForm} id="places" type="number" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="date">Date du concert</label>
              <input className={Style.inputForm} id="date" type="date" />
            </div>
            <input className={Style.submit} type='submit'></input>
          </form>
        </div>

        <button onClick={closeModal}>X</button>
      </Modal>
    </div>


  );
}

export default FormConcert;
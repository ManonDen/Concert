import { React, useContext, useState } from "react";
import Modal from 'react-modal';
import Style from './FormCrud.module.css';
import { ContextTabStyle } from '../../../../Context/ContextStyle'
import { ContextJwt } from "../../../../App";
function FormCrud() {
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { styles } = useContext(ContextTabStyle);
  let salle;

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  function recupForm(e) {
    salle = {
      "id": Math.floor(Math.random() * (Math.floor(1000000) - Math.ceil(1) + 1)),
      "nom": e.target.elements.nom.value,

      "adresse": {
        "numero": parseInt(e.target.elements.numero.value),
        "voie": e.target.elements.voie.value,
        "codePostal": parseInt(e.target.elements.codePostal.value),
        "ville": e.target.elements.ville.value,
        "localisation": {
          "type": "aa",
          "coordinates": [2020.22, 12221.222]
        }
      },
      "capacite": parseInt(e.target.elements.capacite.value),
      "smac": e.target.elements.smac.checked,
      "styles": Array.from(e.target.elements.style.options)
        .filter(option => option.selected)
        .map(option => option.value)
    };

    envoyerDonne()
    e.preventDefault()
    closeModal();
  }
const chemin = "https://localhost:44314/api/Salles"
  function envoyerDonne() {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ContextJwt._currentValue}`
      },
      body: JSON.stringify(salle)
    }
    console.log(option)
    fetch(chemin, option)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP! Statut: ${res.status}`);
        }
        return res.json();
      })
      .then(users => {
        console.log(users);
      })
      .catch(error => {
        console.error('Erreur lors de la requête fetch:', error);
      });



  }
  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedStyle(...selectedStyle, event.target.selectedOptions.value);
    console.log(selectedStyle)
  };

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
              <label htmlFor="numero">Numéro de voie</label>
              <input className={Style.inputForm} id="numero" type="number" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="voie">nom de voie</label>
              <input className={Style.inputForm} id="voie" type="text" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="codePostal">Code postal </label>
              <input className={Style.inputForm} id="codePostal" type="text" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="ville">Ville</label>
              <input className={Style.inputForm} id="ville" type="text" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="capacite">capacite</label>
              <input className={Style.inputForm} id="capacite" type="number" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="smac">Smac</label>
              <input className={Style.inputForm} id="smac" type="checkbox" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="style">Selectionnez les styles</label>
              <select name="style" id="style" multiple value={selectedStyle} onChange={handleSelectChange}>
                {styles[0].map((style, index) => {
                  return <option key={index} value={style}>{style}</option>
                })}
              </select>
            </div>
            <input className={Style.submit} type='submit'></input>
          </form>
        </div>

        <button onClick={closeModal}>X</button>
      </Modal>
    </div>


  );
}

export default FormCrud;
import React,{useState} from 'react';

import Modal from 'react-modal';
import Style from './Sign.module.css';
import Connexion from './Connexion/Connexion';
import Inscription from './inscription/inscription';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Sign() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [bool, setBool] = useState(true);
  const [varSign, setVarSign] = useState("Inscription");
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  
  function changerSign(){
    if(bool){
        setBool(false);
        setVarSign("Connexion");
    }
    else{
        setBool(true);
        setVarSign("Inscription");
    }
  }
  return (
    <div >
      <button className={Style.btnConnexion} onClick={openModal}>Connexion</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={Style.modal}
        ariaHideApp={false}
      >  
         {bool?<Connexion setIsOpen={setIsOpen}/>:<Inscription setIsOpen={setIsOpen} changerSign={changerSign}/>}
        <button className={Style.btnConnexion} onClick={changerSign}>{varSign}</button>

        <button className={Style.btnClose} onClick={closeModal}>X</button>
      </Modal>
    </div>
  );
}


export default Sign
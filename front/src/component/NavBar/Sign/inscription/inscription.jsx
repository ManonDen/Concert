import React from 'react';
import Style from '../Connexion/Connexion.module.css';

function inscription({ setIsOpen,changerSign }) {
    let user = { "Email": "", "Password": "" };
    function recupForm(e) {
        if (e.target[1].value === e.target[2].value) {
            user["Email"] = e.target[0].value;
            user["Password"] = e.target[1].value;
            inscriptionRequest();
            setIsOpen(false);
            changerSign()
        }



        e.preventDefault()
    }
    function inscriptionRequest() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        fetch("https://localhost:44314/api/User", options)
            .then(res => res.json())
            .then(users => {
                localStorage.setItem("tokens", users.token)
                console.log(localStorage.getItem("tokens"));
            });


    }


    return (
        <div >

            <h2>Inscription </h2>
            <form onSubmit= { recupForm } action='/' method='POST'>
                <div className={Style.divForm}>
                    <label htmlFor="mail">Mail</label>
                    <input className={Style.inputForm} id="mail" type="text" />
                </div>
                <div className={Style.divForm}>
                    <label htmlFor="motDePasse">Mot de passe</label>
                    <input className={Style.inputForm} id="motDePasse" type="password" />
                </div>
                <div className={Style.divForm}>
                    <label htmlFor="confirmerMotDePasse">confirmer mot de passe</label>
                    <input className={Style.inputForm} id="confirmerMotDePasse" type="password" />
                </div>
                <input className={Style.submit} type='submit'></input>
            </form>


        </div>
    );
}
export default inscription
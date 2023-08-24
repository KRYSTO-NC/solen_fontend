import React, { useState } from "react";
import { Link } from "react-router-dom";
import './forgotPassword.css'
function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { email } = formData;

  return (
    <div className="container-login ">
      <div className="background-image"></div>
      <div className="container forgot-password-container">
        <h1>Récupération de votre mot de passe</h1>
        <p>
          La page de récupération de mot de passe est conçue pour vous aider si
          vous avez oublié votre mot de passe ou si vous avez besoin de le
          réinitialiser. En fournissant simplement votre adresse e-mail associée
          à votre compte, un lien vous sera envoyé pour vous permettre de créer
          un nouveau mot de passe en toute sécurité. Cette fonctionnalité assure
          que vous pouvez toujours accéder à votre compte, même si vous ne vous
          souvenez plus de votre mot de passe actuel.
        </p>

        <div className="form-login-container">
          <section className="form">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  type="mail"
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Entrer votre email"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-block">Se connecter</button>
              </div>
            </form>
            <div className="forgot-password">
              <Link className="forgot-password" to={"/login"}>
                Retour a la page de connection
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

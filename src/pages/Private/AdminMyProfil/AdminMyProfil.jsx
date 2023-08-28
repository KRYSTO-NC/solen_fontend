import React, { useEffect } from "react";
import DashScreen from "../../../components/shared/DashScreen/DashScreen";
import { useDispatch, useSelector } from "react-redux";
import { getProfil } from "../../../features/user/userSlice";
import Spinner from "../../../components/shared/spinner/Spinner";
import { toast } from "react-toastify";
import './AdminMyProfil.css'
function AdminMyProfil() {
  const dispatch = useDispatch();

  const { profil, isLoading, isError, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getProfil());
  }, [dispatch, isError, message]);

  console.log(profil);
  if (!profil.data || isLoading) {
    return <Spinner />;
  }
  return (
    <DashScreen>
      <div className="container">

      <section className="heading">
        <h1>Bonjour, {profil.data.username} !</h1>
        <p>
          Gérez vos informations personnelles et sécurisez votre compte ici.
          Vous pouvez ajouter ou modifier vos coordonnées, et changer votre mot
          de passe pour assurer la sécurité de votre profil.{" "}
        </p>
      </section>
      <section className="parameters-container">
        <div className="parameters-actions">

        <div>
          <button className=" btn btn-block">
            Modifier mes informations de contacts
          </button>
        </div>
        <div>
          <button className=" btn btn-block">
            Changer mon nom d'uttilisateur
          </button>
        </div>

        <div>
          <button className=" btn btn-block btn-danger">
            Changer votre email
          </button>
        </div>
        <div>
          <button className=" btn btn-block btn-danger">
            Changer votre mot de passe
          </button>
        </div>
        </div>
        <div className="parameters-review">
            <h2>Votre nom d'utilisateur :<span>{profil.data.username}</span></h2>
            <h2>Votre Email : <span>{profil.data.email}</span></h2>
            <h2>Inscrit depuis le : <span>{new Date(profil.data.createdAt).toLocaleDateString()}</span></h2>
            <h2 className="parameters-review-title">Vos informations de contacts</h2>
            {profil.data.contact ? "" : <button className="btn btn-sm">Enregistrer vos informations de contacts</button>}
        </div>
      </section>
      </div>
    </DashScreen>
  );
}

export default AdminMyProfil;

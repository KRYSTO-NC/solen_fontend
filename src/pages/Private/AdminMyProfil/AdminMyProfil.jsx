import React, { useEffect } from "react";
import DashScreen from "../../../components/shared/DashScreen/DashScreen";
import { useDispatch, useSelector } from "react-redux";
import { getProfil } from "../../../features/user/userSlice";
import Spinner from "../../../components/shared/spinner/Spinner";
import { toast } from "react-toastify";

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
      <section className="heading">
        <h1>Bonjour, {profil.data.username} !</h1>
        <p>
          Gérez vos informations personnelles et sécurisez votre compte ici.
          Vous pouvez ajouter ou modifier vos coordonnées, et changer votre mot
          de passe pour assurer la sécurité de votre profil.{" "}
        </p>
      </section>
    </DashScreen>
  );
}

export default AdminMyProfil;

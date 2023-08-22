import React, { useEffect } from "react";
import DashScreen from "../../../components/shared/DashScreen/DashScreen";
import { getUsers } from "../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../../components/shared/spinner/Spinner";

function AdminUsers() {
  const dispatch = useDispatch();

  const { users, isLoading, isError, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getUsers());
  }, [dispatch, isError, message]);

  console.log(users);
  if (!users.data || isLoading) {
    return <Spinner />;
  }
  return (
    <DashScreen>
        <section className="heading">
            <h1>Gestion des Utilisateurs de l'Application Solen</h1>
            <p>La collaboration et le contrôle commencent par une gestion efficace des utilisateurs. Ici, vous pouvez ajouter, modifier, supprimer et attribuer des rôles aux utilisateurs de l'application Solen. Que vous cherchiez à donner accès à un nouveau membre de l'équipe, à ajuster les permissions ou à supprimer un accès existant, cette section vous offre les outils nécessaires pour personnaliser l'accès et les responsabilités au sein de l'application. Assurez-vous que chaque utilisateur dispose des bonnes permissions pour contribuer avec succès à vos projets.</p>
        </section>
    </DashScreen>
  );
}

export default AdminUsers;

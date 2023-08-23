import React, { useEffect } from 'react'
import DashScreen from '../../../components/shared/DashScreen/DashScreen'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getInterventions } from '../../../features/intervention/interventionSlice';
import Spinner from '../../../components/shared/spinner/Spinner';

function AdminInterventions() {



  const dispatch = useDispatch();

  const { interventions, isLoading, isError, message } = useSelector(
    (state) => state.intervention
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getInterventions());
  }, [dispatch, isError, message]);

  console.log(interventions);
  if (!interventions.data || isLoading) {
    return <Spinner />;
  }
  return (
    <DashScreen>
      
      <section className="heading">
            <h1>Gestion des Interventions</h1>
            <p>La gestion efficace des interventions est au cœur d'un service fiable et réactif. Dans cette section, vous pouvez planifier, suivre et gérer toutes vos interventions, qu'il s'agisse de réparations d'urgence, de maintenances régulières ou d'installations spécifiques. Assurez une réponse rapide et une résolution efficace en ayant toutes les informations dont vous avez besoin à portée de main. La réussite de chaque intervention commence ici.</p>
        </section>
     <div>
      TODO : 
      <ul>
        <li>- Créer une nouvelle demande d'intervention</li>
        <li>- Filtrer les interventions par date</li>
        <li>- filtrer les  interventions par communes</li>
      </ul>
     </div>
    </DashScreen>
  )
}

export default AdminInterventions
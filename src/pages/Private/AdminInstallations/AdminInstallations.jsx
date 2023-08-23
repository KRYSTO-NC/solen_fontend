import React, { useEffect } from 'react'
import DashScreen from '../../../components/shared/DashScreen/DashScreen'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getInstallations } from '../../../features/installation/installationSlice';
import Spinner from '../../../components/shared/spinner/Spinner';

function AdminInstallations() {

  const dispatch = useDispatch();

  const { installations, isLoading, isError, message } = useSelector(
    (state) => state.installation
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getInstallations());
  }, [dispatch, isError, message]);

  console.log(installations);
  if (!installations.data || isLoading) {
    return <Spinner />;
  }
  return (
    <DashScreen>
         <section className="heading">
            <h1>Gestion des Installations</h1>
            <p>La mise en place réussie d'une installation commence par une gestion minutieuse. Dans cette section, vous pouvez organiser, planifier et superviser toutes vos installations.</p>
        </section>
        
  </DashScreen>
  )
}

export default AdminInstallations
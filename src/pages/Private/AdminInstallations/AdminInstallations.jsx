import React, { useEffect } from 'react'
import DashScreen from '../../../components/shared/DashScreen/DashScreen'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getInstallations } from '../../../features/installation/installationSlice';
import Spinner from '../../../components/shared/spinner/Spinner';
import InstallationContainerCard from '../../../components/installation/InstallationContainerCards';

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
      <div className="container">
        <InstallationContainerCard installations={installations.data}/>
      </div>
  </DashScreen>
  )
}

export default AdminInstallations
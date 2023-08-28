import React, { useEffect } from 'react'
import DashScreen from '../../../components/shared/DashScreen/DashScreen'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getCompagnies } from '../../../features/compagny/compagnySlice';
import Spinner from '../../../components/shared/spinner/Spinner';
import CompagnyCardContainer from '../../../components/compagny/CompagnyCardContainer';

function AdminCompagnies() {


  const dispatch = useDispatch();

  const { compagnies, isLoading, isError, message } = useSelector(
    (state) => state.compagny
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getCompagnies());
  }, [dispatch, isError, message]);

  console.log(compagnies);
  if (!compagnies.data || isLoading) {
    return <Spinner />;
  }
  return (
    <DashScreen>
      <div className="container">

         <section className="heading">
            <h1>Gestion des Organisations</h1>
     
        </section>
        <CompagnyCardContainer compagny={compagnies.data}/>
      </div>
  </DashScreen>
  )
}

export default AdminCompagnies
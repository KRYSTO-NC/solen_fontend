import React, { useEffect } from 'react'
import DashScreen from '../../../components/shared/DashScreen/DashScreen'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../components/shared/spinner/Spinner';
import { getContacts } from '../../../features/contact/contactSlice';
import { toast } from 'react-toastify';
import ContactContainerCard from '../../../components/contact/ContactContainerCard';

function AdminContacts() {


  const dispatch = useDispatch();

  const { contacts, isLoading, isError, message } = useSelector(
    (state) => state.contact
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getContacts());
  }, [dispatch, isError, message]);

  console.log(contacts);
  if (!contacts.data || isLoading) {
    return <Spinner />;
  }
  return (
    <DashScreen>
      <section className="heading">
            <h1>Gestion des contacts</h1>
        </section>
        {/* <UserContainerCard users={users.data} /> */}
        <ContactContainerCard contacts={contacts.data} />
  </DashScreen>
  )
}

export default AdminContacts
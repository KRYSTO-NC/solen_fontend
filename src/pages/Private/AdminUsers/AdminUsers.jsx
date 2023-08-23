import React, { useEffect } from 'react'
import DashScreen from '../../../components/shared/DashScreen/DashScreen'
import { getUsers } from '../../../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from '../../../components/shared/spinner/Spinner'
import SearchBar from '../../../components/shared/SearchBar/SearchBar'
import UserContainerCard from '../../../components/User/UserContainerCard'

function AdminUsers() {
  const dispatch = useDispatch()

  const { users, isLoading, isError, message } = useSelector(
    (state) => state.user,
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(getUsers())
  }, [dispatch, isError, message])

  console.log(users)
  if (!users.data || isLoading) {
    return <Spinner />
  }
  return (
    <DashScreen>
      <section className="heading">
        <h1>Gestion des Utilisateurs de l'Application Solen</h1>
      </section>

      <UserContainerCard users={users.data} />
    </DashScreen>
  )
}

export default AdminUsers

import { Outlet, Navigate } from 'react-router-dom';



function ProtectedRoute() {
  const userRole = JSON.parse(localStorage.getItem('userRole'));

  if (userRole !== 'admin' && userRole !== 'user' && userRole !== 'superAdmin') {
    return <Navigate to={'/login'} />;
  }

  if (userRole === 'admin') {
    return (
      <>
        <Outlet />
      </>
    );
  }
 
  if (userRole === 'technique') {
    return (
      <>
       

        <Outlet />
      </>
    );
  }

  if (userRole === 'Commercial') {
    return (
      <>
       

        <Outlet />
      </>
    );
  }

  //user

  return( 
  <>
    

  <Outlet />
  </>
  );
}


export default ProtectedRoute
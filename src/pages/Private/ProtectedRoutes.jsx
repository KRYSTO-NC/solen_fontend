import { Outlet, Navigate } from 'react-router-dom';



function ProtectedRoute() {
  const userRole = JSON.parse(localStorage.getItem('userRole'));

  // Rediriger si le rôle de l'utilisateur n'est pas défini ou invalide
  if (!userRole || !['admin', 'user', 'superAdmin', 'technique', 'Commercial'].includes(userRole)) {
    return <Navigate to={'/login'} />;
  }

  // Routes pour différents rôles
  if (userRole === 'admin') {
    return <Outlet />;
  }

  if (userRole === 'technique') {
    return <Outlet />;
  }

  if (userRole === 'Commercial') {
    return <Outlet />;
  }

  // Route par défaut pour les utilisateurs
  return <Outlet />;
}

export default ProtectedRoute;



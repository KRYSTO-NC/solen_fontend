import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import ProtectedRoute from './pages/Private/ProtectedRoutes';
import ScrollToTop from './components/shared/ScrollToTop';
import Login from './pages/Login/Login';
import AdminHome from './pages/Private/AminHome/AdminHome';
import AdminUsers from './pages/Private/AdminUsers/AdminUsers';
import AdminMyProfil from './pages/Private/AdminMyProfil/AdminMyProfil';
import AdminParametres from './pages/Private/AdminParametres/AdminParametres';
import AdminInstallations from './pages/Private/AdminInstallations/AdminInstallations';
import AdminContacts from './pages/Private/AdminContacts/AdminContacts';
import AdminCompagnies from './pages/Private/AdminCompagnies/AdminCompagnies';
import AdminInterventions from './pages/Private/AdminInterventions/AdminInterventions';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div>
         
          <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            <Route path="/user" element={<ProtectedRoute />}>
              {/* Routes accessible only to users here */}
            </Route>
            <Route path="/technique" element={<ProtectedRoute />}>
              {/* Routes accessible only to users here */}
            </Route>
            <Route path="/admin" element={<ProtectedRoute />}>
              {/* Routes accessible only to users here */}
            <Route path="/admin/home" element={<AdminHome/>} />
            <Route path="/admin/users" element={<AdminUsers/>} />
            <Route path="/admin/profil" element={<AdminMyProfil/>} />
            <Route path="/admin/parametres" element={<AdminParametres/>} />
            <Route path="/admin/installations" element={<AdminInstallations/>} />
            <Route path="/admin/interventions" element={<AdminInterventions/>} />
            <Route path="/admin/contacts" element={<AdminContacts/>} />
            <Route path="/admin/entreprises" element={<AdminCompagnies/>} />

            </Route>
          </Routes>
        </div>
        
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

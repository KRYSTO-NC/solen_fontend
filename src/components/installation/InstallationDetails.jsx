import { IoIosArrowBack } from "react-icons/io";
import "./installation.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getContact } from "../../features/contact/contactSlice";

function InstallationDetails({ installation, onBack }) {
  const dispatch = useDispatch();

  const { contact, isLoading, isError, message } = useSelector(
    (state) => state.contact
  );
 
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getContact(installation.benneficiaire.contact));
  }, [dispatch, isError, message]);
  console.log(installation.benneficiaire.contact);

  return (
    <div className="installation-details">
      <button className="btn btn-sm btn-danger" onClick={onBack}>
        <IoIosArrowBack /> Retour
      </button>
      <p>
        date demande EEC :
        {new Date(installation.dateDemandeEEC).toLocaleDateString()}
      </p>
      <p>
        date prévisionel de mise en service:
        {new Date(
          installation.datePrevisionelMiseEnService
        ).toLocaleDateString()}
      </p>
      <p>Concessionnaire : {installation.concessionaire}</p>

      <div className="section installation-benneficiaire">
        <h3>Benneficiaire de de l'installations</h3>
        <p>
   
          numéro de client EEC :
          <span>{installation.benneficiaire.numClientEEC} </span>
        </p>
      </div>
      <div className="section installation-benneficiaire">
        <h3>Demmandeur de de l'installations</h3>
        <p>
        
          numéro de client EEC :{" "}
          <span>{installation.benneficiaire.numClientEEC} </span>
        </p>
      </div>
      {/* <h2>{contact.firstname} {contact.lastname}</h2>
        <h2>{contact.email}</h2>
        <h2>{contact.phone}</h2>
        <h2>{contact.phone2}</h2> */}
    </div>
  );
}

export default InstallationDetails;

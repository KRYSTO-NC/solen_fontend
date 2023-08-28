import { IoIosArrowBack } from "react-icons/io";
import "./installation.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"; // Importez useState
import { toast } from "react-toastify";
import { getContact } from "../../features/contact/contactSlice";
import Tag from "../shared/Tag/Tag";
import Map from "../shared/Map/Map";

function InstallationDetails({ installation, onBack }) {
  const dispatch = useDispatch();
  const [benneficiareContact, setBenneficiaireContact] = useState(null); // État local pour le premier contact
  const [demandeurContact, setDemandeurContact] = useState(null); // État local pour le deuxième contact

  const { contact, isLoading, isError, message } = useSelector(
    (state) => state.contact
  );

  const getBackgroundColorByStatus = (role) => {
    switch (role) {
      case "Etude":
        return "#AEDFF7";
      case "EnService":
        return "#FFF3A3";
      case "AttenteAutorisation":
        return "#98FFC9";
      case "Projet":
        return "#FFCCE5";
      case "SansSuite":
        return "#FFCCE5";
      case "AInstaller":
        return "#FFCCE5";
      case "RetardInstallation":
        return "#FFCCE5";
      default:
        return "#E0E0E0";
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Premier appel pour obtenir le premier contact
    dispatch(getContact(installation.benneficiaire.contact)).then(
      (response) => {
        setBenneficiaireContact(response.payload); // Mettez à jour l'état local pour le premier contact
      }
    );

    // Deuxième appel pour obtenir le deuxième contact
    dispatch(getContact(installation.demandeur.contact)).then((response) => {
      setDemandeurContact(response.payload); // Mettez à jour l'état local pour le deuxième contact
    });
  }, [dispatch, isError, message]);

  console.log(benneficiareContact);
  console.log(demandeurContact);

  return (
    <div className="installation-details">
      <button className="btn btn-sm btn-danger" onClick={onBack}>
        <IoIosArrowBack /> Retour
      </button>

      <h2 className="title-section">Informations générales</h2>
      <div className="detail-installation-header">
        <div>
          <Tag
            txt={installation.status}
            backgroundColor={getBackgroundColorByStatus(installation.status)}
          />
        </div>
        <div>
          <p>concessionaire : {installation.concessionaire}</p>
        </div>
      </div>
      <div className="section-installation-contacts">
        <div>
          <h3>Bénéficiaire de l'installation</h3>
          <p>
            {benneficiareContact?.data.title} {demandeurContact?.data.lastname}{" "}
            {benneficiareContact?.data.firstname}
          </p>
          <p>{benneficiareContact?.data.phone}</p>
          <p>{benneficiareContact?.data.location?.formattedAddress}</p>
        </div>
        <div>
          <h3>Demandeur de l'installation</h3>
          <p>
            {demandeurContact?.data.title} {demandeurContact?.data.lastname}{" "}
            {demandeurContact?.data.firstname}
          </p>
          <p>{demandeurContact?.data.phone}</p>
          <p>{demandeurContact?.data.location?.formattedAddress}</p>
        </div>
      </div>
      <div className="emplacement-installation">
       <h4>Emplacement de l'installation</h4>
      <Map coordinates={installation.location.coordinates} formattedAddress={installation.location.formattedAddress}/>
      </div>
      <h2 className="title-section">Informations Techniques</h2>
    </div>
  );
}

export default InstallationDetails;

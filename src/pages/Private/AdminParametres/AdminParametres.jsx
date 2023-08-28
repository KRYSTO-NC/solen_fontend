import React, { useState } from "react";
import DashScreen from "../../../components/shared/DashScreen/DashScreen";
import OriginesClients from "./CustomerOrigines";
import Communes from "./Communes";
import Forfaits from "./Forfaits";
import TypesInstallations from "./TypeInstallations";

import "./AdminParameters.css";

function AdminParametres() {
  // Utiliser l'état local pour suivre le composant actuellement sélectionné
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Fonction pour gérer le clic sur un élément de la liste
  const handleClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <DashScreen>
      <div className="parameters-screen">
        <aside className="parameters-aside">
          <ul>
            <li onClick={() => handleClick("OriginesClients")}>Origines clients</li>
            <li onClick={() => handleClick("Communes")}>Communes</li>
            <li onClick={() => handleClick("Forfaits")}>Forfaits</li>
            <li onClick={() => handleClick("TypesInstallations")}>Types installations</li>
          </ul>
        </aside>

       
        {/* Afficher le composant associé en fonction de l'état sélectionné */}
        <section className="content">
          {selectedComponent === "OriginesClients" && <OriginesClients />}
          {selectedComponent === "Communes" && <Communes />}
          {selectedComponent === "Forfaits" && <Forfaits />}
          {selectedComponent === "TypesInstallations" && <TypesInstallations />}
        </section>
      </div>
    </DashScreen>
  );
}

export default AdminParametres;

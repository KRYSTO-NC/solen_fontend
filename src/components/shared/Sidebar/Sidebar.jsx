import { Link, NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";

import { FaBuilding, FaCog, FaHome, FaPhone, FaSolarPanel, FaUser, FaUsers, FaWrench } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
function AdminSideBar() {
  const location = useLocation();
  return (
    <adide className="admin-sidebar">
      <div className="round-container">
        <div className="round"></div>
        <div className="round"></div>
        <div className="round"></div>
      </div>

      <ul>
        <li>
          <Link
            to={"/admin/home"}
            className={location.pathname === "/admin/home" ? "activeLink" : ""}
          >
            <FaHome className="sidebarIcon" />
          </Link>
        </li>
        <li>
          <Link
            to={"/admin/users"}
            className={location.pathname === "/admin/users" ? "activeLink" : ""}
          >
            <FaUsers className="sidebarIcon" />
          </Link>
        </li>
        <li>
          <Link
            to={"/admin/entreprises"}
            className={location.pathname === "/admin/compagnies" ? "activeLink" : ""}
          >
            <FaBuilding className="sidebarIcon" />
          </Link>
        </li>
        <li>
          <Link
            to={"/admin/contacts"}
            className={location.pathname === "/admin/contacts" ? "activeLink" : ""}
          >
            <FaPhone className="sidebarIcon" />
          </Link>
        </li>
        <li>
          <Link
            to={"/admin/installations"}
            className={
              location.pathname === "/admin/installations" ? "activeLink" : ""
            }
          >
            <FaSolarPanel className="sidebarIcon" />
          </Link>
        </li>
        <li>
          <Link
            to={"/admin/interventions"}
            className={
              location.pathname === "/admin/interventions" ? "activeLink" : ""
            }
          >
            <FaWrench className="sidebarIcon" />
          </Link>
        </li>
        <li>
          <Link
            to={"/admin/parametres"}
            className={
              location.pathname === "/admin/parametres" ? "activeLink" : ""
            }
          >
            <FaCog className="sidebarIcon" />
          </Link>
        </li>
        <li>
          <Link
            to={"/admin/profil"}
            className={
              location.pathname === "/admin/profil" ? "activeLink" : ""
            }
          >
            <FaUser className="sidebarIcon" />
          </Link>
        </li>
      </ul>
    </adide>
  );
}

export default AdminSideBar;

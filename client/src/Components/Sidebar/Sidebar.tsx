import React from "react";
import Logo from "../../Assets/Images/logo.png";
import styles from "./style.module.css";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { Create_Route, List_Route, LocalStorageKey, Profile_Route } from "../../Utils/Constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutSlice } from "../../Store/slices/UserSlice";
function SidebarContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (route: string) => {
    navigate(route);
  };
  const handleLogout = () => {
    localStorage.removeItem(LocalStorageKey);
    dispatch(LogoutSlice());
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img src={Logo} alt="" className={styles.logoImg} />
        <div className={styles.logoText}>Form Generator System</div>
      </div>
      <div className={styles.menu}>
        <div className={styles.upperContainer}>
          <SidebarMenu
            name="form"
            color="#229b12"
            size={24}
            label="Create New Form"
            onClick={() => {
              handleNavigate(Create_Route);
            }}
          />
          <SidebarMenu
            name="qr"
            color="#bc14c8"
            size={24}
            label="Form List"
            onClick={() => {
              handleNavigate(List_Route);
            }}
          />
          <SidebarMenu
            name="user"
            color="#f3ca03"
            size={24}
            label="Profile"
            onClick={() => {
              handleNavigate(Profile_Route);
            }}
          />
        </div>
        <div className={styles.lowerContainer}>
          <SidebarMenu name="logOut" color="#c8141d" size={24} label="Logout" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}

export default SidebarContainer;

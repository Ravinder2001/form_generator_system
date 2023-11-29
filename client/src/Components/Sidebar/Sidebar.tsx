import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Images/logo.png";
import styles from "./style.module.css";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { Form_Generator_Route, List_Route, LocalStorageKey, Profile_Route } from "../../Utils/Constant";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutSlice } from "../../Store/slices/UserSlice";
function SidebarContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [selected, setSelected] = useState(-1);

  const handleNavigate = (route: string) => {
    navigate(route);
  };
  const handleLogout = () => {
    localStorage.removeItem(LocalStorageKey);
    dispatch(LogoutSlice());
  };

  useEffect(() => {
    if (location.pathname.includes("generator")) {
      setSelected(0);
    } else if (location.pathname.includes("list")) {
      setSelected(1);
    } else if (location.pathname.includes("profile")) {
      setSelected(2);
    }
  }, [location]);
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
            label="Generate New Form"
            onClick={() => {
              handleNavigate(Form_Generator_Route);
            }}
            selected={selected == 0}
          />
          <SidebarMenu
            name="qr"
            color="#bc14c8"
            size={24}
            label="Form List"
            onClick={() => {
              handleNavigate(List_Route);
            }}
            selected={selected == 1}
          />
          <SidebarMenu
            name="user"
            color="#f3ca03"
            size={24}
            label="Profile"
            onClick={() => {
              handleNavigate(Profile_Route);
            }}
            selected={selected == 2}
          />
        </div>
        <div className={styles.lowerContainer}>
          <SidebarMenu name="logOut" color="#c8141d" size={24} label="Logout" onClick={handleLogout} selected={false} />
        </div>
      </div>
    </div>
  );
}

export default SidebarContainer;

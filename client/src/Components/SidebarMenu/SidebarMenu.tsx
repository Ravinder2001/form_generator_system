import React from "react";
import styles from "./style.module.css";
import LucideIcons from "../../Assets/Icons/Icons";

type props = {
  name: string;
  color: string;
  size: number;
  label: string;
  onClick: () => void;
  selected: boolean;
};
function SidebarMenu(props: props) {
  return (
    <div className={`${styles.container} ${props.selected && styles.selected}`} onClick={props.onClick}>
      <div className={styles.icon}>
        <LucideIcons name={props.name} color={props.color} size={props.size} />
      </div>
      <div className={styles.label}>{props.label}</div>
    </div>
  );
}

export default SidebarMenu;

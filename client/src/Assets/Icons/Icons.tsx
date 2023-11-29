import React from "react";
import { EyeOff, Eye, FilePlus, QrCode, LogOut, User, GanttChartSquare, Trash2,ScrollText } from "lucide-react";

type Props = {
  name: string;
  size?: number;
  color?: string;
};

const LucideIcons = (props: Props) => {
  switch (props.name) {
    case "hide": {
      return <EyeOff size={props.size} color={props.color} />;
    }
    case "unhide": {
      return <Eye size={props.size} color={props.color} />;
    }
    case "form": {
      return <FilePlus size={props.size} color={props.color} />;
    }
    case "qr": {
      return <QrCode size={props.size} color={props.color} />;
    }
    case "logOut": {
      return <LogOut size={props.size} color={props.color} />;
    }
    case "user": {
      return <User size={props.size} color={props.color} />;
    }
    case "view": {
      return <GanttChartSquare size={props.size} color={props.color} />;
    }
    case "delete": {
      return <Trash2 size={props.size} color={props.color} />;
    }
    case "list": {
      return <ScrollText size={props.size} color={props.color} />;
    }
    default:
      return null;
  }
};

export default LucideIcons;

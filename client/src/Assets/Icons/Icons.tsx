import React from "react";
import { EyeOff, Eye } from "lucide-react";

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
    default:
      return null;
  }
};

export default LucideIcons;

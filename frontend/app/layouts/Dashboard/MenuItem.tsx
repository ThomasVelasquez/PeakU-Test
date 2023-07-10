import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IMenuItemProps {
  name: string;
  icon: IconDefinition;
  to: {
    pathname: string;
  };
}

export default function MenuItem({ to, icon, name }: IMenuItemProps) {
  return (
    <Link style={{ all: "initial" }} to={{ ...to }}>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <FontAwesomeIcon icon={icon} />
          </ListItemIcon>
          <ListItemText color="primary" primary={name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

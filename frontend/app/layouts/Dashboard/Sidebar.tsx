import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useMediaQuery, useTheme } from "@mui/material";
import MenuList from "./MenuList";

const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(isOpen);
    };

  return (
    <div>
      <button onClick={toggleDrawer(true)}>Open Sidebar</button>
      <Drawer
        variant={matches ? "permanent" : "temporary"}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <MenuList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Sidebar;

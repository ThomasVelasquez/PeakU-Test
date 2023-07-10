import {
  faShoppingCart,
  faDollarSign,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Box, List } from "@mui/material";
import MenuItem from "./MenuItem";

interface IMenuList {
  toggleDrawer: (open: boolean) => void;
}

const menuItems = [
  {
    name: "Consumos",
    icon: faShoppingCart,
    to: {
      pathname: "consumo-tramo",
    },
  },
  {
    name: "Costos",
    icon: faDollarSign,
    to: {
      pathname: "costos-tramo",
    },
  },
  {
    name: "Perdidas",
    icon: faChartLine,
    to: {
      pathname: "perdidas-tramo",
    },
  },
];

export default function MenuList({ toggleDrawer }: IMenuList) {
  return (
    <Box>
      <List>
        {menuItems.map((menu, index) => (
          <MenuItem key={index} {...menu} />
        ))}
      </List>
    </Box>
  );
}

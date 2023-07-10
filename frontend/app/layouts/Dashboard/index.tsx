import React from "react";
import Sidebar from "./Sidebar";
import { Container, Box } from "@mui/material";

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayout) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;

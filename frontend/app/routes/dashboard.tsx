import { Outlet } from "@remix-run/react";
import DashboardLayout from "~/layouts/Dashboard";

export default function DashboardRoute() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

import { redirect } from "@remix-run/node";

export const loader = () => redirect("/dashboard/consumo-tramo");

export default function Component() {
  return null;
}

import NavBar from "../components/NavBar";
import FooterLinks from "../components/FooterLinks";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <NavBar/>
      <Outlet />
      <FooterLinks/>
    </>
  );
}

import { ReactNode } from "react";
import { Navbar } from "../componets/Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">{children}</main>
    </>
  );
};

export default Layout;

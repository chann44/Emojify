import { ReactNode } from "react";
import { Footer } from "../componets/Footer";
import { Navbar } from "../componets/Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

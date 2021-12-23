import { Outlet } from "react-router";
import { Footer } from "../../pages/Footer/Footer";
import { AccountBar } from "../AccountBar/AccountBar";
import { ContainerPage } from "../ContainerPage/ContainerPage";
import { NavBar } from "../NavBar/NavBar";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <NavBar />
        <div className={styles.right_content}>
          <AccountBar />
          <ContainerPage>
            <Outlet />
          </ContainerPage>
        </div>
      </div>
      <Footer />
    </div>
  );
};

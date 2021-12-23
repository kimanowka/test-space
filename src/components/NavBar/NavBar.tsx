import styles from "./NavBar.module.css";
import Logo from "./image/Logo.png";
import { BiMessageAltDetail } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { CustomLink } from "./CustomLink";
export const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <CustomLink
          to="/"
          text="s p a c e w e b"
          image={<img src={Logo} alt="logo" />}
        />
      </div>
      <CustomLink
        to="/posts"
        text="посты"
        image={<BiMessageAltDetail style={{ color: "white" }} />}
      />
      <CustomLink
        to="/account"
        text="аккаунт"
        image={<MdAccountCircle style={{ color: "white" }} />}
      />
    </div>
  );
};

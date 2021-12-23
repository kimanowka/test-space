import { useContext } from "react";
import styles from "./AccountBar.module.css";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
export const AccountBar = () => {
  const { auth, setAuth } = useContext(Context);

  const handleLogOutAccount = () => {
    setAuth(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.account}>
        {auth ? (
          <button
            type="button"
            onClick={handleLogOutAccount}
            className={styles.button}
          >
            Выйти
          </button>
        ) : (
          <Link to="/account" className={styles.link}>
            Войти
          </Link>
        )}
      </div>
    </div>
  );
};

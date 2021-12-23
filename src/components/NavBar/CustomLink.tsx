import styles from "./CustomLink.module.css";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
interface LinkProps {
  image: JSX.Element;
  text: string;
  to: string;
}
export const CustomLink = ({ image, text, to }: LinkProps) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={match ? `${styles.active_link}` : `${styles.wrapper_link}`}
    >
      <div className={styles.image}>{image}</div>
      <span className={styles.text}>{text}</span>
    </Link>
  );
};

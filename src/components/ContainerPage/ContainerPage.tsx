import styles from "./ContainerPage.module.css";
interface ContainerProps {
  children: React.ReactNode;
}
export const ContainerPage = ({ children }: ContainerProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

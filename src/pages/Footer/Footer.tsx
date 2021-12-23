import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contacts}>
        <span> Alexander Tkachenko aka kimanowka</span>
        <span> Все права защищены.</span>
        <span> Лицензия 333</span>
      </div>
      <div className={styles.contacts}>
        <span>+7 (981) 198-73-39 (в Санкт-Петербурге)</span>
        <span>+7 (981) 723-87-99 (в Санкт-Петербурге)</span>
        <span>WhatsApp, Telegram +7 (981) 198-73-39</span>
      </div>
    </div>
  );
};

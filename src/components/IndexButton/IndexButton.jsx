import styles from "./IndexButton.module.css";

export const IndexButton = ({ href, label }) => {
  return (
    <a href={href} className={styles.IndexLink}>
      <button>{label} </button>
    </a>
  );
};

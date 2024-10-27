import styles from "./style.module.scss";

export function TitleComponent(props: { label: string }) {
  return (
    <div className={styles.component}>
      <h2>{props.label}</h2>
      <div className={styles.subLine} />
    </div>
  );
}

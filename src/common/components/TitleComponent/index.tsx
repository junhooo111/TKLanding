import styles from "./style.module.scss";

export function TitleComponent(props: { label: string; sub?: string }) {
  return (
    <div className={styles.component}>
      <h2>{props.label}</h2>
      <div className={styles.subLine} />
      {props.sub !== undefined && <p className={styles.sub}>{props.sub}</p>}
    </div>
  );
}

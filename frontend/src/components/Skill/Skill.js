import styles from "./Skill.module.css";
function Skill({ title, votes }) {
  return (
    <div className={styles.skill}>
      <span>{title} <button type="button" className={styles.button}>{votes}</button></span>
    </div>
  );
}
export default Skill;

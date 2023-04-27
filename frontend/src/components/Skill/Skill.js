import styles from "./Skill.module.css";
function Skill({ skills, grade }) {
  return (
    <div className={styles.skill}>
      <span>{skills} <button type="" className={styles.button}>{grade}</button></span>
    </div>
  );
}
export default Skill;

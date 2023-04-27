import styles from "./Skill.module.css";
function Skill({ skill, grade }) {
  return (
    <div className={styles.skill}>
      <span>{skill} <button type="button" className={styles.button}>{grade}</button></span>
    </div>
  );
}
export default Skill;

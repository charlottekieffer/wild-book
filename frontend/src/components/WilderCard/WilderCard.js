import styles from "./WilderCard.module.css";
import avatar from "../../assets/avatar.png";
import Skill from "../Skill/Skill";

function WilderCard({ name, city, skills, grade }) {
  return (
    <section className={styles.cardrow}>
      <article className={styles.card}>
        <img src={avatar} alt="{name} Profile" />
        <h3>{name}, {city}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Wild Skills</h4>
        <ul>
            {skills.map((skill) => {
              return <li><Skill title={skill.title} votes={skill.votes} /></li>
            })}
            

        </ul>
      </article>
    </section>
  );
}

export default WilderCard;

import { useState, useEffect } from "react";
import axios from "axios";
import WilderCard from "../WilderCard/WilderCard";
import styles from "./Wilders.module.css";

function Wilders() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:5000/api/wilder");
      console.log(wilders.data);
      setWilders(wilders.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <h2>Wilders</h2>
      </div>
      <div className={styles.card}>
      {wilders.map((wilder) => (
        <WilderCard
          key={wilder.id}
          name={wilder.name}
          city={wilder.city}
          skills={wilder.skills}
        />
        
      ))}
      </div>
    </div>
  );
}

export default Wilders;

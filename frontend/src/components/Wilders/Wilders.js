import { useState, useEffect } from "react";
import axios from "axios";
import WilderCard from "../WilderCard/WilderCard";

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
    <>
      <h2>Wilders</h2>
      {wilders.map((wilder) => (
        <WilderCard
          key={wilder.id}
          name={wilder.name}
          city={wilder.city}
          skills={wilder.skills.title}
          grade={wilder.skills.votes}
        />
      ))}
    </>
  );
}

export default Wilders;

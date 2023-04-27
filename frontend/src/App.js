import styles from "./App.css";

import Wilders from "./components/Wilders/Wilders";
import Header from "./components/Header/Header";

function App() {


  return (
    <div>
      <Header />
      <main className={styles.container}>
          <Wilders/>

      </main>
      <footer>
        <div className={styles.container}>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

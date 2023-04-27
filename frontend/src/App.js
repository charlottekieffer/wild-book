import styles from "./App.css";
import Wilders from "./components/Wilders/Wilders";
import Header from "./components/Header/Header";
import AddWilder from "./components/AddWilder/AddWilder";

function App() {


  return (
    <div>
      <Header />
      <main className={styles.container}>
          <Wilders/>

      </main>
      <AddWilder/>
      <footer>
        <div className={styles.container}>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

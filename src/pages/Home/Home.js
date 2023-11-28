import React from "react";
import styles from "./Home.css";

function Home() {
  return (
    <div className={styles.Home}>
      <h1 className={styles.title}>Game of Thrones</h1>
      <p>
        This is the Home page of the Game of Thrones App! Please use the
        navigation bar above to explore.
      </p>
    </div>
  );
}

export default Home;

import styles from "./App.module.css"

import Navbar from "./components/Header/Navbar"

function App() {
 

  return (
    <section className={styles.home}>
      <Navbar/>
    </section>
  )
}

export default App
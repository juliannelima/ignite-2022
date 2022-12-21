import { Header } from './components/Header';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';

import './global.css';

function App() {

  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />

        <main>main</main>

      </div>


    </div>
  )
}

export default App

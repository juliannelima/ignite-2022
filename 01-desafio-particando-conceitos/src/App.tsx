import { FormTask } from './Components/FormTask';
import { Header } from './Components/Header';

import styles from './App.module.css';

import './global.css';
import { ListTask } from './Components/ListTask';

function App() {
   return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <FormTask />
      </main>
    </>
  )
}

export default App

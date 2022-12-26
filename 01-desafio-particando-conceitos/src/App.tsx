import { FormTask } from './Components/FormTask';
import { Header } from './Components/Header';

import styles from './App.module.css';

import './global.css';

function App() {
   return (
    <>
      <Header />

      <div className={styles.formTask}>
        <FormTask />
      </div>
    </>
  )
}

export default App

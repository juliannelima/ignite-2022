import { Header } from './components/Header';
import { Sidebar } from './components/sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/juliannelima.png',
      name: 'Julianne Lima',
      role: 'Web Developer'
    },
    content: [
      { type:'paragraph', content: 'Fala galeraa 👋'},
      { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-15 21:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/juliannelima.png',
      name: 'Mayk Brito',
      role: 'Web Developer'
    },
    content: [
      { type:'paragraph', content: 'Fala galeraa 👋'},
      { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-01 21:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => 
              <Post 
                key={post.id} 
                author={post.author} 
                content={post.content}
                publichedAt={post.publishedAt}
              />
          )}
        </main>
      </div>
    </div>
  )
}

export default App

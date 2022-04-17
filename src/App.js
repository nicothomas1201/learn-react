import { useState, useEffect } from 'react';
import './App.css';

const GIFS = [
  'https://media4.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e4762sldu9jhaq6dcxvuksmvsrqku7gxdo4q0dcq6z0&rid=giphy.gif&ct=g',
  'https://media0.giphy.com/media/cnbsOTkEJnq0/200w.webp?cid=ecf05e47j0csl1je9018itn72voydw6ws5uuahjit37669tb&rid=200w.webp&ct=g',
]

const DIFERENT_GIFS = [
  'https://media4.giphy.com/media/lqLNp3dJlWihNuhegE/200w.webp?cid=ecf05e47iy8c4g10fges8wepzlujmjb063u1gdvhig4m5szo&rid=200w.webp&ct=g',
  'https://media4.giphy.com/media/GA2Opryocs0tq/giphy.webp?cid=ecf05e47iy8c4g10fges8wepzlujmjb063u1gdvhig4m5szo&rid=giphy.webp&ct=g',
]



function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect( function () {
    console.log('efecto ejecutado')
  })

  return (
    <div className="App">
      <section className='App-content'>
        {
          gifs.map( singleGif => <img src={singleGif} alt=''/>)
        }

        <button onClick={() => setGifs(DIFERENT_GIFS)}>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;

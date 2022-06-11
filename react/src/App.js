import './App.css';
import Header from './components/Header'

const name = "tahsin"
const surname = "sungur"
const isLoggedIn = true

/*
  # KOŞULLU RENDER ETME
  { degisken ? 'olumlu durumda render edilecek veri' : 'olumsuz durumda render edilecek veri' }
  ya da
  { degisken && 'olumlu durumda render edilecek veri'}
  { !degisken && 'olumsuz durumda render edilecek veri'}
*/

function App(){
  return(
    <>
      <h1>
        {isLoggedIn ? `benim adım ${name}, soyadım ${surname}` :`giriş yapmadınız`}
      </h1>
    </>
  )
}

export default App;
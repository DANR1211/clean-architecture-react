import { useEffect, useState } from 'react'
import './App.css'
import { testingService } from './services/testing.service'
import { SnackbarUtilitiesConfigurator } from './utilities'
import { SnackbarProvider } from 'notistack'

function App() {
  const [character, setCharacter] = useState({} as any)

  const fetchCharacter = async () => {
    const min = 1;
    const max = 100;
    const number = Math.floor(Math.random() * (max - min)) + min;
    const { data } = await testingService(number);
    setCharacter(data);
  }
  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
      <main className='container'>
        <h1>Personajes de Rick & Morty</h1>
        <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
          <img src={character.image} alt='Personaje aleatorio de Rick & Morty' />
          <div style={{alignContent: 'center', textAlign: 'left'}}>
            <div>
              <label>Nombre: </label>
              <label>{character.name}</label>
            </div>
            <div>
              <label>Status: </label>
              <label>{character.status}</label>
            </div>
          </div>
        </div>
        <button onClick={fetchCharacter}>Roll</button>
        {/* {JSON.stringify(morty)} */}
      </main>
    </SnackbarProvider>
  )
}

export default App

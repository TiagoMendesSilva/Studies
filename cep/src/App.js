import { useState, useRef } from 'react'


import Search  from '../src/containers/Search'
import Loading  from '../src/containers/Loading'
import Results  from '../src/containers/Results'
import Error  from '../src/containers/Error'


function App() {

  //hooks useState
  // utilizar string no hook useState que descrevem o nome da tela

  const [ nameScreen, setNameScreen] = useState("SEARCH")

  //hook useState para armazenar o resultado da consulta do cep
 
  const [ resultado, setResultado] = useState({})

  // useState para armazenar a mensagem de erro

  const [errorMessage, setErrorMessage] = useState({})

  const ticket =  useRef(1)

  function goTo(nameScreen){
    console.log(`Navigating for screen ${nameScreen}`)
    setNameScreen(nameScreen)
  }
  /*
  Lógica para navegar entre as telas utilizando números
  function handleClick(){
    setNumberScreen((numberScreen + 1) % 4)
  }
  */
  /*
  Passar a função goTo por props para as telas
  */

  return  <div>
      <div className="App">
          <header className='App-header'>
            {nameScreen == "SEARCH" ? <Search navigateTo={goTo} setResultado={setResultado} setErrorMessage={setErrorMessage} ticket={ticket}/> : null}
            {nameScreen == "RESULTS" ? <Results navigateTo={goTo} result={resultado}/> : null}
            {nameScreen == "ERROR" ? <Error navigateTo={goTo} errorMessage={errorMessage}/> : null}
            {nameScreen == "LOADING" ? <Loading navigateTo={goTo} ticket={ticket} /> : null}
          </header>
        
      </div>
  </div>
  
   

}

export default App;

/* <button onClick={goTo}> next </button> */
import { useState, useEffect } from 'react';
import '../../src/Search.css'
import consultarCep from 'cep-promise'
import DataCEP from '../components/DataCEP';

//import background from '../assets/background.png'

/* Criar uma função que restrinja o input somente para receber números. */
function onlyNumbers(str){
  return str.replace(/[^\d]/g,'')
}

function Search(props) {

  const navigateTo = props.navigateTo

  const setResultado = props.setResultado

  const setErrorMessage = props.setErrorMessage

  const ticket = props.ticket

  /* 
  Criar um hook useState para armazenar o valor digitado no input
  */
  const [ cepNumber, setCepNumber ] = useState("");

  const [ cepFavorite, setCepFavorite ] = useState("");

  const [ cepData, setCepData ] = useState({})


  useEffect(() => {
    const storedCep = localStorage.getItem("cepFavorite") || ""
    setCepFavorite(storedCep)
  }, [])

  useEffect(() => {
    if(!cepFavorite){
      return;
    }
    localStorage.setItem("cepFavorite", cepFavorite)
    consultarCep(cepFavorite)
      .then(res => setCepData(res))
    .catch(e => setCepData({"ERRO": e.message}))
  }, [cepFavorite])

  /*
  Criar uma função para passar para os valores(eventos) do input para o onChange

  a propriedade chamada target aponta diretamente para o elemento html do input
  */

  /* 
  propriedade value no input significa que o estado deixa de ser controlado diretamente pelo hook useState, de ser responsável pelo gerenciamento
  E o valor da propriedade value que será anotado no estado
  */
  function handleChange( event ){
    const value = event.target.value
    setCepNumber(onlyNumbers(value))
  }

  function cleanState(){
    setCepNumber("")
  }

  function translate(cepData){
    return {
      "Estado": cepData.state,
      "Cidade": cepData.city,
      "Bairro": cepData.neighborhood,
      "Logradouro": cepData.street
    }
    
  }

  function handleSuccess(dataCEP){

    const result = translate(dataCEP)
    setResultado(result)
    navigateTo("RESULTS")
  }

  function handleError(err){
    const messageError = err.message;
    setErrorMessage(messageError)
    navigateTo("ERROR")
  }
function handleAddFavorite(){
  
  setCepFavorite(cepNumber)
}


  function handleSearch(){

    ticket.current++
    const currentTicket = ticket.current
    navigateTo("LOADING")
    consultarCep(cepNumber)
    .then(result => currentTicket == ticket.current && handleSuccess(result))
    .catch(error => currentTicket == ticket.current && handleError(error))
  }
  return (
      <>
      
        <p> What Is The Postal<br></br> Address Code? </p>
        
        <input 
          value={onlyNumbers(cepNumber)} 
          onChange={handleChange}
        
        />
        <br></br>
        <button onClick={handleSearch}> Search </button>
      

        
      </>
     
  );
}

export default Search;

/*
<p> useState atual: {cepNumber} </p>
<button onClick={cleanState}> clean state </button>
*/

 /*
    <br></br>
    <button onClick={handleAddFavorite}> add favorite </button>   
    <br /> 
    <p>Favorite: {cepFavorite}</p> 
    <DataCEP cepData={translate(cepData)} />
 */
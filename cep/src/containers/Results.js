import DataCEP from '../components/DataCEP';
import '../../src/Search.css'

function Results(props) {

  const navigateTo = props.navigateTo 
  const result = props.result

  return (
    <>
      <p> Resultado para o CEP {result.cep} </p>
      <DataCEP cepData ={result}/>
      <button onClick={() => navigateTo("SEARCH")}> new search </button>
    </>
  )
}

export default Results;

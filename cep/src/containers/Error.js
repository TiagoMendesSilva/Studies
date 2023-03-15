import '../../src/Search.css'

function Error(props) {

  const navigateTo = props.navigateTo
  const err = props.errorMessage
  return (
    <>
      <p>Erro na consulta</p>
      <p> {err} </p>
      <button onClick={() => navigateTo("SEARCH")}> home page </button>
    </>
  )
}

export default Error;

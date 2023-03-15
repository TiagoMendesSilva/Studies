import '../../src/Search.css'

function Loading(props) {

  const navigateTo = props.navigateTo
  const ticket = props.ticket

  function handleCancel(){

    ticket.current++
    navigateTo("SEARCH")
  }
  return (
    <>
      <p> Loading </p>
      <button onClick={handleCancel}> Cancel </button>
    </>
  )
}

export default Loading;

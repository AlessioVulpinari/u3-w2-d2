import Alert from "react-bootstrap/Alert"

function Welcome() {
  return (
    <>
      <Alert variant='success'>Benvenuto in Epibook!</Alert>
      <div className='container'>
        <h2 className='text-center'>Epibooks: il tuo e-commerce di libri preferito!</h2>
      </div>
    </>
  )
}

export default Welcome

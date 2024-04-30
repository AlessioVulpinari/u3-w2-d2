import { Button } from "react-bootstrap"

const SingleComment = (props) => {
  const deleteComment = async () => {
    try {
      const URL_STRIVE = "https://striveschool-api.herokuapp.com/api/comments/"
      const response = await fetch(URL_STRIVE + props.comment._id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOTE0NDI4MzJlODAwMTk4NzMwYTciLCJpYXQiOjE3MTQzOTM0MTMsImV4cCI6MTcxNTYwMzAxM30.f-NgHvvGJDGSkH5SzRBKuF7c4jnbd-cAwTKpZEgvSwU",
        },
      })
      if (response.ok) {
        alert("data deleted successfully")
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <li>
      {props.comment.comment + " - " + props.comment.rate}{" "}
      <Button variant='danger' size='sm' onClick={() => deleteComment()}>
        <i className='bi bi-trash3'></i>
      </Button>
    </li>
  )
}
export default SingleComment

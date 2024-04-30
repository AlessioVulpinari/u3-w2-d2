import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"

const AddComment = (props) => {
  // state = { review: { comment: "", rate: 1, elementId: this.props.elementId } }

  const [review, setReview] = useState({ comment: "", rate: 1, elementId: props.elementId })

  const handleFieldChange = (propertyName, propertyValue) => {
    setReview({ ...review, [propertyName]: propertyValue })
  }

  const saveData = async () => {
    try {
      const URL_STRIVE = "https://striveschool-api.herokuapp.com/api/comments/"
      const response = await fetch(URL_STRIVE, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOTE0NDI4MzJlODAwMTk4NzMwYTciLCJpYXQiOjE3MTQzOTM0MTMsImV4cCI6MTcxNTYwMzAxM30.f-NgHvvGJDGSkH5SzRBKuF7c4jnbd-cAwTKpZEgvSwU",
        },
      })
      if (response.ok) {
        alert("data saved successfully")
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await saveData()
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Recensione:</Form.Label>
        <Form.Control
          type='text'
          placeholder='scrivi qui la tua recensione...'
          value={review.comment}
          onChange={(e) => handleFieldChange("comment", e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Voto:</Form.Label>
        <Form.Control
          type='number'
          min={1}
          max={5}
          placeholder='lascia qui il tuo voto da 1 a 5...'
          value={review.rate}
          onChange={(e) => handleFieldChange("rate", e.target.value)}
        />
      </Form.Group>
      <Button type='submit'>Invia recensione!</Button>
    </Form>
  )
}

export default AddComment

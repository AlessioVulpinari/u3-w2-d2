import { Component } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class AddComment extends Component {
  state = { review: { comment: "", rate: 1, elementId: this.props.elementId } }

  handleFieldChange = (propertyName, propertyValue) => {
    this.setState({ review: { ...this.state.review, [propertyName]: propertyValue } })
  }

  saveData = async () => {
    try {
      const URL_STRIVE = "https://striveschool-api.herokuapp.com/api/comments/"
      const response = await fetch(URL_STRIVE, {
        method: "POST",
        body: JSON.stringify(this.state.review),
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

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.saveData()
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Recensione:</Form.Label>
          <Form.Control
            type='text'
            placeholder='scrivi qui la tua recensione...'
            value={this.state.review.comment}
            onChange={(e) => this.handleFieldChange("comment", e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Voto:</Form.Label>
          <Form.Control
            type='number'
            min={1}
            max={5}
            placeholder='lascia qui il tuo voto da 1 a 5...'
            value={this.state.review.rate}
            onChange={(e) => this.handleFieldChange("rate", e.target.value)}
          />
        </Form.Group>
        <Button type='submit'>Invia recensione!</Button>
      </Form>
    )
  }
}

export default AddComment

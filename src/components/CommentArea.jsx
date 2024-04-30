import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

class CommentArea extends Component {
  state = { comments: null }

  fetchReview = (elementId) => {
    const URL_STRIVE = "https://striveschool-api.herokuapp.com/api/comments/"
    fetch(URL_STRIVE + elementId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOTE0NDI4MzJlODAwMTk4NzMwYTciLCJpYXQiOjE3MTQzOTM0MTMsImV4cCI6MTcxNTYwMzAxM30.f-NgHvvGJDGSkH5SzRBKuF7c4jnbd-cAwTKpZEgvSwU",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          if (response.status === 400) {
            throw new Error("400: Bad Request")
          }
          if (response.status === 401) {
            throw new Error("401: Unauthorized")
          }
          if (response.status === 402) {
            throw new Error("402: Payment Required")
          }
          if (response.status === 403) {
            throw new Error("403: Forbidden")
          }
          if (response.status === 404) {
            throw new Error("404: Not Found")
          }
          if (response.status === 405) {
            throw new Error("405: Method Not Allowed")
          }
          if (response.status === 406) {
            throw new Error("406: Not Acceptable")
          }
          if (response.status === 407) {
            throw new Error("407: Proxy Authentication Required")
          }
          if (response.status === 408) {
            throw new Error("408: Request Timeout")
          }
          if (response.status === 500) {
            throw new Error("500: Server Error")
          }

          throw new Error("Generic Fetch Error")
        }
      })
      .then((comments) => {
        this.setState({ comments })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchReview(this.props.elementId)
  }

  render() {
    return (
      <>
        <CommentList elementId={this.props.elementId} comments={this.state.comments} />
        <AddComment elementId={this.props.elementId} />
      </>
    )
  }
}

export default CommentArea

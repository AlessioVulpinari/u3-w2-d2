import { Component } from "react"
import { Badge, Card, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBooks extends Component {
  state = { selected: false }

  render() {
    return (
      <Col key={this.props.bookIns.asin}>
        <Card className={this.state.selected && "border border-danger"}>
          <Card.Img
            variant='top'
            src={this.props.bookIns.img}
            onClick={() => {
              this.setState({ selected: !this.state.selected })
            }}
          />
          <Card.Body className='d-flex flex-column justify-content-between bg-secondary'>
            <Card.Title>{this.props.bookIns.title}</Card.Title>
            <Card.Text className='d-flex justify-content-between align-items-center'>
              <span>{this.props.bookIns.category.charAt(0).toUpperCase() + this.props.bookIns.category.slice(1)}</span>
              <Badge bg='success'>{this.props.bookIns.price}</Badge>
            </Card.Text>
            {this.state.selected === true ? (
              <CommentArea elementId={this.props.bookIns.asin} />
            ) : (
              console.log("Elemento non selezionato")
            )}
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBooks

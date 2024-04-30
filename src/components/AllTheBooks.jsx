import { Component } from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import fantasy from "../data/books/fantasy.json"
import history from "../data/books/history.json"
import horror from "../data/books/horror.json"
import romance from "../data/books/romance.json"
import scifi from "../data/books/scifi.json"
import { Col, Container, Row } from "react-bootstrap"

class AllTheBooks extends Component {
  state = {
    genre: fantasy,
  }
  render() {
    return (
      <Container>
        <ButtonGroup aria-label='Basic example' className='d-flex gap-1 my-2'>
          <Button variant='secondary' onClick={() => this.setState({ genre: fantasy })}>
            Fantasy{" "}
          </Button>
          <Button variant='secondary' onClick={() => this.setState({ genre: history })}>
            History
          </Button>
          <Button variant='secondary' onClick={() => this.setState({ genre: horror })}>
            Horror
          </Button>
          <Button variant='secondary' onClick={() => this.setState({ genre: romance })}>
            Romance
          </Button>
          <Button variant='secondary' onClick={() => this.setState({ genre: scifi })}>
            Sci-fi
          </Button>
        </ButtonGroup>
        <Row className='row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
          {this.state.genre.map((book) => {
            return (
              <Col key={book.asin}>
                <Card>
                  <Card.Img variant='top' src={book.img} />
                  <Card.Body className='d-flex flex-column justify-content-between bg-secondary'>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                      <span>{book.category.charAt(0).toUpperCase() + book.category.slice(1)}</span>
                      <Badge bg='success'>{book.price}</Badge>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks

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
import { useState } from "react"

const AllTheBooks = (props) => {
  // state = {
  //   genre: fantasy,
  // }

  const [genre, setGenre] = useState(fantasy)

  return (
    <Container>
      <ButtonGroup aria-label='Basic example' className='d-flex gap-1 my-2'>
        <Button variant='secondary' onClick={() => setGenre(fantasy)}>
          Fantasy{" "}
        </Button>
        <Button variant='secondary' onClick={() => setGenre(history)}>
          History
        </Button>
        <Button variant='secondary' onClick={() => setGenre(horror)}>
          Horror
        </Button>
        <Button variant='secondary' onClick={() => setGenre(romance)}>
          Romance
        </Button>
        <Button variant='secondary' onClick={() => setGenre(scifi)}>
          Sci-fi
        </Button>
      </ButtonGroup>
      <Row className='row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
        {genre.map((book) => {
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

export default AllTheBooks

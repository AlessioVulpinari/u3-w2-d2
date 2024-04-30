import { Container, Form, InputGroup, Row } from "react-bootstrap"
import SingleBooks from "./SingleBooks"
import { useState } from "react"

const BookList = (props) => {
  // state = { bookName: "", array: this.props.category }

  const [bookName, setBookName] = useState({ name: "", array: props.category })

  const handleSearch = () => {
    const search = props.category.filter((book) => book.title.toLowerCase().includes(bookName.name.toLowerCase()))
    // this.setState({ array: search })
    setBookName({ ...bookName, array: search })
  }

  return (
    <Container>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='Ricerca libro...'
          aria-label='Libro'
          aria-describedby='basic-addon1'
          onChange={(e) => {
            // this.setState({ bookName: e.target.value })
            setBookName({ ...bookName, name: e.target.value })
            handleSearch()
          }}
        />
      </InputGroup>

      <Row className='row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
        {bookName.array.map((book, i) => {
          return <SingleBooks bookIns={book} key={"Book-" + i} />
        })}
      </Row>
    </Container>
  )
}

export default BookList

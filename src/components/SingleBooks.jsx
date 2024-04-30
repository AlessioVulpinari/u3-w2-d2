import { useState } from "react"
import { Badge, Card, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"
const SingleBooks = (props) => {
  // state = { selected: false }
  const [selected, setSelected] = useState(false)

  return (
    <Col key={props.bookIns.asin}>
      <Card className={selected && "border border-danger"}>
        <Card.Img
          variant='top'
          src={props.bookIns.img}
          onClick={() => {
            // this.setState({ selected: !this.state.selected })
            setSelected(!selected)
          }}
        />
        <Card.Body className='d-flex flex-column justify-content-between bg-secondary'>
          <Card.Title>{props.bookIns.title}</Card.Title>
          <Card.Text className='d-flex justify-content-between align-items-center'>
            <span>{props.bookIns.category.charAt(0).toUpperCase() + props.bookIns.category.slice(1)}</span>
            <Badge bg='success'>{props.bookIns.price}</Badge>
          </Card.Text>
          {selected === true ? <CommentArea elementId={props.bookIns.asin} /> : console.log("Elemento non selezionato")}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBooks

import SingleComment from "./SingleComment"

const CommentList = (props) => {
  return (
    <>
      {props.comments !== null ? (
        <ul>
          {props.comments.map((comment) => {
            return <SingleComment comment={comment} key={props.elementId} />
          })}
        </ul>
      ) : (
        console.log("Errore")
      )}
    </>
  )
}

export default CommentList

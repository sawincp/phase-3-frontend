import React from 'react'

// import EditGenre from './EditGenre'


const Movie = ({id, title, genre, onUpdatedGenre}) => {

  // const [isEditing, setIsEditing]= useState(false)


  // function handleUpdatedGenre (updateGerne){
  //   setIsEditing(false)
  //   onUpdatedGenre(updateGerne)
  // }

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{genre}</p>
    </div>



    // <Container>
    //   <Row>
    //     <Col><p>{id}</p></Col>
    //     <Col><p>{title}</p></Col>
    //     <Col>
    //         <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
    //           <span role="img" aria-label="edit">
    //             ✏️
    //           </span>
    //         </button>
    //       {isEditing ? (
    //         <EditGenre
    //           id={id}
    //           genre={genre}
    //           onUpdateGenre={handleUpdatedGenre}
    //         />
    //       ) : {genre}}
    //     </Col>       
    //   </Row>

    // </Container>

  )
}

export default Movie
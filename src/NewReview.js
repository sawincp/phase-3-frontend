import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

const NewReview = ({ onAddReview }) => {

  const params = useParams()

  const [newReview, setNewReview] = useState({
    score: "",
    comment: ""
  })

  const handleInputChange = (e)=>{
      setNewReview({...newReview, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      fetch(`http://localhost:9292/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: newReview.score,
          comment: newReview.comment,
          movie_id: params.id,
        }),
      })
        .then((res) => res.json())
        .then((newReview) => {
          onAddReview(newReview)
          setNewReview({
            score: "",
            comment: ""
          })
        })
          
       
    };

  return (

    <Container>
      <form className='new-review' onSubmit = {handleSubmit}>
        <Row>
          <Col>
            <input
              type='number'
              name='score'
              value={newReview.score}
              onChange={handleInputChange}
              placeholder='Enter Score'
            />
          </Col>
          <Col>
            <textarea
              name='comment'
              value={newReview.comment}
              onChange={handleInputChange}
              placeholder='Enter Review' 
            />
          </Col>
          <Col><button type="submit">Submit</button></Col>
        </Row>
      </form>
        
    </Container>
  )
}

export default NewReview
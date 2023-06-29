import React, { useState } from 'react'

const NewReview = ({ onAddReview }) => {

  const [newReview, setNewReview] = useState({
    score: "",
    comment: ""
  })

    const handleInputChange = (e)=>{
      setNewReview({...newReview, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      onAddReview(newReview)
      setNewReview({
        score: "",
        comment: ""
      })
    };


  return (
    <form className='new-review' onSubmit = {handleSubmit}>
      <input
      type='number'
      name='score'
      value={newReview.score}
      onChange={handleInputChange}
      placeholder='Enter Score'
      />
       <input
      type='text'
      name='comment'
      value={newReview.comment}
      onChange={handleInputChange}
      placeholder='Enter Review'
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewReview
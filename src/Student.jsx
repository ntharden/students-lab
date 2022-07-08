import React from 'react';
import Score from './Score';


const Student = (props) => {
  return (
    <div className="card">
      <div class="container">
        <h3>NAME:</h3>{props.student.name}
        <h3>BIO:</h3>{props.student.bio}
        <h3>SCORE:</h3><Score />
      </div>
    </div>
  )

}

export default Student;
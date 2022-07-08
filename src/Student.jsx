import React from 'react';
import Score from './Score';


const Student = (props) => {
  return (
    <>
      <div>
        <h2>NAME: {props.student.name}</h2>
        <p>BIO: {props.student.bio}</p>
        <h3>GAME RESULTS: </h3>
        {props.student.scores.map((score, idx) =>
          <Score key={idx} score={score}/>
        )}
      </div>
    </>
  );
}

export default Student;
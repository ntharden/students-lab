import { studentList } from "./data";
import { useState } from 'react';


const Student = () => {

  const [index, setIndex] = useState(0)

  function handleClick() {
    if (index < studentList.length - 1){
      setIndex(index + 1)
    }
  }

  function handleBack() {
    if (index > 0){
      setIndex(index - 1)
    }
  }

  let student = studentList[index]

  return (
    <div className="card">
      <div class="container">
        <h3>NAME:</h3>{student.name}
        <br />
        <h3>BIO:</h3>{student.bio}
      </div>
      <button onClick={handleBack}>
        Previous Student
      </button>
      <button onClick={handleClick}>
        Next Student
      </button>
      
    </div>
  )

}

export default Student;
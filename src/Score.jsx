import { studentList } from "./data";
import { useState } from 'react';


const Score = () => {

  const [index, setIndex] = useState(0)

  function handleClick() {
    setIndex(index + 1)
  }

  let score = studentList[index]

  return (
    <div className="card">
      <div class="container">
        Something
      </div>
    </div>
  )

}

export default Score;
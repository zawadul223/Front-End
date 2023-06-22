import { useState } from 'react'
import './Card'
import './App.css'
import Card from './Card'
import './Card.css'
import { students } from './Data'


function App() {
  
  const [studentList, setStudentList] = useState([]);

  const showStudent = () => {
    setStudentList(students); // Populating studentList with data from students
  };

  
  return (
    <>
    <h1>Student List</h1>
    <button onClick={showStudent}>Show Students</button>
    <div className='card-container'>
      {studentList.map((student) =>(
        <Card 
          name = {student.name}
          age = {student.age}
          address={student.address}
          institute={student.institute}/>
        
      ))} 
    </div>
    </>
    
  )
}

export default App

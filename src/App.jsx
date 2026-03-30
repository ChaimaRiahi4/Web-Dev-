const courseTitle = "Advanced web development"
function App() {
  const studentName = "Chaima"
  const student = {
    name: "Chaima",
    age: 20,
    track: "Web Development"
  }
  return (
    <div>
      <h1> welcome to chaima's React app! </h1>
      <p> We are HAPPY to have you with us!</p>
      <p> student name: {studentName}</p>
      <p> Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="studentInput"> Enter your name:</label>
      <input type="text" id="studentInput"/>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
    </div>
  )
}

export default App

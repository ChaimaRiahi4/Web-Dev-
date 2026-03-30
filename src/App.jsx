// DATA STRUCTURE — Hacker News Story
// {
//   objectID: unique ID — used as React key because it never changes
//   title: title of the article
//   url: link to the article
//   author: who posted it
//   points: popularity score
//   num_comments: number of comments
// }
// This structure is realistic because it matches the real Hacker News API

const stories = [
  {
    objectID: 1,
    title: "React Official Documentation",
    url: "https://react.dev",
    author: "Facebook",
    points: 500,
    num_comments: 32
  },
  {
    objectID: 2,
    title: "Vite — Next Generation Frontend Tooling",
    url: "https://vitejs.dev",
    author: "Evan You",
    points: 189,
    num_comments: 27
  },
  {
    objectID: 3,
    title: "JavaScript MDN Web Docs",
    url: "https://developer.mozilla.org",
    author: "Diva",
    points: 312,
    num_comments: 45
  },
  {
    objectID: 4,
    title: "CSS Tricks — A Complete Guide to Flexbox",
    url: "https://css-tricks.com",
    author: "Chaima Riahi",
    points: 178,
    num_comments: 22
  }
]

const courseTitle = "Advanced Web Development"

function Header() {
  return (
    <div>
      <h1>Hacker News App</h1>
    </div>
  )
}

function Search() {
  return (
    <div>
      <label htmlFor="studentInput">Enter your name:</label>
      <input type="text" id="studentInput"/>
    </div>
  )
}

function List() {
  return (
    <div>
      {stories.map(function(story) {
        return (
          <div key={story.objectID}>
            <h3>
              <a href={story.url} target="_blank">{story.title}</a>
            </h3>
            <p>Author: {story.author}</p>
            <p>Points: {story.points}</p>
            <p>Comments: {story.num_comments}</p>
          </div>
        )
      })}
    </div>
  )
}

function App() {
  const studentName = "Chaima"

  const student = {
    name: "Chaima",
    age: 20,
    track: "Web Development"
  }

  function sayHello() {
    return "Hello " + studentName + ", welcome to the course!"
  }

  return (
    <div>
      <Header />
      <p>Student name: {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <Search />
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
      <List />
    </div>
  )
}

// WEEK 4 REFLECTIONS
// 1. What does App do now?
// App is the main component that organizes and renders all other components

// 2. What does List do?
// List is responsible for rendering the stories array using map()

// 3. What does Search do?
// Search renders the search UI — label and input field

// 4. Why is this structure cleaner than before?
// Each component has one responsibility — easier to read, debug and maintain

// WEEK 3 REFLECTIONS
// 1. Why is map() essential for rendering lists in React?
// map() returns a new array of JSX elements which React can display.
// forEach() does not return anything so it cannot be used in JSX.

// 2. Why is objectID the correct key?
// Because it is unique and stable — it never changes even if reordered.

// 3. What will change when we replace fake data with Hacker News API?
// The stories array will be replaced by data fetched from the API.

export default App
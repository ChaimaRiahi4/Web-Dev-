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

import { useState, useEffect } from "react"

const courseTitle = "Advanced Web Development"

const Item = ({ story }) => (
  <div>
    <h3>
      <a href={story.url} target="_blank">{story.title}</a>
    </h3>
    <p>Author: {story.author}</p>
    <p>Points: {story.points}</p>
    <p>Comments: {story.num_comments}</p>
  </div>
)

const List = ({ stories }) => (
  <div>
    {stories.map((story) => (
      <Item key={story.objectID} story={story} />
    ))}
  </div>
)

const Search = ({ searchTerm, onSearch }) => {
  const handleChange = (event) => {
    console.log("Search component re-rendering")
    console.log(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

const Header = () => (
  <div>
    <h1>Hacker News App</h1>
  </div>
)

const App = () => {
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

  const studentName = "Chaima"

  const student = {
    name: "Chaima",
    age: 20,
    track: "Web Development"
  }

  const sayHello = () => "Hello " + studentName + ", welcome to the course!"

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  )

  useEffect(() => {
    localStorage.setItem("search", searchTerm)
  }, [searchTerm])

  console.log("App component re-rendering")

  const handleSearch = (value) => {
    setSearchTerm(value)
  }

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Header />
      <p>Student name: {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
      <List stories={filteredStories} />
    </div>
  )
}

// WEEK 7 REFLECTIONS
// 1. What is a controlled component?
// A controlled component is an input whose value is always driven by React state.
// React is the single source of truth — not the DOM.

// 2. What is a side effect in React?
// A side effect is any operation that reaches outside the render cycle —
// like reading or writing localStorage, fetching data, or setting timers.

// 3. Why do we use useEffect instead of calling code directly?
// useEffect keeps the render function pure. Side effects run after render,
// not during it, which prevents bugs and keeps React in control.

// WEEK 6 REFLECTIONS
// 1. What is the difference between props and state?
// Props are passed from parent to child and cannot be changed by the child.
// State is owned by the component and can change over time.

// 2. Why do we lift state up?
// Because Search triggers the change but App owns the data.
// State must live in the common parent to share it across components.

// 3. Where should filtering logic live?
// In App — because App owns both the data and the searchTerm state.

// WEEK 5 REFLECTIONS
// 1. When do we use concise body arrow functions?
// When the function only returns a single expression — no extra logic needed

// 2. When do we use block body arrow functions?
// When we need to add logic inside the function like event handlers or variables

// 3. What does an event object contain?
// It contains info about the event — event.target.value gives the typed input value

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
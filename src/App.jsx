import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav.jsx"
import MyFooter from "./components/MyFooter.jsx"
import Welcome from "./components/Welcome.jsx"
// import AllTheBooks from "./components/AllTheBooks.jsx"
import BookList from "./components/BookList.jsx"
import fantasy from "../src/data/books/fantasy.json"

function App() {
  return (
    <div className='App'>
      <MyNav />
      <main className='container'>
        <Welcome />
        <BookList category={fantasy} />
      </main>

      <MyFooter />
    </div>
  )
}

export default App

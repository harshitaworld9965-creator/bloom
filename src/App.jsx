import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Notes from "./components/Notes";
import Closing from "./components/Closing";
function App() {
  return (
    <>
    <Nav/>
      <main>
        <Hero />
        <Notes />
        <Closing />
      </main>
    </>
  )
}

export default App;
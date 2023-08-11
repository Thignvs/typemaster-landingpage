import Description from "./assets/components/Description"
import Footer from "./assets/components/Footer"
import Hero from "./assets/components/Hero"
import MechanicalKeyboard from "./assets/components/MechanicalKeyboard"
import NavBar from "./assets/components/NavBar"


function App() {


  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
        <Hero />
      </header>
      <main>
        <MechanicalKeyboard />
        <Description />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App

import "./App.css"
import {
  NavBar,
  RoadMap,
  Hero,
  Footer,
  Nft,
  Team,
  Coin,
  GamePlay,
} from "./components"
// import backgroundImage from "./assets/backgroundImage.svg"

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <GamePlay />
      <Nft />
      <Coin />
      <Team />
      <RoadMap />
      <Footer />
    </div>
  )
}

export default App


import Starfield from "./StarField"
import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
function App() {

  return (
    <main className="app transition-all ease-in">
      
      {/* <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      /> */}
      
        <Home/>
        <Canvas/>
        <Customizer/>

      
      </main>
    
    
  )
}

export default App

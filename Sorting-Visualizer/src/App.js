import "./App.css";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import Particles from "react-particles-js";
function App() {
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
      <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#fff",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 7,
              random: true,
              anim: {
                enable: true,
                speed: 2,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 0.1,
            },
          },
        }}
      />
    </div>
  );
}

export default App;

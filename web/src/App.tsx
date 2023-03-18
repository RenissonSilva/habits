import { Habit } from "./components/Habit"
import './styles/global.css';

function App() {
  return (
    <div>
      <Habit completed={333}/>
      <Habit completed={4}/>
      <Habit completed={5}/>
    </div>
  )
}

export default App

import './lib/dayjs';
import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './styles/global.css';


// import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* w-full pra ficar tela cheia em mobile e max-w-5xl para ficar no máximo 1024px em telas maiores */}
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
          <Header />
          <SummaryTable />
      </div>
    </div>
  )
}

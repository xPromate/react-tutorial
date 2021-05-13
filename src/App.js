import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState(
    [
    {
        id:1,
        text:"fixe",
        day:"Dia de são nunca à tarde",
        reminder: false,
    },
    {
        id:2,
        text:"porreiro",
        day:"Dia de são nunca à tarde",
        reminder: true,
    },
    {
        id:3,
        text:"espectacular",
        day:"Dia de são nunca à tarde de noite",
        reminder: false,
    }
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}


export default App;

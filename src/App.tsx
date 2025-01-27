import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router';

export type TodoItem = {
  completed: boolean;
  id: number;
  title: string;
  userId: number
}

function App() {
  const [state, setState] = useState<TodoItem[] | null>(null)
  useEffect(() => {
    (async () => {
      const req = await fetch('https://jsonplaceholder.typicode.com/todos')
      const res = await req.json()
      setState(res)
    })()
  }, [])
  return (
    <> 
    {state === null ? <div>loading....</div> : state.map(element => {
      return <ul key={element.id}>
        <li><Link to={`/${element.id}`}>{element.title}</Link></li>
      </ul>
    })}
    </>
  )
}

export default App

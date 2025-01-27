import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { TodoItem } from "../App"

const TodoPage = () => {
  const params = useParams()
  const [state, setState] = useState<TodoItem | null>(null)
  useEffect(() => {
    (async () => {
      const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
      const res = await req.json()
      setState(res)
    })()
  }, [])
  return (
    <div>
      {state && (
        <div>
          {state.id}{' '}
          {state.completed}{' '}
          {state.title}{' '}
          {state.userId}{' '}
        </div>
      )}
    </div>
  )
}

export default TodoPage
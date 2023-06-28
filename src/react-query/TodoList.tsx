import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = async () => {
    const res = await axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
    return res.data;
  };

  // 1. react query has auto retries
  // if call to server fail, it will retry couple of time
  // 2. has auto refetch
  // 3. first time get data, it store in cache
  // next want this data, can get directly from cache, no need from server
  const { data: todos, error } = useQuery<Todo[], Error>({
    // unique identifier, for caching purposes.
    queryKey: ["todos"],
    // function to fetch data from backend
    queryFn: fetchTodos,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo: any) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

import { useEffect, useState } from "react";
import { fetchTodo } from "../services/todos";

export const useFetchTodo = () => {
  const [data, setData] = useState<TodoType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchTodo()
      .then((todos) => setData(todos))
      .catch((e) => console.log(e))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, isFetching };
};

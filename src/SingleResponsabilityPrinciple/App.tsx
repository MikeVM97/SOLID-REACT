// Un módulo debe tener una única razón para cambiar.

import { useFetchTodo } from "./hooks/useFetchTodo";

const App = () => {
  const { data, isFetching } = useFetchTodo();

  if (isFetching) return <p>...Loading</p>;

  return (
    <>
      <h1>Single Responsability Principle</h1>
      <ul>
        {data.map((todo: TodoType) => {
          return (
            <li key={todo.id}>
              <span>{todo.id}</span>
              <span>{todo.title}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;

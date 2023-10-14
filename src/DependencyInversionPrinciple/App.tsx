// El código que implementa lógica de alto nivel no debe depender de código que implementa los detalles a bajo nivel. Ambos deben depender de abstracciones.

import { useData } from "./hooks/useData";
import { ResponseType } from "./types";
import { fetcherURL as fetcher } from "./utils/fetcher";

export default function App () {
  const { data } = useData<ResponseType[]>({ key: "/todos", fetcher });

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((todo: ResponseType) => {
        return (
          <li key={todo.id}>
            <span className="mx-2">{todo.id}</span>
            <span>{todo.title}</span>
          </li>
        );
      })}
    </ul>
  );
}

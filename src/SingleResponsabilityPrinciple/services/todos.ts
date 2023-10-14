// import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos";

/* export const fetchTodo = () => {
  return axios
    .get<TodoType[]>(`https://jsonplaceholder.typicode.com/todos`)
    .then((res) => res.data);
}; */

export async function fetchTodo() {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
}

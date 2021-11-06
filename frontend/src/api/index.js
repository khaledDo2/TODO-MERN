import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertTodo = (payload) => api.post(`/todo`, payload);
export const getAllTodos = () => api.get(`/todo`);
export const updateTodoById = (id, payload) => api.put(`/todo/${id}`, payload);
export const deleteTodoById = (id) => api.delete(`/todo/${id}`);
export const getTodoById = (id) => api.get(`/todo/${id}`);

const apis = {
  insertTodo,
  getAllTodos,
  updateTodoById,
  deleteTodoById,
  getTodoById,
};

export default apis;

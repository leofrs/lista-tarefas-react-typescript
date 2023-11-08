import { api } from "../axios/api";

export async function getTasks() {
  return await api.get("/tasks");
}
export async function createTask(title: string) {
  return await api.post("/tasks", { title });
}

export async function deleteTask(id: number) {
  return await api.delete(`/tasks/${id}`);
}

export async function updateTaskService(id: number, title: string) {
  return await api.put(`/tasks/${id}`, { title });
}

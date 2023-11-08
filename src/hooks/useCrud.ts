import { useState, useRef, useEffect } from "react";

import { TaskProp } from "../components/Task";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTaskService,
} from "../feature/crudAPI";

const useCrud = () => {
  const [tasks, setTasks] = useState<TaskProp[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [id, setId] = useState<number | null>(null);

  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateTaskId, setUpdateTaskId] = useState<number | null>(null);
  const [updateTaskText, setUpdateTaskText] = useState(newTask);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function getAllTasks() {
      getTasks().then((resposta) => {
        setTasks(resposta.data);
      });
    }
    getAllTasks();
  }, []);

  async function getAllTasks() {
    getTasks().then((resposta) => {
      setTasks(resposta.data);
    });
  }

  async function createNewTask() {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      setNewTask(inputValue);
      await createTask(inputValue);
      inputRef.current.value = "";
      await getAllTasks();
    } else {
      alert("Campo Adicionar tarefa vazio");
    }
  }
  async function removeTask(id: number) {
    setModal(false);
    await deleteTask(id);
    await getAllTasks();
  }

  async function updateTask(id: number, newText: string) {
    setUpdateModal(false);
    await updateTaskService(id, newText);
    await getAllTasks();
  }

  return {
    tasks,
    modal,
    newTask,
    updateModal,
    setModal,
    setUpdateModal,
    setId,
    setUpdateTaskId,
    setUpdateTaskText,
    setNewTask,
    getAllTasks,
    createNewTask,
    removeTask,
    updateTask,
    id,
    updateTaskId,
    inputRef,
  };
};

export default useCrud;

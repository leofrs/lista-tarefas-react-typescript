import ModalExcluir from "./ModalExcluir";
import ModalAtualizar from "./ModalAtualizar";
import Task from "./Task";

import useCrud from "../hooks/useCrud";

export default function MainTodoApp() {
  const {
    tasks,
    modal,

    updateModal,
    createNewTask,
    setUpdateModal,
    setUpdateTaskText,
    setUpdateTaskId,
    setId,
    setModal,
    removeTask,
    updateTask,
    id,
    updateTaskId,
    inputRef,
  } = useCrud();

  return (
    <div className="flex h-screen justify-center items-center bg-gray-800">
      <div className="bg-slate-900 w-10/12 md:8/12 lg:w-6/12 rounded-xl p-20 text-neutral-50">
        <div className="font-display text-4xl font-bold text-center">
          Lista de Tarefas
        </div>
        <div className="flex  max-h-96 overflow-x-auto justify-center flex-col tasks mt-5 text-lg">
          {tasks.length <= 0 && (
            <div className="border text-center">Lista de Tarefas vazia</div>
          )}
          {tasks?.map((task, key) => {
            return (
              <div key={key} className="flex items-center border w-full">
                <Task
                  title={task.title}
                  handleClickExcluir={() => {
                    setModal(true);
                    setId(Number(task.id));
                  }}
                  handleClickAtualizar={() => {
                    setUpdateModal(true);
                    setUpdateTaskId(Number(task.id));
                    setUpdateTaskText(task.title);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="w-full text-center">
          <input
            type="text"
            className="p-3 mx-2 border-2 border-slate-400 rounded-lg text-black"
            ref={inputRef}
            placeholder="Adicionar tarefa"
          />
          <button
            onClick={createNewTask}
            className="bg-slate-700 hover:bg-slate-200 font-bold  hover:text-slate-900     mt-5 w-56  p-3 rounded-lg"
          >
            Criar
          </button>
        </div>
      </div>
      {modal && (
        <ModalExcluir
          title="Deseja excluir a tarefa?"
          onOkay={() => removeTask(Number(id))}
          onCancel={() => setModal(false)}
        />
      )}
      {updateModal && (
        <ModalAtualizar
          title="Editar Tarefa"
          onOkay={(newText) => updateTask(Number(updateTaskId), newText)}
          onCancel={() => setUpdateModal(false)}
        />
      )}
    </div>
  );
}

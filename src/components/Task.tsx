import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";

export type TaskProp = {
  id?: number;
  title: string;
  handleClickExcluir?: () => void;
  handleClickAtualizar?: () => void;
};

export default function Task({
  title,
  handleClickExcluir,
  handleClickAtualizar,
}: TaskProp) {
  return (
    <div className="flex justify-between items-center m-2 bg-gray-800 rounded-lg border w-full p-4 shadow-lg">
      <div className="px-2">{title} </div>
      <div className="acoes">
        <button className="bg-slate-700 mx-1 p-2 rounded hover:bg-green-500">
          <MdDoneOutline />
        </button>
        <button
          onClick={handleClickAtualizar}
          className="bg-slate-700 hover:bg-blue-600  mx-1 p-2 rounded"
        >
          <FaRegEdit />
        </button>
        <button
          onClick={handleClickExcluir}
          className="bg-slate-700 mx-1 p-2 rounded hover:bg-red-600"
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";

type Props = {
  title: string;
  onCancel: () => void;
  onOkay: (newText: string) => void;
};

export default function ModalAtualizar({ title, onCancel, onOkay }: Props) {
  const [newText, setNewText] = useState("");

  const handleUpdate = () => {
    onOkay(newText);
  };

  return (
    <div className="flex justify-center items-center absolute w-screen h-screen bg-black bg-opacity-80">
      <div className="bg-gray-900 p-3 rounded-lg">
        <div className="title text-white text-2xl font-bold ">{title}</div>
        <input
          type="text"
          placeholder="Insira seu novo texto"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="p-2 mt-2 rounded-lg w-full"
        />
        <div className="title flex justify-between p-2 text-white text-lg font-bold ">
          <button
            onClick={handleUpdate}
            className="bg-neutral-700 w-1/2 p-1 m-2 rounded"
          >
            Atualizar
          </button>
          <button
            onClick={onCancel}
            className="bg-neutral-900 w-1/2 p-1 m-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

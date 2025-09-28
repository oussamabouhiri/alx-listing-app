import { ButtonProps } from '../../interfaces';

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
}


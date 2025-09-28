import { CardProps } from '../../interfaces';

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img src={image} alt={title} className="rounded-md mb-2" />
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{description}</p>
    </div>
  );
}


import { Heart as IconHeart } from "./IconHeart";
import "./Card.css";

type CardProps = { title: string; label: string };

export default function Card({ title, label }: CardProps) {
  return (
    <>
      <div className="card">
        <div className="date-icon-card">
          <p>17 de agosto de 2023</p>
          <IconHeart />
        </div>
        <div className="title-label-card">
          <h2>{title}</h2>
          <p>{label}</p>
        </div>
        <div className="card-buttons">
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </>
  );
}

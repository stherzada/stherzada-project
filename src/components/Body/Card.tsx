import { Heart as IconHeart } from "./IconHeart";
import { Trash as IconTrash } from "./IconTrash";
import { Edit as IconEdit } from "./IconEdit";
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
          <p className="txt-allign-justify">{label}</p>
        </div>
        <div className="card-buttons">
          <button className="buttons">
            <IconTrash />
          </button>
          <button className="buttons">
            <IconEdit />
          </button>
        </div>
      </div>
    </>
  );
}

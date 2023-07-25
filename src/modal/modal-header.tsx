import { ReactNode } from "react";
import "./modal-header.scss";
import CloseCircle from "../assets/Close Circle.svg";

export interface ModalHeaderProps {
  title: ReactNode;
  [key: string]: any;

}


export const ModalHeader = ({ title ,closeModal,...otherProps }: ModalHeaderProps) => {
  return (
    <header {...otherProps} className="modal-header">
      <div className="close-click" onClick={closeModal}>
        <img src={CloseCircle} alt="close" />
      </div>
      <div>
        {typeof title === "string" ? (
          <h3 className="modal-title">{title}</h3>
        ) : (
          title
        )}
      </div>
    </header>
  );
};

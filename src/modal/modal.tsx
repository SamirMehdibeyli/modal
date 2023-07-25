import { ReactNode } from "react";
import "./modal.scss";

export interface ModalProps {
  children: ReactNode;
  visible?: boolean;
  size?: "small" | "large" | "medium";
  [key: string]: any;
}

export const Modal = ({
  children,
  visible = true,
  size = "medium",
  ...otherProps
}: ModalProps) => {
  return (
    <div className="modal-container">
      <dialog {...otherProps} className={`modal ${size}`}>
        {children}
      </dialog>
    </div>
  );
};

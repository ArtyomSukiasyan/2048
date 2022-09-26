import { EArrowDirections, EDirections } from "../models/directions.enum";
import { IGameTableValue } from "../models/gameTable";
import MoveTop from "./blockMovement";

const startEvent = (func: Function, mtr: IGameTableValue) => {
  const escFunction = (event: KeyboardEvent) => {
    switch (event.key) {
      case EArrowDirections.ArrowLeft:
        func(MoveTop(EDirections.left, mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case EArrowDirections.ArrowUp:
        func(MoveTop(EDirections.top, mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case EArrowDirections.ArrowRight:
        func(MoveTop(EDirections.right, mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case EArrowDirections.ArrowDown:
        func(MoveTop(EDirections.bottom, mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      default:
        break;
    }
  };

  document.addEventListener("keydown", escFunction, false);
};
export const endEvent = () => {};
export default startEvent;

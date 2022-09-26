import getNumber from "./getNumber";
import { IGameTableValue } from "../models/gameTable";
import randomBlok from "../2048_game/randomBlok";

const pour = (gametablevalue: IGameTableValue): IGameTableValue => {
  return randomBlok(gametablevalue, getNumber());
};

export default pour;

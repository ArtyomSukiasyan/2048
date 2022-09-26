import { IBlokValue, IGameTableValue, INestedArray } from "../models/gameTable";
import Blog from "../2048_game/blog";

const check = (gametablevalue: IGameTableValue) => {
  return gametablevalue.map((item: INestedArray, index: number) =>
    item.map((item2: IBlokValue, index2: number) => (
      <Blog key={"" + index + index2} isBlack={item2} />
    ))
  );
};

export default check;

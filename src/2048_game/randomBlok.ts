import { IBlokValue, IGameTableValue, INestedArray } from "../models/gameTable";

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const randomBlok = (
  gametablevalue: IGameTableValue,
  id: number
): IGameTableValue => {
  let index = 0;

  gametablevalue.forEach((element: INestedArray) => {
    element.forEach((elemen2: IBlokValue) => {
      if (!elemen2) {
        index += 1;
      }
    });
  });

  index = getRandomInt(index - 1);

  const board: IGameTableValue = gametablevalue.map((item: INestedArray) =>
    item.map((item2: any) => {
      if (!item2) {
        if (index === 0) {
          index -= 1;

          return id;
        }

        index -= 1;

        return item2;
      }

      return item2;
    })
  );

  return board;
};

export default randomBlok;

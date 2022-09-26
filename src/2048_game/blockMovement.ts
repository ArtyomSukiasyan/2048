import { EDirections } from "../models/directions.enum";
import { IBlokValue, IGameTableValue, INestedArray } from "../models/gameTable";

const sumX = (mtr: IGameTableValue, moveX?: EDirections) => {
  const newMtr = mtr.reduce((acc: IGameTableValue, item: INestedArray) => {
    const arr = item.filter((item: IBlokValue) => item !== false);

    const sumArr = arr.map(
      (it: IBlokValue, index: number, arr: INestedArray) => {
        if (it && it === arr[index + 1]) {
          arr[index + 1] = false;
          return it * 2;
        }

        return it;
      }
    );

    let arr2 = sumArr.filter((item: any) => item !== false);

    if (moveX === EDirections.right) {
      let arrXright = arr2.reduce(
        (acc2: INestedArray, item2: any, index: number, arr: any) => {
          acc2[acc2.length - arr.length + index] = item2;
          return acc2;
        },

        [false, false, false, false]
      );

      return [...acc, arrXright];
    }

    const arrXleft = arr2.reduce(
      (acc2: INestedArray, item2: any, index: number, arr: any) => {
        acc2[index] = item2;
        return acc2;
      },

      [false, false, false, false]
    );

    return [...acc, arrXleft];
  }, []);

  return newMtr;
};

const sumY = (mtr: IGameTableValue, move: EDirections): IGameTableValue => {
  const newMtr = mtr.reduce(
    (
      acc: IGameTableValue,
      item: INestedArray,
      index: number,
      array: IGameTableValue
    ) => {
      const arr = array.map((item2: INestedArray) => {
        return item2[index];
      });

      return [...acc, arr];
    },
    []
  );

  const turnRight =
    move === EDirections.bottom
      ? sumX(newMtr, EDirections.right)
      : sumX(newMtr);

  const turnLeft = turnRight.reduce(
    (
      acc: IGameTableValue,
      item: INestedArray,
      index: number,
      array: IGameTableValue
    ) => {
      const arr = array.map((item2: INestedArray) => {
        return item2[index];
      });

      return [...acc, arr];
    },
    []
  );

  return turnLeft;
};

const MoveTop = (
  direction: EDirections,
  mtr: IGameTableValue
): IGameTableValue => {
  if (direction === EDirections.top || direction === EDirections.bottom) {
    return sumY(mtr, direction);
  }

  return sumX(mtr, direction);
};

export default MoveTop;

import { useEffect, useState } from "react";
import check from "../components/check";
import pour from "../helpers/pour";
import startEvent from "./startEvent";
import isSimilar from "../helpers/isSimilar";
import styles from "../style.module.css";
import { IGameTableValue, ITable } from "../models/gameTable";

const Game2048 = () => {
  const [gametablevalue, setGametablevalue] = useState<IGameTableValue>([]);
  const [table, setTable] = useState<ITable>([]);

  const move = (newMatrix: IGameTableValue): void => {
    if (gametablevalue.length !== 0) {
      let value = newMatrix;

      if (isSimilar(value, gametablevalue)) {
        value = pour(value);
      }

      setGametablevalue(value);
      setTable(check(value));
    }
  };

  useEffect(() => {
    let value: IGameTableValue = [];

    for (let i = 0; i < 4; i++) {
      value[i] = [];

      for (let j = 0; j < 4; j++) {
        value[i] = [...value[i], false];
      }
    }

    value = pour(value);
    value = pour(value);

    setGametablevalue(value);
    setTable(check(value));
  }, []);

  useEffect(() => {
    startEvent(move, gametablevalue);
  });

  return (
    <div className={styles.container}>
      <div className={styles.gameBoard}>{table}</div>
    </div>
  );
};
export default Game2048;

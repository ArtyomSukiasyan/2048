export type IBlokValue = 2 | 4 | false

export type INestedArray = Array<IBlokValue>;

export type IGameTableValue = Array<INestedArray>;

export type ITable = Array<Array<any>>;

// 次のコードにおいて、T型の全てのプロパティをオプショナル（optional）にする型マップ型MyPartial<T>を実装してください。

interface User {
  id: number;
  name: string;
  age: number;
}

type MyPartial<T> = Partial<T>

type PartialUser = MyPartial<User>;


// 以下の2つの型を合成して、新しい型を作成し、指定された値を持つオブジェクトを作成してください。

type User2 = {
  id: number;
  name: string;
  age: number;
};

type Location_ = {
  country: string;
  city: string;
};

type UserLocation = {
  user : User2,
  location: Location_
}

const result:UserLocation = {
  user: { id: 1, name: 'Alice', age: 23 },
  location: { country: 'Japan', city: 'Tokyo' }
}


// 次のコードにおいて、MyRequired型を実装して、RequiredUser型が{ id: number; name: string; age: number }になるようにしてください。

interface User3 {
  id?: number;
  name?: string;
  age?: number;
}

type MyRequired<T> = Required<T>;

type RequiredUser = MyRequired<User3>;


// オブジェクトから一部のプロパティを抽出するような型エイリアスMyPick<T, K>を定義してください。ただし、引数Tは対象となるオブジェクトの型、引数Kは抽出したいプロパティ名をリストとして持つ型です。

interface User4 {
  id: number;
  name: string;
  age: number;
}

type MyPick<T,U extends keyof T> = Pick<T,U>

type PartialUser2 = MyPick<User4, 'age'>;

const user: PartialUser2 = { age: 23 };



type CurriedMultiply<T> = (x:T) => (y:T) => T

const multiply = (x: number, y: number): number => x * y;
const curriedMultiply:CurriedMultiply<number> = (x) => (y) => x * y;

// console.log(multiply(3, 4));
// console.log(curriedMultiply(3)(4));



interface Item {
  id: number;
  name: string;
  price: number;
}

const items: Item[] = [
  { id: 1, name: "item1", price: 100 },
  { id: 2, name: "item2", price: 200 },
  { id: 3, name: "item3", price: 300 },
  { id: 4, name: "item4", price: 400 },
  { id: 5, name: "item5", price: 500 },
];

type IdReturn<T> = (array:T[]) => T[];

const idReturn:IdReturn<Item> = (array) =>  items.filter(val => val.id <= 3);

// console.log(idReturn(items))


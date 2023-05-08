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



// 以下の条件を満たす関数 filterArticles の型を定義してください。

// 引数は Article 型の配列を取り、戻り値は Article 型の配列である。
// filterArticles 関数は、引数で受け取った配列から、 createdAt プロパティの値が指定された日付の 1 日前以降である要素だけを含む配列を返す。

interface Article {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  tags: string[];
}

const articles: Article[] = [
  {
    id: 1,
    title: "Title 1",
    body: "Body 1",
    createdAt: new Date("2022-01-01"),
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Title 2",
    body: "Body 2",
    createdAt: new Date("2022-02-01"),
    tags: ["tag2", "tag3"],
  },
  {
    id: 3,
    title: "Title 3",
    body: "Body 3",
    createdAt: new Date("2022-03-01"),
    tags: ["tag3", "tag4"],
  },
  {
    id: 4,
    title: "Title 4",
    body: "Body 4",
    createdAt: new Date("2022-04-01"),
    tags: ["tag4", "tag5"],
  },
  {
    id: 5,
    title: "Title 5",
    body: "Body 5",
    createdAt: new Date("2022-05-01"),
    tags: ["tag5", "tag6"],
  },
];

type FilterArticles<T> = (array:T[],time:Date) => T[]

const filterArticles:FilterArticles<Article> = (array,time) => array.filter(val => val.createdAt < time)

// console.log(filterArticles(articles,new Date('2022-03-02')));



// 以下の条件を満たす関数 filterArticles の型を定義してください。

// 引数は Article 型の配列を取り、戻り値は Article 型の配列である。
// filterArticles 関数は、引数で受け取った配列から、 createdAt プロパティの値が指定された日付の 1 日前以降である要素だけを含む配列を返す。

interface Item {
  id: number;
  name: string;
  price: number;
}

function getRandomItem<T>(items: T[]): T | undefined {
  const random = Math.floor(Math.random() * items.length);
  
  return items[random];
}



// 重複した要素を取り除いた新しい配列を作成する関数 unique を、ジェネリックスを使って実装してください。ただし、返される配列の要素の順序は、元の配列の順序を保持するものとします。

const unique = <T>(array:T[]):T[] => Array.from(new Set(array))

const arr1 = [1, 2, 3, 3, 4, 4, 5];
// console.log(unique(arr1)); // [1, 2, 3, 4, 5]

const arr2 = ["apple", "orange", "banana", "banana", "orange"];
// console.log(unique(arr2)); // ["apple", "orange", "banana"]

interface Item {
  id: number;
  name: string;
  price: number;
}

const items: Item[] = [
  { id: 1, name: "item1", price: 100 },
  { id: 2, name: "item2", price: 200 },
  { id: 3, name: "item3", price: 300 },
  { id: 3, name: "item4", price: 400 },
  { id: 1, name: "item5", price: 500 },
];

// console.log(unique(items));



// User型を受け取り、nameプロパティを除いた、新しいオブジェクトを返すstripNameという関数を作成してください。

interface Person {
  name: string;
  age: number;
}

interface User extends Person {
  username: string;
  password: string;
}

type stripName<T,U extends string> = Omit<T,U>

type Result1 = stripName<User,'name'>


// 以下の User インターフェースについて、 stripPasswords という型関数を作成してください。

interface User1 {
  username: string;
  password: string;
}

type StripPasswords<T,U extends string> = Omit<T,U>;
type Result2 = StripPasswords<User1,'password'>;



// 与えられたオブジェクトのプロパティを、キーと値の順序を反転させる関数reverseObjectを実装してください。
const obj = { a: 1, b: "hello", c: true };
type Obj = {
  a:number,
  b:string,
  c:boolean
}


// type Result15 = ReverseObject<Obj>

const reverseObject = (obj:Obj) => {
  const newObj = {}

  Object.keys(obj).forEach(val => {
    newObj[obj[val]] = val;
  })

  return newObj;
}

// console.log(reverseObject(obj))



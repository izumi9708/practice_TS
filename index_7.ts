// 次のコードにおいて、T型の全てのプロパティをオプショナル（optional）にする型マップ型MyPartial<T>を実装してください。

interface User1 {
  id: number;
  name: string;
  age: number;
}

type MyPartial1<T> = Partial<T>

type PartialUser1 = MyPartial1<User1>;


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

  
  
  // 2つの型を組み合わせて、 User 型を定義してください
// User 型には id 以外のプロパティはすべてオプションとします

type UserBase = {
  id: number;
  name: string;
  age: number;
};

type UserOptionals = {
  gender?: "male" | "female";
  occupation?: string;
};

type MyPartial<T> = Partial<Omit<T, 'id'>> & { id: number };
type User =  MyPartial<UserBase> & UserOptionals;


// 配列を、指定された型の配列に変換する型ToArrayを実装してください。
// ToArray<T>は、ジェネリック型Tを受け取る
// ToArray<T>は、T[]型の値を受け取って、その型を配列に変換する型

type ToArray<T> = T[] extends Array<infer U> ? U[] : unknown;

type NumberArray = ToArray<number>; // 期待される値: number[]
type WordArray = ToArray<string>; // 期待される値: string[]



// Person インターフェースから name プロパティのみを抽出して新しい型 PersonName を定義してください。

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonName<T,K extends keyof T> = Pick<T,K>;
type Result = PersonName<Person,'name'>


// Person 型に、email プロパティをオプショナルにする型 PersonEmail を定義してください。

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonEmail = Omit<Person,'email'> & {email?:string};


// 配列の要素を、指定した数だけ取り出して返す関数 take の型を定義してください。
type Take<T> = (array:T[],num:number) => T[]



// 型が一致している場合はtrue、そうでない場合はfalseを返す型Equalを定義してください。

type User1 = {
  name: string;
  age: number;
  email: string;
};

type UserProfile = {
  username: string;
  bio: string;
  website: string;
};

type Equal<T,U> = T extends U ?　(U extends T ? true : false) : false
type Result1 = Equal<User1,UserProfile> 



// 2つの型の間に、共通のプロパティ名と型を持つプロパティが存在する場合、そのプロパティを削除した型を返すDiff型を実装してください。

type OriginalType = {
  foo: number;
  bar: string;
  baz: boolean;
}

type ModifiedType = {
  bar: string;
}

type Keys<T,U> = Exclude<keyof T , keyof U>
type Diff<T,U> = Pick<T & U , Keys<T,U>>
type Result2 = Diff<OriginalType, ModifiedType>;



// User型とUserData型のプロパティがすべて含まれるMergedUser型を作成します。

type User2 = {
  name: string;
  age: number;
}

type UserData = {
  email: string;
  phone: string;
}


type MergedUser = User2 & UserData



// 以下の3つの型を組み合わせたものとする:
// Article: { id: number; title: string; body: string }
// User: { id: number; name: string }
// Author: { userId: number; articles: Article[] }
// UserとAuthorは、idプロパティで紐づく。
// Author型のarticlesプロパティには、Article型の配列が格納される。
// Author型のuserIdプロパティは、User型のidプロパティと同じ値である。
// Article型のidプロパティは、ユニークな数値である。

type Result3 = {
  Article: { id?: number; title: string; body: string }
  User: { id: number; name: string }
  Author: { userId: number; articles: Array<{id:number,title:string,body:string}> }
}


// オブジェクトから、id と name のプロパティだけを持つ型 UserBasicInfo を定義してください。

const user = {
  id: 123,
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30
};

type Test = Pick<typeof user,'id'|'name'>;


// 2つの型を合成し、新しい型を作成してください。
// 新しい型で id は必須項目、name と age は任意項目とします

type Person = {
  id: string;
  name: string;
  age: number;
};

type PartialPerson = Omit<Partial<Person>,'id'> & {id:string} ;


// typeBが全てnumber型になるように定義してください

type A = {
  [P in keyof B]: B[P] extends number ? B[P] : number;
}

type B = {
  id: string;
  name: string;
  age: boolean;
}


// すべてのプロパティを省略可能にする MakePartial 型を定義してください。

type User = {
  id: number;
  name: string;
  age: number;
};

type MakePartial<T> = Partial<T>

type PartialUser = MakePartial<User>;


// このオブジェクトの baz の値を取り出すための TypeScript の型を宣言してください。

const obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
};

type Obj = typeof obj;
type GetBaz = Obj['foo'];

type Result4 = GetBaz['bar']


// この User 型を引数にとる、以下のようなジェネリック型 UserId<T> を定義してください。

// T 型が User 型である場合、UserId<T> 型は number 型になる。
// それ以外の型である場合、UserId<T> 型は unknown 型になる。


type User3 = {
  id: number;
  name: string;
  age: number;
};

type UserId<T> = T extends {id:infer U} ? U : unknown

type Id1 = UserId<User>; // Id1 の型は number になる
type Id2 = UserId<string>; // Id2 の型は unknown になる



// User型のプロパティの型を全てstring型に変換する型StringifyUserを定義してください。ただし、User型に追加のプロパティが定義された場合でも、そのプロパティの型を自動的に変換できるように定義してください。

type User4 = {
  id: number;
  name: string;
  age: number;
};

type AdditionalUser = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type StringifyUser<T> = {
  [K in keyof T]: T[K] extends string | number | boolean ? string : T[K];
}

type StringifiedUser1 = StringifyUser<User4>;
type StringifiedUser2 = StringifyUser<User4> & { email: string };
type StringifiedUser3 = StringifyUser<User4> & AdditionalUser;





// 配列の最初の要素を取得する型Firstを定義せよ。

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type First<T> = T extends [infer U, ...any[]] ? U : never

type head1 = First<arr1>; // 期待される型: 'a'
type head2 = First<arr2>; // 期待される型: 3


// タプルの最後の要素を取得する型Lastを定義せよ。
type tuple1 = ['a', 'b', 'c'];
type tuple2 = [3, 2, 1];

type Last<T> = T extends [...any[],infer U] ? U : never;

type tail1 = Last<tuple1>; // 期待される型: 'c'
type tail2 = Last<tuple2>; // 期待される型: 1



type MyType<T> = T extends Array<infer U> ? U : never;

type MyArray = Array<string>;
type MyResult = MyType<MyArray>; // string


// オブジェクトのプロパティの型を変換する型MapObjectを定義せよ。

type obj1 = { foo: number, bar: string };
type obj2 = { 0: number, 1: string, 2: boolean };

type MapObject<T, U> = {
  [K in keyof T]:T[K] extends U ? U : U;
}

type mappedObj1 = MapObject<obj1, string>; // 期待される型: { foo: string, bar: string }
type mappedObj2 = MapObject<obj2, boolean>; // 期待される型: { 0: boolean, 1: boolean, 2: boolean }



// User 型は id, name, age の３つのプロパティを持つ。
// Address 型は prefecture, city, town の３つのプロパティを持つ。
// UserWithAddress 型は User 型と Address 型を持つ。
// UsersWithAddress 型は UserWithAddress の配列。

// getNamesOfUsersWithAddress という名前の関数を作成する。
// 引数は UsersWithAddress 型の配列。
// 返り値は string の配列で、 UserWithAddress の name プロパティの値を含む。

// このとき、getNamesOfUsersWithAddress(users) は ["Alice", "Bob"] を返す必要があります。

type User = {
  id:number,
  name:string,
  age:number
}

type Address = {
  prefecture:string,
  city:string,
  town:string
}

type UserWithAddress = User & Address;
type UsersWithAddress = {
  user:User,
  address:Address
}

const users: UsersWithAddress[] = [
  {
    user: { id: 1, name: "Alice", age: 20 },
    address: { prefecture: "Tokyo", city: "Chuo", town: "Ginza" },
  },
  {
    user: { id: 2, name: "Bob", age: 25 },
    address: { prefecture: "Osaka", city: "Chuo", town: "Umeda" },
  },
];

type GetNamesOfUsersWithAddress<T> = (array:T[]) => string[];

const getNamesOfUsersWithAddress:GetNamesOfUsersWithAddress<UsersWithAddress> = (array) => {
  return array.map(val => val.user.name)
}

// console.log(getNamesOfUsersWithAddress(users))



// インターフェース Person を継承した Employee インターフェースを定義し、Employee インターフェースを使って、以下のオブジェクトの型を定義してください。

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  companyId:string
}

const employee:Employee  = {
  name: "John",
  age: 30,
  companyId: "ABC123"
};


// 次のような型を定義してください。
// PartialUser: User 型のすべてのプロパティをオプションとした型。

interface User2 {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User2>



const users2 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

interface User3 {
  id:number;
  name:string;
}

function findById(id: number) {
  return users2.find((user:{id:number;name:string}) => user.id === id);
}

// const user = findById(1);
// console.log(user)
// if (user !== undefined) {
//   // user は { id: number, name: string } の形式であることが保証されている
//   console.log(user.name);
// }



const users3 = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 30 },
];

type Ages = (array:{id:number;name:string;age:number}[]) => number[]

const ages:Ages = (array) => {
  return array.map(val => val.age);
}

console.log(ages(users3))



// User 型を定義してください。

// User 型は、以下のプロパティを持ちます。
// id: number型
// name: string型
// age: number型
// gender: "male" | "female" | "other"型
// isAdmin: boolean型
// また、以下の型エイリアスを定義してください。

// UserId: User 型の id プロパティと同じ型
// UserWithoutId: User 型の id プロパティを除いた型

type User = {
  id:number;
  name:string;
  age:number;
  gender:"male" | "female" | "other";
  isAdmin: boolean
}

type UserId = Pick<User,'id'>;
type UserWithoutId = Omit<User,'id'>

// 追加


// 配列から特定の要素を削除する関数を実装してください。以下の仕様を満たすようにしてください。

// 関数名はremoveElementとします。
// 引数は以下の通りです。
// array: T[]：削除操作を行う配列（Tはジェネリック型とします）。
// element: T：削除する要素。
// 配列の先頭から順に要素を比較し、最初に見つかった一致する要素を削除します。
// 削除した要素があった場合は、削除した要素を含まない新しい配列を返します。
// 削除した要素がなかった場合は、元の配列をそのまま返します。

// arrayが空の場合は、空の配列を返します。
// elementがundefinedまたはnullの場合は、何も処理を行わずにarrayをそのまま返します。
// arrayは破壊的変更を行わないように実装してください（元の配列の要素が変更されないようにする）。

type RemoveElement = <T>(array:T[],element:T) => T[];

const removeElement:RemoveElement = (array,element) => {
  return array.filter(val => val !== element)
}  

const array1 = [1, 2, 3, 4, 5];
const result1 = removeElement(array1, 3);
// console.log(result1);

const array2 = [1, 2, 3, 4, 5];
const result2 = removeElement(array2, 6);
// console.log(result2);
const array3: string[] = [];
const result3 = removeElement(array3, 'a');
// console.log(result3);

const array4 = [1, 2, 3, 4, 5];
const result4 = removeElement(array4, undefined);
// console.log(result4);

const array5 = [1, 2, 3, 4, 5];
const result5 = removeElement(array5, null);
// console.log(result5);


// 以下の要件を満たす isNumber という名前の型を宣言してください。

// isNumber は、引数として与えられた値が数値かどうかを判定し、結果を真偽値で返す関数型となる。
// 判定する値の型は数値型 number と文字列型 string のどちらでも受け付けられる。
// 判定が真の場合は true、偽の場合は false を返す

type IsNumber = (param:number|string) => boolean;

const isNumber:IsNumber = (param) => {
  return typeof param == 'number' 
}

// console.log(isNumber(555))



// 配列の要素をランダムに並び替える関数 shuffleArray を実装してください。次の仕様に従うものとします。

// 関数名: shuffleArray
// 引数: 配列 (any[])
// 返り値: ランダムに並び替えた配列 (any[])
// 元の配列は変更しない (非破壊的関数)

type ShuffleArray = (array:any[]) => any[];
const shuffleArray:ShuffleArray = (array) => {
  let randomArray = [];
  let resultArray = [];
  
  while(randomArray.length < array.length ){
    const randomValue = Math.floor(Math.random() * array.length ); 
    randomArray.push(randomValue);

    randomArray = Array.from(new Set(randomArray))
  }

  for(let i of randomArray){
    resultArray.push(array[i]);
  }

  return resultArray;
  
}
// console.log(shuffleArray([1,22,54,111]));



// JavaScriptで、2つのオブジェクトを結合する方法を実装してください。ただし、同じキーが存在する場合は、後のオブジェクトの値で上書きしてください。また、元のオブジェクトは変更しないように実装してください。
const obj1 = {
  name:'aa',
  age:20,
}

const obj2 = {
  name:'bb',
  trans:'fire'
}

const newObj = {...obj1,...obj2}


// 以下のような条件を満たす、型エイリアスを作成してください。

// ジェネリクスを使い、任意の型の配列を受け取ることができる
// 引数として受け取った配列の要素を逆順に並べた新しい配列を返す
// 返り値の配列の型は引数の配列の型と同じになる

type ReverseFilter = <T>(array:T[]) => T[]


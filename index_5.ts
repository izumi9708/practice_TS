// 配列に対して、以下の操作を行う関数を実装してください。

// age の平均値を求める関数 averageAge
// gender ごとに年齢の平均値を求める関数 averageAgeByGender
// ただし、以下の点に注意してください。

// 配列の要素数が 0 の場合、どちらの関数でも null を返してください。
// // 平均値は小数点以下第一位まで求めてください。

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  gender: 'male' | 'female' | 'other';
};

type GenderArray = {
  female: User[],
  male : User[]
  other : User[]
}

const users: User[] = [
  { id: 1, name: 'Alice', age: 23, email: 'alice@example.com', gender: 'female' },
  { id: 2, name: 'Bob', age: 31, email: 'bob@example.com', gender: 'male' },
  { id: 3, name: 'Charlie', age: 19, email: 'charlie@example.com', gender: 'male' },
  { id: 4, name: 'Dave', age: 45, email: 'dave@example.com', gender: 'other' },
  { id: 5, name: 'Eve', age: 29, email: 'eve@example.com', gender: 'female' },
];

function averageAge(array:User[]):number {
  if(array.length == 0){
    return null
  } else {
    return array.map(val => val.age).reduce((a,b) => a + b) / array.length;
  }
}
console.log(averageAge(users))

function createGenderArray(array:User[]):GenderArray[] {
  const newObj:GenderArray = {female:[],male:[],other:[]}
  array.map(val => {
    const {gender} = val
    if(!newObj[gender]){
      newObj[gender] = [val];

    }else {
      newObj[gender].push(val)
    }
  }) 

  return [newObj];
}

function averageAgeByGender(array:GenderArray[]):{[key:string]:number}[]{
  const property = array.map(val => Object.keys(val))[0]

  const result = array.map(val => Object.keys(val).map(key => val[key]))[0]
  const result2 = result.map(val => val.map(key => key.age))
  const average =  result2.map(val => val.reduce((a:number,b:number) => a + b / val.length))

  return average.map((val,index) => ({[property[index]]:val}) )

}

const genderArray:GenderArray[] = createGenderArray(users);
const ageByGender = averageAgeByGender(genderArray);

for(let i of ageByGender){
  console.log(i)
}


// 以下のコードで、Person クラスを継承して Employee クラスを定義してください。Employee クラスには id プロパティと role プロパティを追加してください。

class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  returnName(){
    return this.name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// ここにEmployeeクラスを定義してください
class Employee extends Person {
  public id:number
  public role:string

  constructor(name:string,id:number,role:string){
    super(name)
    this.id   = id;
    this.role = role;
  }
}

const employee = new Employee("John Smith", 1, "developer");
// console.log('name',employee.returnName()); // => "John Smith"
// console.log('id',employee.id); // => 1
// console.log(employee.role); // => "developer"
// employee.sayHello(); // => "Hello, my name is John Smith"


// 以下のコードで定義された groupBy 関数を実装してください。 groupBy 関数は、与えられた配列とキーのプロパティ名に基づいて、オブジェクトの配列をグループ化するものです。

interface Item {
  id: number;
  name: string;
  category: string;
}

// function groupBy(items: Item[], key: string): { [key: string]: Item[] } {
//   const newObj = {}
  
//   for(let i of items){
//     newObj[i[key]] = items.filter(val => i[key] == val[key])
//   }

//   return newObj;
// }

function groupBy(items: Item[], key: string): { [key: string]: Item[] } {
  const newObj:{[key:string]:Item[]} = {} 

  for(let item of items){
    const keys = item[key];
    
    if(!newObj[keys]){
      newObj[keys] = []
    }
    newObj[keys].push(item)
  }

  return newObj
}

const items: Item[] = [
  { id: 1, name: 'item 1', category: 'category 1' },
  { id: 2, name: 'item 2', category: 'category 2' },
  { id: 3, name: 'item 3', category: 'category 1' },
  { id: 4, name: 'item 4', category: 'category 2' },
  { id: 5, name: 'item 5', category: 'category 1' },
];

const itemsById = groupBy(items, 'id');
const itemsByCategory = groupBy(items, 'category');

// console.log(itemsById);
// console.log(itemsByCategory);



// 配列に重複した要素が含まれている場合に、重複した要素を削除して、新しい配列を作成する関数を実装してください。ただし、新しい配列は元の配列の順序を保持する必要があります。

function removeDuplicates(arr:number[]):number[] {
    return Array.from(new Set(arr))
}

const arr = [1, 3, 2, 3, 4, 1, 2];
const result = removeDuplicates(arr);
// console.log(result); // [1, 3, 2, 4]


// この配列を価格が高い順に並び替え、結果をコンソールに出力する関数 sortFruitsByPrice を実装してください。

const fruits = [
  { name: 'apple', color: 'red', price: 0.5 },
  { name: 'banana', color: 'yellow', price: 0.3 },
  { name: 'grape', color: 'purple', price: 0.8 },
  { name: 'orange', color: 'orange', price: 0.6 },
];

interface Fruits {
  name:string
  color:string
  price:number
}

function sortFruisByPrice(array:Fruits[]):Fruits[]{
  return array.sort((a,b) => b.price - a.price)
}

// console.log(sortFruisByPrice(fruits))


// Userクラスを定義してください。Userクラスは、名前とメールアドレスをプロパティとして持ちます。また、sayHello()メソッドを定義して、"Hello, {名前}!"というメッセージをコンソールに表示するようにしてください。

class User {
  private _name: string;
  private _email: string;
  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }
  public get name(): string {
    return this._name;
  }
  public get email(): string {
    return this._email;
  }
  public sayHello(): void {
    console.log(`Hello, ${this._name}!`);
  }
}

const classUser = new User('taro','aaa@mail.com');
// classUser.sayHello();



// 次のような型を持つStackクラスを定義してください

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack<number>();


// 次のような型を持つPersonインターフェースがあります。Personインターフェースを拡張して、Studentインターフェースを定義してください。Studentインターフェースは、Personインターフェースを継承します。また、universityプロパティを追加してください。universityプロパティは、大学名の文字列を持ちます。

interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
}

interface Student_2 extends Person {
  university:string
}


// 以下のコードで、Person クラスを継承して Employee クラスを定義してください。Employee クラスには id プロパティと role プロパティを追加してください。

class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  returnName(){
    return this.name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// ここにEmployeeクラスを定義してください
class Employee extends Person {
  public id:number
  public role:string

  constructor(name:string,id:number,role:string){
    super(name)
    this.id   = id;
    this.role = role;
  }
}

const employee = new Employee("John Smith", 1, "developer");
// console.log('name',employee.returnName()); // => "John Smith"
// console.log('id',employee.id); // => 1
// console.log(employee.role); // => "developer"
// employee.sayHello(); // => "Hello, my name is John Smith"


// 以下のコードで定義された groupBy 関数を実装してください。 groupBy 関数は、与えられた配列とキーのプロパティ名に基づいて、オブジェクトの配列をグループ化するものです。

interface Item {
  id: number;
  name: string;
  category: string;
}

// function groupBy(items: Item[], key: string): { [key: string]: Item[] } {
//   const newObj = {}
  
//   for(let i of items){
//     newObj[i[key]] = items.filter(val => i[key] == val[key])
//   }

//   return newObj;
// }

function groupBy(items: Item[], key: string): { [key: string]: Item[] } {
  const newObj:{[key:string]:Item[]} = {} 

  for(let item of items){
    const keys = item[key];
    
    if(!newObj[keys]){
      newObj[keys] = []
    }
    newObj[keys].push(item)
  }

  return newObj
}

const items: Item[] = [
  { id: 1, name: 'item 1', category: 'category 1' },
  { id: 2, name: 'item 2', category: 'category 2' },
  { id: 3, name: 'item 3', category: 'category 1' },
  { id: 4, name: 'item 4', category: 'category 2' },
  { id: 5, name: 'item 5', category: 'category 1' },
];

const itemsById = groupBy(items, 'id');
const itemsByCategory = groupBy(items, 'category');

// console.log(itemsById);
// console.log(itemsByCategory);



// 配列に重複した要素が含まれている場合に、重複した要素を削除して、新しい配列を作成する関数を実装してください。ただし、新しい配列は元の配列の順序を保持する必要があります。

function removeDuplicates(arr:number[]):number[] {
    return Array.from(new Set(arr))
}

const arr = [1, 3, 2, 3, 4, 1, 2];
const result = removeDuplicates(arr);
// console.log(result); // [1, 3, 2, 4]


// この配列を価格が高い順に並び替え、結果をコンソールに出力する関数 sortFruitsByPrice を実装してください。

const fruits = [
  { name: 'apple', color: 'red', price: 0.5 },
  { name: 'banana', color: 'yellow', price: 0.3 },
  { name: 'grape', color: 'purple', price: 0.8 },
  { name: 'orange', color: 'orange', price: 0.6 },
];

interface Fruits {
  name:string
  color:string
  price:number
}

function sortFruisByPrice(array:Fruits[]):Fruits[]{
  return array.sort((a,b) => b.price - a.price)
}

// console.log(sortFruisByPrice(fruits))


// Userクラスを定義してください。Userクラスは、名前とメールアドレスをプロパティとして持ちます。また、sayHello()メソッドを定義して、"Hello, {名前}!"というメッセージをコンソールに表示するようにしてください。

class User {
  private _name: string;
  private _email: string;
  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }
  public get name(): string {
    return this._name;
  }
  public get email(): string {
    return this._email;
  }
  public sayHello(): void {
    console.log(`Hello, ${this._name}!`);
  }
}

const classUser = new User('taro','aaa@mail.com');
// classUser.sayHello();



// 次のような型を持つStackクラスを定義してください

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack<number>();


// 次のような型を持つPersonインターフェースがあります。Personインターフェースを拡張して、Studentインターフェースを定義してください。Studentインターフェースは、Personインターフェースを継承します。また、universityプロパティを追加してください。universityプロパティは、大学名の文字列を持ちます。

interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
}

interface Student_2 extends Person {
  university:string
}



// プロパティの値が null もしくは undefined の場合、そのプロパティをオブジェクトから削除する関数 removeNullAndUndefined を、TypeScriptで定義してください。

interface MyObject {
  name: string;
  age?: number;
  address: string | null;
  phoneNumber?: string | null;
}

const obj = {
  name: 'Alice',
  age: null,
  address: 'Tokyo',
  phoneNumber: undefined,
};

type RemoveNullAndUndefined = (arg:MyObject) => MyObject

const removeNullAndUndefined:RemoveNullAndUndefined = (obj) => {
  let newObj:MyObject = {
    name:obj.name,
    age:obj.age,
    address:obj.address ?? null,
    phoneNumber:obj.phoneNumber ?? null
  }

  Object.keys(obj).forEach(val => {
    if(obj[val]){
      newObj[val] = obj[val]
    }
  })

  return newObj
}

// console.log(removeNullAndUndefined(obj))


// 与えられた配列に含まれる数値要素の平均値を計算する関数 calculateAverage を実装してください。
// 計算結果は小数点以下第2位までの数値である必要があります。
// 配列が空の場合、0 を返却してください。

type CalculateAverage = (arg:number[]) => number

const calculateAverage:CalculateAverage = (arg) => {
  return  arg.length == 0 ? 0 : arg.reduce((a,b) => a + b) / arg.length
}

// console.log(calculateAverage([1, 2, 3, 4, 5])); // => 3.00
// console.log(calculateAverage([])); // => 0



// 以下の条件を満たす関数 getUserNames を実装してください。

// 関数は、タプル型 User を要素とする配列 users と、数値 age を引数に取ります。
// 関数は、users から、age が引数で渡された値以下のユーザーの名前（name プロパティ）を要素とする配列を作成し、返します。
// 返り値の配列は、名前をアルファベット順にソートされている必要があります。


interface User1 {
  name: string;
  age: number;
}

type GetUserNames = (array:User1[],age:number) => string[]

const getUserNames:GetUserNames = (array,age) => {
  const fil = array.filter(val => val.age <= age );
  return fil.map(val => val.name).sort((a,b) => a > b ? 1: -1);
}

const users1: User1[] = [
  { name: 'Alice', age: 19 },
  { name: 'Bob', age: 30 },
  { name: 'Tom', age: 17 },
];

// console.log(getUserNames(users, 20)); // ['Alice', 'Tom']


// 2つの配列a, bがあり、それぞれn個の要素を持っています。
// それらを1つの配列cにマージし、並び替えて返す関数mergeSortedArraysを作成してください。

// ただし、配列a, bはそれぞれ昇順に並んでおり、配列cにも昇順に並ぶようにマージするものとします。
// また、同じ要素が重複して存在する場合は、重複して出力されるものとします。

type MergeSortedArrays = (a: number[], b: number[]) => number[];

　const mergeSortedArrays:MergeSortedArrays = (a,b) => {
  return a.concat(b).sort((a,b) => a - b)
}

const a = [1, 3, 4, 8];
const b = [2, 3, 5, 7, 12];
// console.log(mergeSortedArrays(a, b)); // [1, 2, 3, 4, 5, 7, 8, 12]
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]


// 引数として数値の配列と、フィルター条件を表す関数を受け取り、そのフィルター条件にマッチする配列を返す関数 filterArray を実装してください。

type IsEven = (n:number) => boolean

const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

type FilterArray = (array:number[],func:IsEven) => number[]

const filterArray:FilterArray = (array,func) => {
  return array.filter(val => func(val))
}

const array: number[] = [1, 2, 3, 4, 5, 6];
// console.log(filterArray(array, isEven)); // [2, 4, 6]


// 数値の配列を受け取り、配列の中から最大値と最小値を探し、その差を返す関数findArrayDiffを実装してください。ただし、引数で受け取る配列は必ず1つ以上の要素を持ち、数値であることが保証されています。

type FindArrayDiff = (array:number[]) => number

const findArrayDiff:FindArrayDiff = (array) => {
  const max = array.reduce((a,b) => Math.max(a,b))
  const min = array.reduce((a,b) => Math.min(a,b))

  return max - min;
}

// console.log(findArrayDiff([1, 2, 3, 4, 5])); // 4
// console.log(findArrayDiff([10, 5, 3, 7, 1, 3, 9])); // 9



// 以下の要件を満たす MyMap 型を実装してください。

// MyMap 型は、ジェネリック型を利用している
// この型は、オブジェクト型であり、key-value のペアを持つ
// key の型は、 string 型、value の型はジェネリックである T 型
// MyMap は、以下の 2 つのメソッドを持つ
// set(key: string, value: T): void
// key と value を引数に受け取り、Map に key-value のペアを追加する
// get(key: string): T | undefined
// key を引数に受け取り、該当する value を返す
// key が Map 内に存在しない場合は、undefined を返す


type MyMap<T> = {
  [key: string]: T;
} & {
  set: (key: string, value: T) => void;
  get: (key: string) => T | undefined;
}


// 以下の MyRequired 型を実装してください。 MyRequired<T> は、オブジェクト型 T の全てのプロパティを必須にした型を表します。

type MyRequired<T> = Required<T>
 
// 使用例
type Person = {
  name?: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
};

type RequiredPerson =  MyRequired<Person>;
const person: RequiredPerson = { name: 'foo', age: 20, gender: 'male' };

// エラー例
// const person2: RequiredPerson = { age: 20, gender: 'male' };



// 次の関数 average は、与えられた配列の要素の平均値を求める関数です。この関数の型 Average を推論してください。


type Average = (arr: number[]) => number

const average:Average = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}




// 以下の要件を満たす、MyFilterという型を実装してください。

// MyFilterは、2つの型引数TとUを受け取る。
// MyFilterは、T型の配列arrと、U型を引数に取り、booleanを返す関数fnを受け取る。
// MyFilterは、arrをfnでフィルタリングし、結果として得られるT型の配列を返す。
// fnの引数は、arrの各要素の型であるT[number]型である。

type MyFilter<T, U extends (arg: T) => boolean> = (arr: T[], fn: U) => T[];
type Even = MyFilter<number, (n: number) => boolean>;

// 使用例
const evenNumbers: Even = (arr, fn) => arr.filter(fn);
const notEvenNumbers: Even = (arr, fn) => arr.filter((num) => !fn(num));
const func = (n:number):boolean => n % 2 === 0;

// console.log(evenNumbers([1,2,4,5,6,7,8,9,0],func))
// console.log(notEvenNumbers([1,2,4,5,6,7,8,9,0],func))



// 以下の条件に合わせて、PickArray 型を実装してください。

//   PickArray<T, K> は、T 型の配列から、K で指定されたプロパティの値だけを持つ新しい配列型を返す。
//   T 型は、以下のような構造を持つオブジェクト型とする。
//   K 型は、以下のように id と name のいずれか、または両方が選べる合併型とする。

  type T = {
    id: number;
    name: string;
    age: number;
    hasPet: boolean;
  };

  type K = "id" | "name" | ("id" | "name")[];

  type PickArray<T,K> = (arr:T[],arr2:K[]|K) => K[] ;

  const arr:T[] = [
    { id: 1, name: "John", age: 25, hasPet: true },
    { id: 2, name: "Mike", age: 30, hasPet: false },
    { id: 3, name: "Mary", age: 20, hasPet: true },
  ];




// User型の配列を受け取り、AgeRange型を受け取り、指定された年齢範囲に該当するユーザーだけを含む配列を返す関数filterUsersByAgeRange実装してください。

// ただし、年齢範囲は、fromとtoの値を含め、両方の値を含むとみなします。

// また、fromとtoの値は、fromがtoよりも大きい場合には、toがfromよりも小さい範囲として扱い、範囲に含まれる値は全て返されるものとします。

type User3 = {
  id: number;
  name: string;
  age: number;
  email: string;
}

type AgeRange = {
  from: number;
  to: number;
}

const users3: User3[] = [
  { id: 1, name: 'Alice', age: 20, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 25, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 30, email: 'charlie@example.com' },
];

const ageRanges:AgeRange = { from: 5, to: 26 };

type IlterUsersByAgeRange<T,K> = (array:T[],obj:K)  => T[] 

const ilterUsersByAgeRange:IlterUsersByAgeRange<User3,AgeRange> = (array,obj) => {
  if(obj.from > obj.to){
    const from = obj.from;
    const to   = obj.to;

    obj.from = to;
    obj.to   = from;
  }
  return array.filter(val => (val.age >= obj.from) && (val.age <= obj.to))
}

console.log(ilterUsersByAgeRange(users3,ageRanges))










// 以下のようなPersonクラスがあります。このクラスには名前と年齢のプロパティがあります。また、インスタンス化されたPersonオブジェクトは自己紹介するメソッドを持ちます。このPersonクラスを継承し、Studentクラスを作成してください。Studentクラスには、Personクラスと同じプロパティの他に、学籍番号と所属するクラス名を表すプロパティがあります。Studentクラスのインスタンス化されたオブジェクトも自己紹介するメソッドを持ちます。

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduceMyself() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  public number:string
  public className:string

  constructor(name:string,age:number,number:string,className:string){
    super(name,age);

    this.number = number
    this.className = className
  }

  introduceMyself() {
    `Hi, I'm ${this.name} and I'm ${this.age} years old. My student ID is ${this.number} and I belong to ${this.className}.`;
  }
}

const student = new Student('Taro', 18, '20220001', '2年A組');
student.introduceMyself();


// ジェネリクスを使って、任意の型の要素を持つ配列を引数に受け取り、配列内の要素を文字列に変換した配列を返す関数を実装してください。ただし、配列内の値の型によって変換後の値が異なるようにしてください。
// number型の場合は、半角数字文字列に変換する
// string型の場合は、そのままの文字列を返す
// その他の型の場合は、空文字列を返す


const changeStringArray = <T>(array:T[]):string[] => {
  return array.map(val => {
    let change:string;
    switch(typeof val){
      case 'number':
        change = val.toString();
        break
      
      case 'string':
        change = val;
        break;

      default :
        change = '';
        break;
    }
    return change;
  })
}

changeStringArray([1, 'two', true, undefined]);


// 文字列の配列を受け取り、配列内の全ての文字列を逆順にして、新しい配列として返す関数を実装してください。ただし、元の配列は変更しないものとします。

const reverseArray = (array:string[]):string[] => {
  return array.reverse()
}

reverseArray(["apple", "banana", "orange"]); // ["elppa", "ananab", "egnaro"]
reverseArray(["hello", "world"]); // ["olleh", "dlrow"]


// 文字列の配列を受け取り、各文字列の先頭と末尾を結合した新しい配列を返すconcatFirstAndLastという関数を実装してください。

const concatFirstAndLast = (array:string[]):string[] => {
  return array.map(val => {
    const start = val.charAt(0)
    const end   = val.slice(-1)
    
    return start + end;
  })
}


const result1 = concatFirstAndLast(['hello', 'world', 'typescript']);
// console.log(result1)


// 配列から、指定されたidのユーザー情報を削除する関数 removeUser を、ジェネリクスを使って実装してください。ただし、削除対象のidが見つからなかった場合は、何もせずに配列をそのまま返すようにしてください。また、元の配列を変更せず、新しい配列を返すようにしてください。

type User = {
  id: number;
  name: string;
  age: number;
  address: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Alice",
    age: 18,
    address: "Tokyo"
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    address: "Osaka"
  },
  {
    id: 3,
    name: "Charlie",
    age: 32,
    address: "Kyoto"
  }
];


const removeUser = <T extends {id:number}>(array:T[],id:number):T[] => {
  // TypeScript はジェネリック型である T に対して id プロパティが存在するとは保証できないため型パラメーター T に id プロパティーが存在することを保証する必要がある
  return array.filter(val => val.id !== id)
  // オブジェクトをdeleteするのではなく該当のオブジェクトを除外する
}


const reuslt2 = removeUser(users, 2);
// console.log(reuslt2);

const result3 = removeUser(users, 4);
// console.log(result3);


// ユーザー情報を格納するオブジェクトの配列が与えられた場合に、各オブジェクトのemailプロパティのドメイン部分を*に置き換える関数replaceEmailDomainを実装してください

interface DomeinUser {
  name: string;
  age: number;
  email: string;
}

const domeinUsers: DomeinUser[] = [
  { name: 'Alice', age: 23, email: 'alice@example.com' },
  { name: 'Bob', age: 38, email: 'bob@example.com' },
  { name: 'Charlie', age: 19, email: 'charlie@example.com' }
];

function replaceEmailDomain<T extends {email:string}>(array:T[]):T[]{
  const result =  array.map(val => {
    const index = val.email.indexOf('@');
    const targetString = val.email.slice(0,index)
    const changeTarget =  val.email.replace(targetString,'*')

    val.email = changeTarget
    return val
  })

  // return array.map(v => ({...v,email:v.email.replace(/^[^@]*/, '*')}))

  return result
}


const result4 = replaceEmailDomain(domeinUsers);
console.log(result4)


// 指定した id を持つ要素を削除する関数 removeItem を実装してください。ただし、配列の要素はオブジェクトで構成されており、オブジェクトは id プロパティを持っているものとします。また、削除する要素が存在しない場合は、配列をそのまま返すものとします。

const items:itemFace[] = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'baz' }
]

interface itemFace {
  id:number
  name:string
}

function removeItem<T extends {id:number}>(array:T[],id:number):T[]{
  return array.filter(val => val.id !== id)
}

const removeItem1 = removeItem(items, 2)
// console.log(removeItem1)

const removeItem2 = removeItem(items, 4)
// console.log(removeItem2)

// age プロパティが 30 歳未満のオブジェクトの配列を取得する関数 getUsersUnder30 を作成してください。ただし、返り値の配列は id の昇順でソートしてください。また、返り値の配列には id, name, age の３つのプロパティが含まれている必要があります。

const users2:userFace[] = [
  { id: 1, name: 'Alice', age: 24 },
  { id: 2, name: 'Bob', age: 32 },
  { id: 3, name: 'Charlie', age: 41 },
  { id: 4, name: 'David', age: 19 },
  { id: 5, name: 'Emily', age: 56 },
];

interface userFace {
  id:number
  name:string
  age:number
}

function getUsersUnder30(array:userFace[]):userFace[]{
  return array.filter(val => val.age < 30).sort((a,b) => a.id - b.id)
}

const usersUnder1 = getUsersUnder30(users2);
// console.log(usersUnder1)


// array という配列が与えられた時、配列の要素のうち、 item というプロパティが value という値を持っている要素を抽出する関数 findItemByValue(array: any[], value: any): any[] を実装してください。ただし、引数の配列の要素には必ず item というプロパティが含まれると仮定して良いものとします。また、引数の配列の要素の型は任意とします。

type findArray = {
  id:number,
  item:string
}

const array:findArray[] = [
  { id: 1, item: 'apple' },
  { id: 2, item: 'banana' },
  { id: 3, item: 'orange' },
  { id: 4, item: 'apple' },
  { id: 5, item: 'orange' },
];

function findItemByValue<T extends {item:string}>(array:T[],value:string):T[]{
  return array.filter(val => val.item == value)
}

const result = findItemByValue(array,'apple')
// console.log(result)




// 関数をカリー化する curry 関数を実装してください。

function square(n: number): number {
  return n * n;
}

function multiply(a: number, b: number): number {
  return a * b;
}

// function curry(func){ 
//    if(func.name == 'square'){
//      return function square(n:number){
//       return n * n;
//      }

//    }else {
//      return function multiply(x:number){
//         return function(y:number){
//           return x * y;
//         }
//      }
//    }
// }

function curry<F extends (...args: any[]) => any>(func: F): F {
  const arity = func.length; 
  // 引数の数を取得
  return function curried(...args: any[]) {
    //スプレット構文で受け取っているのでargsは配列
    if (args.length >= arity) { 
      // 引数が揃った場合は関数を実行して結果を返す
      return func(...args);
    } else { 
      // 引数が足りない場合は次の引数を取る関数を返す
      return function (...nextArgs: any[]) {
        return curried(...args.concat(nextArgs));
      };
    }
  } as F; 
  // F型の戻り値が必要なので型アサーションを行う
}


const curriedSquare = curry(square);
// console.log(curriedSquare(3)); // 9

const curriedMultiply = curry(multiply);
// console.log(curriedMultiply(2)(3)); // 6
// console.log(curriedMultiply(2, 3)); // 6


// 以下の関数を TypeScript でカリー化してください。
function greet(name: string, message: string): string {
  return `${name} says: ${message}`;
}

function curry2(func):any{
  return function curryed2(...arg:any[]){
    if(func.length == arg.length){
      return func(...arg)

    }else {
      return function curryed3(...nextArgs){
        return func(...arg,...nextArgs)
      }
    }
  }
}

const curriedGreet = curry2(greet)// ここにカリー化後の関数を実装する

// console.log(curriedGreet('John')('Hello')); // "John says: Hello"
// console.log(curriedGreet('Alice')('Nice to meet you')); // "Alice says: Nice to meet you"
// console.log(curriedGreet('Bob', 'How are you?')); // "Bob says: How are you?"



// 以下のような配列が与えられた場合、配列内の要素が偶数なら'even'、奇数なら'odd'を出力する関数を作成してください。ただし、for文は使用しないでください。

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenAndOdd(array:number[]):string[]{
  return array.map(val => val % 2 === 0 ? 'even' : 'odd')
}

const result3 = evenAndOdd(arr)
// console.log(result3)


// ユーザー情報から、次のようなオブジェクトを作成する関数convertToRecordを実装してください。
// ただし、引数と戻り値の型を正確に指定してください。
// {
  //   'Alice': { name: 'Alice', age: 25 },
  //   'Bob': { name: 'Bob', age: 30 },
  //   'Charlie': { name: 'Charlie', age: 35 },
  // }

interface convert {
  name:string
  age:number
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

function convertToRecord(array:convert[]):{[key:string]:convert}[]{
  return array.map(val => ({[val.name]:{...val}}))
  // キー名に対する値を指定するには : を使います。そのため、{ val.name: {...val} }のように直接式を記述すると、JavaScriptの文法エラーになります。
  // 新しいキーを追加する場合には[key]:valと記述しないとエラー
}

convertToRecord(users)


// 配列から、年齢が 25 歳以上の人物の名前だけを取り出して、配列で返す関数を作成してください。ただし、戻り値の型は string[] としてください。

const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

interface OverData {
  name:string
  age:number
}

function over25(array:OverData[]):string[]{
  return array.filter(val => val.age >= 25).map(val => val.name)
}

console.log(over25(data))


// 以下の配列から、要素の合計値を計算する関数 sum を作成してください。
// 関数 sum の引数は配列でなければなりません。
// 引数の要素の型は、数値型とは限りません。
// 関数 sum の戻り値は、引数の要素の合計値です。

const sumArr = [1, 2, 3, 4, 5];
// const sumArr = ['a','b'];

function sum<T extends number|string>(array:T[]):T{
  return array.reduce((a,b) => (typeof a === 'number' ? a + Number(b) : `${a}${b}`) , typeof array[0] === 'number' ? 0 : '') as T
}


console.log(sum(sumArr))



// 以下の配列から、重複している要素を削除する関数を作成してください。

const data1 = [1, 2, 3, 4, 2, 3];

function removeDep(array:number[]):number[]{
  return Array.from(new Set(array))
}

console.log(removeDep(data1))


type User = {
  id: number;
  name: string;
  age: number;
  email: string;
}
// 次のような型を作成してください。
// type UserUpdate = {
//   id?: number;
//   name?: string;
//   age?: number;
//   email?: string;
// }

type UserUpdate = Partial<User>;


// 以下の配列fruitsを使用して、fruitTypesという型を作成してください。ただし、fruitTypesは'apple' | 'banana' | 'orange'のいずれかの文字列リテラル型となるようにしてください。

const fruits = ['apple', 'banana', 'orange'] as const;

type fruitType = 'apple' | 'banana' | 'orange';

function filterFruit(array:readonly string[],fruitType:fruitType):string[]{
  return array.filter(val => val === fruitType);
}

console.log(filterFruit(fruits,'orange'))



let str: any    = '123' ;
let strLength:number = (<string>str).length;



// 配列の要素の型は { name: string, age: number } です。
// この配列を受け取り、name プロパティのみを抽出した新しい配列を返す関数 extractNames を実装してください。

// 引数として渡される配列は readonly である。
// 関数の返り値は readonly な string の配列である。

const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

function extractNames(array:readonly {name: string, age: number}[]):readonly string[]{
  return array.map(val => val.name)
}

const names = extractNames(data);
console.log(names); // ['John', 'Jane', 'Bob']


function calculateArea(radius:number|string):number{
  if( typeof radius == 'string' )radius = Number(radius);
  return Math.PI * radius ** 2;
}

console.log(calculateArea('5'));


// users配列から、25歳以上のユーザーのみを抽出する関数filterUsersを実装してください。ただし、filterメソッドを使用してください。また、関数の返り値は新しい配列である必要があります。

type User2 = {
  id: number,
  name: string,
  email: string,
  age: number,
};

const users: User2[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 30 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 20 },
];

function filterUsers(array:User2[]):User2[]{
  return array.filter(val => val.age > 25)
}

console.log(filterUsers(users))

// Person型の配列 peopleがあります。
// peopleの要素がageの降順になるようにソートした新しい配列を返す関数sortByAgeDescendingを実装してください。
// emailがある場合は、ageの降順の中で、emailが存在しない要素よりも前に並ぶようにしてください。
// emailがない要素同士の並び順は問いません。
// ソートアルゴリズムにはバブルソートを使用してください。



type Person = {
  name: string;
  age: number;
  email?: string;
};

const people: Person[] = [
  {  name: "Alice", age: 23 , email:'aaa@' },
  {  name: "Bob", age: 31 },
  {  name: "Charlie", age: 19 },
  {  name: "Dave", age: 45  },
  {  name: "Eve", age: 29 , email:'bbb@' },
];

function sortByAgeDescending(array:Person[]):Person[]{
  const emailSort = array.sort((a,b) => a.age > b.age ? -1 : 1 ).sort((a,b) => a.email ? -1 : 1)
  return emailSort
}

console.log(sortByAgeDescending(people))






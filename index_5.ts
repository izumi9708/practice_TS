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




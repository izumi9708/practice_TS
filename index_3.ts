


// Person というクラスがあり、name、age、email、address というプロパティを持っています。このクラスに対して、email プロパティだけを変更した新しいインスタンスを作成する静的メソッド withNewEmail を実装してください。

class Person {
  public name:string
  public age:number
  public email:string
  public address:string

  constructor(name:string,age:number,email:string,address:string){
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }

  static withNewEmail(person:Person):void{
    person.email = 'aaa@gmail.com';
  }
}

const person = new Person('taro',53,'taro@gmail.com','東京都渋谷区');
Person.withNewEmail(person)
console.log(person)


// filterAsync という関数を実装してください。この関数は、配列と非同期関数を引数として受け取り、配列の各要素を非同期関数で処理し、条件に合致するものだけを新しい配列として返します。Promise.all を利用して実装してください。

async function filterAsync(array,func){

  const result = await Promise.all(array.map(async val => {
    const result = await func(val);
    if(result)return val
  }))
  return result.filter( val => val )

}

// async function filterAsync(array,func){
//   const result = array.map(async val => {
//     const judge =  await func(val)
//     if(judge)return val
//   })
  
//   let arra = [];
//   const resultMap = result.forEach(val => {
//     val.then(res => {
//       if(res)arra.push(val)
//     })
//   })

//   console.log(resultMap)
  
// }

const array = [1, 2, 3, 4, 5, 6];

filterAsync(array,isDivisible)
.then(res => console.log(res))

function isDivisible(number:number):Promise<boolean>{
  return new Promise((resolve) => {
      resolve( number % 3 === 0);
  })
}


// SomeType という型があり、someObject という名前のオブジェクトがあります。このオブジェクトは、SomeType のすべてのプロパティを持っています。keyof SomeType を用いて、someObject のすべてのプロパティの名前を取得する関数 getPropertyNames を実装してください。


type SomeType = {
  foo: number;
  bar: string;
  baz: boolean;
};

const someObject: SomeType = {
  foo: 123,
  bar: "hello",
  baz: true,
};

function getPropertyNames(obj:SomeType){
  return Object.keys(obj) as (keyof SomeType)[]
}

const propNames = getPropertyNames(someObject);
console.log(propNames); // ["foo", "bar", "baz"]



// 診断テスト
interface Person {
  name: string;
  age: number;
}

type SquareNumberFn = (x: number) => number;

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

function identity<T>(arg: T): T {
  return arg;
}

type Car = {
  make: string;
  model: string;
  year: number;
};

type PartialCar = {
  [K in keyof Car]?: Car[K];
};

interface Bird {
  name: string;
  wingspan: number;
  fly(): void;
}

type WingedAnimal = Animal & Bird;

type User = {
  name: string;
  age: number;
  address?: {
    city: string;
    prefecture: string;
  };
};

type UserWithoutOptionalProps = {
  [K in keyof User as Exclude<keyof User, "address">]: User[K];
};


// Person インターフェースのプロパティのうち、任意のプロパティを持つ新しい型 PartialPerson を定義する方法は何ですか？

interface PartialPerson extends Person {
  gender?:string
}

// Person インターフェースのプロパティのうち、プロパティ名だけを持つ新しい型 KeyofPerson を定義する方法は何ですか？

type KeyofPerson = keyof Person;

// Person インターフェースを受け取り、name プロパティの値を返す関数 getPersonName を定義してください。

function getPersonName(person:Person){
  return person.name;
}

const obj:Person = {
  name:'bob',
  age:30
}

console.log(getPersonName(obj))


// 数字を受け取り、その2乗を返す関数型 SquareNumberFn を定義してください。

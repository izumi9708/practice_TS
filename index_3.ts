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


// 数字を受け取り、その2乗を返す関数型 SquareNumberFn を定義してください
type SquareNumberFn = (num:number) => number;

const squareNumber:SquareNumberFn = (num) => num * num;
console.log(squareNumber(6));



// Animal クラスを定義し、name プロパティを持ち、speak メソッドを持つようにしてください。
class Animal {
  public name:string;

  constructor(name:string){
    this.name = name;
  }

  speak(){}
}


// Dog クラスを定義し、Animal クラスを継承し、speak メソッドをオーバーライドして barks. と出力するようにしてください。
class Dog extends Animal {
  constructor(name:string){
    super(name);
    
  }
  speak(){
    console.log('barks');
  }
}

const dog = new Dog('dog');
dog.speak()


// ジェネリック関数 identity を定義してください。この関数は引数として受け取った値をそのまま返しま
function identity<T>(x:T):T{
  return x;
}

identity<string>('a')


// Car 型を定義し、make、model、year プロパティを持つようにしてください。さらに、Partial 型を用いて PartialCar 型を定義してください。

type CarPropery =  {
  make:number
  model:string
  year:number
}

type PartialCar = Partial<CarPropery>;


class Car  {
  public make:number
  public model:string
  public year:number

  constructor(obj:PartialCar){
    this.make = obj.make;
    this.model = obj.model
    this.year = obj.year
  }
}

const car = new Car({ make: 2022, model: "Model X", year: 2022 })


// Animal クラスを拡張して Bird インターフェースを実装する WingedAnimal クラスを定義してください。WingedAnimal クラスは、Animal クラスの機能をすべて継承し、さらに以下の Bird インターフェースのプロパティとメソッドを実装します。

// wingspan プロパティ (数値)
// fly メソッド (戻り値なし)
// また、WingedAnimal クラスのコンストラクタは、引数として Animal クラスのコンストラクタで受け取る引数に加えて、wingspan 引数も受け取ります。

interface Bird {
  wingspan:number
  fly():void
}

class WingedAnimal extends Animal implements Bird {
  public wingspan:number

  constructor(wingspan:number,name:string){
    super(name);
    this.wingspan = wingspan;
  }

  fly(){}
}


// オプショナルプロパティを持つインターフェースの定義方法を説明してください。

interface Optional {
  name?:string
  age?:number
}


// 以下のような Partial 型の定義がある場合、この型を使用して指定されたプロパティを持つオブジェクトの一部のプロパティを省略した新しいオブジェクトを作成する方法を示してください。

interface PartialExample {
  name: string;
  age: number;
  address: string;
}

type PartialObject = Partial<PartialExample>;

const exampleObj:PartialObject = {
  name:'taro',
  age:40,
  address:'tokyo'
}

console.log(exampleObj)


// 以下のような条件付き型の定義がある場合、この型を使用して指定された型 T が boolean 型かどうかを判定する方法を示してください。
type IsBoolean<T> = T extends boolean ? true : false;

const judge:IsBoolean<boolean> = true;


// 以下のような条件付き型の定義がある場合、この型を使用して指定された型 T が配列かどうかを判定する方法を示してください。
type IsArray<T> = T extends any[] ? true : false;

const array:IsArray<number[]> = true;


// 以下のようなインターフェースの定義がある場合、このインターフェースを継承する新しいインターフェースを定義し、新しいインターフェースで追加されたプロパティを持つオブジェクトを作成する方法を示してください。

interface Example {
  name: string;
  age: number;
}

interface Address extends Example {
  address:string
}

const obj:Address = {
  name:'taro',
  age:20,
  address:'tokyo'
}


// 以下のような配列がある場合、Array.filter()を使用して、数値が5以下の要素だけを含む新しい配列を作成してください。
const arr: number[] = [2, 6, 8, 1, 3, 5, 7, 9];

const newArr:number[] = arr.filter(val => val <= 5);
console.log(newArr)


// ある数値配列が与えられたとき、その中で出現回数が最も多い要素を返す関数findMostFrequentを実装してください。


function findMostFrequent<T extends string | number | symbol>(arr: T[]): T | null {
  const fil = arr.reduce((prev, current) => {
    prev[current] = prev[current] ? prev[current] + 1 : 1
    return prev
  }, {} as Record<T, number>)
  
  const max    = Object.keys(fil).map(val => fil[val]).reduce((a,b) => Math.max(a,b));
  const result = Object.keys(fil).find(val => fil[val] == max)

  return result ? result as unknown as T : null
  // unknown型を挟むことによって、unknown型とT型の間に変換可能性があると判断
}

const arr1 = [1, 3, 3, 3, 2, 2, 2, 2];
const arr2 = ['a', 'b', 'c', 'c', 'c', 'd', 'd', 'e', 'e', 'e', 'e'];

console.log(findMostFrequent<number>(arr1)); // => 2
console.log(findMostFrequent<string>(arr2)); // => 'e'


// 以下のような、文字列の配列 strings と、ターゲットの文字列 target が与えられたとき、strings 中で target に一番近い文字列を返す関数 findClosestString を TypeScript で実装してください。strings の中に target と等しい文字列がある場合は、その文字列を返してください。

// function findClosestString(array:string[],target:string):string {
//   let obj = {}
//   const result = array.forEach( val => {
//     const findArray   = val.split('')
//     const targetArray = target.split('')
    
//     const result = findArray.filter(item => targetArray.includes(item))

//     console.log(result)

//     obj[val] = result.length
//   })

//   console.log(obj)
// }

// const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// console.log(findClosestString(strings, 'berry')); // => 'cherry'

// 解答
function findClosestString(arr: string[], str: string): string | null {
  let closest: string | null = null;
  let minDiff = Infinity;
  for (const s of arr) {
    const diff = levenshteinDistance(s, str);
    if (diff < minDiff) {
      minDiff = diff;
      closest = s;
    }
  }
  return closest;
}

function levenshteinDistance(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  const distances = new Array<number[]>(m + 1);
  for (let i = 0; i <= m; i++) {
    distances[i] = new Array<number>(n + 1);
    distances[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    distances[0][j] = j;
  }
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      const deletion = distances[i - 1][j] + 1;
      const insertion = distances[i][j - 1] + 1;
      const substitution = distances[i - 1][j - 1] + (s1[i - 1] === s2[j - 1] ? 0 : 1);
      distances[i][j] = Math.min(deletion, insertion, substitution);
    }
  }
  return distances[m][n];
}

const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(findClosestString(strings, 'berry')); // => 'cherry'
console.log(findClosestString(strings, 'bananna')); // => 'banana'
console.log(findClosestString(strings, 'daple')); // => 'apple'
console.log(findClosestString(strings, 'fig')); // => 'date'



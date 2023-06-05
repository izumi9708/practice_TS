// 以下の型 Person を使用して、次の条件を満たす型 PartialPerson を定義してください。

// Person 型の全てのプロパティを持ちます。
// 全てのプロパティがオプショナル（undefined もしくはそのプロパティの型の値を持つ可能性がある）となります。

type Person8 = {
  id: number;
  name: string;
  age: number;
  address: string;
};

type PartialPerson3 = Partial<Person8>


// 以下の型 User を使用して、次の条件を満たす型 FilteredUser を定義してください。

// User 型の一部のプロパティを持ちます。
// id プロパティは存在しないこととします。
// name プロパティは存在し、かつ文字列型であることとします。
// age プロパティは存在し、かつ数値型であることとします。

type User7 = {
  id: number;
  name: string;
  age: number;
  email: string;
  address: string;
};

type FilterUser = Pick<User7,'id'|'name'|'age'>


// 以下の型 Book を使用して、次の条件を満たす型 FilteredBook を定義してください。

// Book 型の一部のプロパティを持ちます。
// title プロパティは存在し、かつ文字列型であることとします。
// author プロパティは存在し、かつ文字列型であることとします。
// price プロパティは存在しないこととします。


type Book = {
  title: string;
  author: string;
  price: number;
  genre: string;
  pageCount: number;
};

type FilteredBook = Pick<Book,'title'|'author'>



// 以下の条件を満たす TypeScript の関数 filterByLength を定義してください。

// 関数 filterByLength は、文字列の配列を受け取り、指定された長さ以上の文字列のみをフィルタリングして新しい配列として返します。
// 関数のシグネチャは以下の通りです：
// 関数名: filterByLength
// パラメータ: arr (文字列の配列), length (数値)
// 戻り値: string[] (文字列の配列)

type FilterByLength = <T extends string>(arr:T[],length:number) => T[];
const filterByLength:FilterByLength = (arr,length) => {
  return arr.filter(val => val.length > length);
}

const words = ['apple', 'banana', 'car', 'dog', 'elephant'];
const filteredWords = filterByLength(words, 4);
// console.log(filteredWords); // 出力: ['apple', 'banana', 'elephant']


// 以下の条件を満たす TypeScript の関数 convertToUpperCase を定義してください。

// 関数 convertToUpperCase は、文字列の配列を受け取り、全ての文字列を大文字に変換した新しい配列を返します。
// 関数のシグネチャは以下の通りです：
// 関数名: convertToUpperCase
// パラメータ: arr (文字列の配列)
// 戻り値: string[] (文字列の配列)

type ConvertToUpperCase = (arr:string[]) => string[] 
const convertToUpperCase:ConvertToUpperCase = (arr) => {
  return arr.map(val => val.toUpperCase())
}

const upperCaseWords = convertToUpperCase(words);
// console.log(upperCaseWords); // 出力: ['APPLE', 'BANANA', 'CAR', 'DOG', 'ELEPHANT']




// 以下の条件を満たす TypeScript の関数 sumArray を定義してください。

// 関数 sumArray は、数値の配列を受け取り、配列内の要素の合計値を返します。
// 関数のシグネチャは以下の通りです：
// 関数名: sumArray
// パラメータ: arr (数値の配列)
// 戻り値: number (数値)

const numbers3 = [1, 2, 3, 4, 5];
const sum = sumArray(numbers3);
// console.log(sum); // 出力: 15

function sumArray2(arr:number[]):number {
  return arr.reduce((a,b) => a + b)
}



// 以下の条件を満たす TypeScript の関数 getUniqueValues を定義してください。

// 関数 getUniqueValues は、配列内の重複した値を除去し、ユニークな値の配列を返します。
// 関数のシグネチャは以下の通りです：
// 関数名: getUniqueValues
// パラメータ: arr (任意の型の配列)
// 戻り値: T[] (任意の型の配列)

const numbers4 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = getUniqueValues(numbers4);
// console.log(uniqueNumbers); // 出力: [1, 2, 3, 4, 5]

const words2 = ['apple', 'banana', 'apple', 'car', 'banana'];
const uniqueWords = getUniqueValues(words2);
// console.log(uniqueWords); // 出力: ['apple', 'banana', 'car']

function getUniqueValues<T>(arr:T[]):T[]{
  return Array.from(new Set(arr));
}



// 以下の条件を満たす TypeScript の関数 getObjectKeys を定義してください。

// 関数 getObjectKeys は、与えられたオブジェクトのキーを文字列の配列として返します。
// 関数のシグネチャは以下の通りです：
// 関数名: getObjectKeys
// パラメータ: obj (任意の型のオブジェクト)
// 戻り値: string[] (文字列の配列)

const user2:User8 = {
  id: 1,
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

type GetObjectKyes<T> = (obj:T) => string[];
const getObjectKeys:GetObjectKyes<User2> = (obj) => {
  return Object.keys(obj);
}

const keys = getObjectKeys(user2);
console.log(keys); // 出力: ['id', 'name', 'age', 'email']

type User8 = {
  id:number;
  name:string;
  age:number;
  email:string;
}
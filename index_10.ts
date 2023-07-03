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


// 関数 mergeObjects は、複数のオブジェクトを受け取り、それらをマージして新しいオブジェクトを返します。
// マージの際、同じキーが存在する場合は後のオブジェクトの値で上書きされます。
// 関数のシグネチャは以下の通りです：
// 関数名: mergeObjects
// パラメータ: objs (任意の数のオブジェクト)
// 戻り値: マージされたオブジェクト

const obj4 = { name: 'John', age: 30 };
const obj5 = { age: 35, email: 'john@example.com' };
const obj6 = { address: '123 Main St' };

const mergeObjects2 = (...obj:object[]) => {
  const resultObj = {};
  obj.forEach(val => {
    const obj2 = Object.keys(val)
    
    obj2.forEach(val2 => {
      if(!resultObj[val2]){
        resultObj[val2] = val[val2]
      }
    })
  })

  return resultObj
}
const mergedObj = mergeObjects2(obj4, obj5, obj6);

// console.log(mergedObj); // 出力: { name: 'John', age: 35, email: 'john@example.com', address: '123 Main St' }


// 与えられた配列の要素を逆順に並べ替える reverseArray という関数を作成してください。ただし、新しい配列を作成せずに元の配列を直接変更するようにしてください。

function reverseArray<T>(arr: T[]): void {
  arr.reverse();
}

const numbers5 = [1, 2, 3, 4, 5];
reverseArray(numbers5);
// console.log(numbers);



// getUser 関数を使って、getUserList という関数を作成してください。getUserList 関数は、与えられた id の配列を使って、複数のユーザー情報を非同期に取得し、その結果を配列として返します。

async function getUser(id: number): Promise<{ id: number, name: string, age: number }> {
  const user = { id: 1, name: 'John Doe', age: 30 };
  return user;
}

async function getUserList(ids: number[]): Promise<{ id: number, name: string, age: number }[]> {
  const array = [];

  for(let i of ids){
    await getUser(i).then(res => res.id === i ? array.push(res):'')
  }

  return array;
}

const ids = [1, 2, 3];
getUserList(ids).then((users) => {
  // console.log(users);
});



// 与えられた数値の配列 numbers を受け取り、奇数の要素だけを抽出して新しい配列として返す関数 filterOddNumbers を実装してください。
function filterOddNumbers(numbers: number[]): number[] {
  return numbers.filter(val => val % 2 !== 0)
}

const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterOddNumbers(numbers6);
// console.log(oddNumbers); // 出力: [1, 3, 5, 7, 9]



// / 配列内の数値要素をすべて2倍にする関数 doubleNumbers を作成してください。

  // 入力: numbers: number[] - 数値の配列
  // 出力: number[] - 数値要素が2倍になった新しい配列

  const numbers7 = [1, 2, 3, 4, 5];

  type DoubleNumbers2 = (numbers:number[]) => number[];
  const doubleNumbers2:DoubleNumbers2 = (numbers) => {
    return numbers.map(val => val * 2);
  }
  const doubled = doubleNumbers2(numbers7);
  console.log(doubled); // 出力: [2, 4, 6, 8, 10]

  // joinArray 関数を実装してください。この関数は、与えられた文字列の配列を結合して、1つの文字列として返します。

type JoinArray = (arr: string[], separator: string) => string;

const joinArray: JoinArray = (arr, separator) => {
  return arr.join(separator)
};

const fruits3 = ["apple", "banana", "orange"];
const joined = joinArray(fruits3, ", ");

// console.log(joined); // 出力: "apple, banana, orange"



// 数値の配列が与えられた場合、配列内の要素の合計値を返す関数 sumArray を TypeScript で定義してください。

const sumArray3 = (array:number[]):number => {
  return array.reduce((a,b) => a + b)
}

const numbers10 = [1, 2, 3, 4, 5];
const sum2 = sumArray3(numbers10);
// console.log(sum2); // 出力: 15



// 配列内の数値要素をすべて2倍にする関数 doubleArray を定義してください。

const numbers8 = [1, 2, 3, 4, 5];

type DoubleNumbers3 = (array:number[]) => number[]
const doubleArray3:DoubleNumbers = (array) => {
  return array.map(val => val * 2);
}

const doubledNumbers = doubleArray(numbers8);
// console.log(doubledNumbers); // 出力: [2, 4, 6, 8, 10]



// 文字列の配列 words が与えられたとき、各文字列の長さを返す関数 getWordLengths を作成してください。ただし、返される配列の要素は各文字列の長さと同じ順序でなければなりません。

const words = ['apple', 'banana', 'car'];
const lengths = getWordLengths(words);

function getWordLengths(array:string[]):number[]{
  return array.map(val => val.length);
}
// console.log(lengths); // 出力: [5, 6, 3]



// 与えられた文字列の配列から特定の文字列を検索する関数 searchString を実装してください。

// searchString 関数は2つの引数を受け取ります：array（文字列の配列）と search（検索する文字列）。
// searchString 関数は、array 内の各文字列を検査し、search 文字列と完全に一致する場合にその文字列を含む新しい配列を返します。
// 大文字と小文字は区別されます。つまり、一致する文字列は完全に一致する必要があります。
// 一致する文字列が見つからない場合、空の配列を返します。

const words2 = ['apple', 'Banana', 'Car', 'apple', 'car'];
const searchWord = 'ar';

type SearchString = (array:string[],word:string) => string[]
const searchString:SearchString = (array,word) => {
  return array.filter(val => val.indexOf(word) !== -1)
}

const searchResults = searchString(words2, searchWord);
// console.log(searchResults); // 出力: ['Car', 'car']



// 以下の配列から、重複している要素を削除する関数removeDuplicatesを実装してください。ただし、元の配列の順序は保持するものとします。

const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 1, 4];

const removeDuplicates = (array) => {
  return Array.from(new Set(array))

}
// console.log(removeDuplicates(numbers))



// 与えられた数値の配列から、最大値と最小値を取得する関数 getMinMax(numbers: number[]): { min: number, max: number } を実装してください。返り値は最小値と最大値を持つオブジェクトです。
// 高階関数（map、filter、reduceなど）を使用して解答してください。
// Mathオブジェクトなどの組み込み関数やメソッドを使用しないでください。


type MaxMin = {
  max:number,
  min:number
}
type FilterMaxMin = (array:number[]) => MaxMin;
const filterMaxMin:FilterMaxMin = (array) => {
  const result:MaxMin = {max:0,min:0};

  const sort = array.sort((a,b) => a - b);

  result.min = sort[0];
  result.max = sort[sort.length - 1];
  
  return result
}

// console.log(filterMaxMin([10, 5, 8, 3, 12]));


// 数字の配列が与えられたとき、重複している数字をすべて取り除いた配列を返す関数 removeDuplicates を実装してください。

// 配列の要素は整数とします。
// 配列の要素の順序は保持する必要があります。
// 追加のデータ構造（Setなど）を使用せず、配列内での操作のみを使用して解決してください。
// filter や indexOf、includes メソッドは使用しないでください。
// 解答には関数 removeDuplicates の実装のみを含めてください。実行結果の表示は不要です。

const numbers = [1, 2, 3, 2, 4, 3, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // 出力: [1, 2, 3, 4, 5]

function removeDuplicates(array:number[]):number[]{
  const resultArray = [];

  for(let i of array){
    let result = false;

    for(let o of resultArray){
      if(i == o){
        result = true;
      }
    }

    if(!result){
      resultArray.push(i)
    }
  }

  return resultArray;

}


// 配列内の数値要素の平均値を計算する関数 calculateAverage を実装してください。以下の要件を満たすようにしてください。

// 関数名: calculateAverage
// 引数: 数値の配列 array
// 返り値: 数値型の平均値
// 制約: 高階関数や組み込みのメソッド（reduce、forEach、reduceRight、mapなど）は使用せず、forループを使用して計算すること

const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);

function calculateAverage(array:number[]):number{
  let add:number = 0;

  for(let i of array){
    add += i;
  }
  
  return add / array.length;
}
// console.log(average); // 出力: 3


// 与えられた文字列が回文（前から読んでも後ろから読んでも同じ結果になる）かどうかを判定する関数 isPalindrome を実装してください。関数は以下の仕様を満たすものとします。

// isPalindrome 関数は、引数として文字列を受け取り、その文字列が回文であるかどうかを真偽値で返します。
// 回文である場合は true を、回文でない場合は false を返します。
// 文字列の判定は、大文字と小文字を区別します。つまり、大文字と小文字が異なる場合は回文ではありません。

// for ループや高階関数（map、filter、reduce など）は使用せず、ループ処理を行わない方法で実装してください。
// 文字列を反転させるための組み込み関数（reverse、join など）は使用せずに、別のアプローチを取ってください。


function isPalindrome(str:string):boolean{
  let strSplit:string[] = str.split('');
  let strArray:string[] = [];
  let index = str.length;

  for(let i of str){
    index--

    strArray.push(strSplit[index]);
  }

  let resultStr:string = '';
  for(let i of strArray){
      resultStr += i;
  }

  return str === resultStr ? true : false
}

// console.log(isPalindrome("level")); // 出力: true
// console.log(isPalindrome("Hello")); // 出力: false
// console.log(isPalindrome("A car, a man, a maraca")); // 出力: false
// console.log(isPalindrome("racecar")); // 出力: true


// 以下の要件を持つ関数の型情報の実装を求めます。

// 要件：

// 関数名: filterByProperty
// 引数:
// array: オブジェクトの配列
// property: プロパティ名（文字列）
// value: プロパティの値
// 戻り値: property の値が value と等しいオブジェクトの配列

interface Users {
  name:string;
  age:number
}
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

type FilterByProperty = <T>(array:T[],property:string,value:number) => T[];

const filterByProperty:FilterByProperty = (array,property,value) => {
  return array.filter(val => val[property] === value)
}

const filteredUsers = filterByProperty<Users>(users, 'age', 30);
// console.log(filteredUsers);
// 出力: [{ name: 'Bob', age: 30 }]



// TypeScriptにおけるジェネリクスを使用して、配列の要素を指定の数だけ複製する関数 duplicateArrayElements の型を実装してください。

// 要件:

// duplicateArrayElements 関数は、array 引数と count 引数を受け取ります。
// array 引数はジェネリクスの型パラメータ T の配列とします。
// count 引数は複製する回数を表す数値です。
// duplicateArrayElements 関数は、array の要素を count 回繰り返した新しい配列を返します。
// 返される配列の要素の順序は、元の配列の順序を保持したまま複製されます。

const numbers = [1, 2, 3];

type DeplicateArrayElements = <T>(array:T[],count:number) => T[] ;

const duplicateArrayElements:DeplicateArrayElements = <T>(array,count) => {
  const duplicatedArray: T[] = [];

  for (let i = 0; i < count; i++) {
    duplicatedArray.push(...array);
  }

  const resultArray:T[] = [...duplicatedArray];
  
  return resultArray.sort();
}

const duplicatedNumbers = duplicateArrayElements(numbers, 3);
// console.log(duplicatedNumbers);
// 出力: [1, 1, 1, 2, 2, 2, 3, 3, 3]

const fruits = ['apple', 'banana'];
const duplicatedFruits = duplicateArrayElements(fruits, 2);
// console.log(duplicatedFruits);
// 出力: ['apple', 'apple', 'banana', 'banana']



// 以下の条件に基づいて、与えられた数値配列から偶数のみを抽出して新しい配列を作成する関数を実装してください。

// 条件:

// 関数名は filterEvenNumbers とします。
// 入力として数値の配列 numbers を受け取り、偶数のみを抽出した新しい配列を返します。
// 抽出される偶数の順序は元の配列と同じである必要があります。
// 元の配列に偶数が存在しない場合は、空の配列を返します


const filterEvenNumbers = (numbers:number[]):number[] => {
  return numbers.filter(val => val % 2 === 0)
}

const numbers1 = [1, 2, 3, 4, 5, 6];
// console.log(filterEvenNumbers(numbers1)); // 出力: [2, 4, 6]

const numbers2 = [1, 3, 5, 7];
// console.log(filterEvenNumbers(numbers2)); // 出力: []

const numbers3 = [2, 4, 6, 8];
// console.log(filterEvenNumbers(numbers3)); // 出力: [2, 4, 6, 8]




// 上記の問題では、filterUsersという関数を実装する必要があります。この関数は、与えられたusers配列から指定された条件に一致するユーザーのみをフィルタリングして新しい配列として返します。条件はPartial<User>型であり、User型のプロパティの一部または全部を含むことができます。条件に一致するユーザーのみが結果として返されるように実装してください。
type User = {
  id: string;
  name: string;
  age: number;
  isAdmin: boolean;
};

type FilterUsers = (users: User[], conditions: Partial<User>) => User[];

const filterUsers: FilterUsers = (users, conditions) => {
  return users.filter(val => val.age >= conditions.age && val.isAdmin === conditions.isAdmin)
};

const users: User[] = [
  { id: '1', name: 'Alice', age: 25, isAdmin: false },
  { id: '2', name: 'Bob', age: 30, isAdmin: true },
  { id: '3', name: 'Charlie', age: 20, isAdmin: false },
  { id: '4', name: 'David', age: 35, isAdmin: true },
];

const filteredUsers = filterUsers(users, { age: 30, isAdmin: true });
// console.log(filteredUsers);
// 出力: [{ id: '2', name: 'Bob', age: 30, isAdmin: true }, { id: '4', name: 'David', age: 35, isAdmin: true }]



// 以下の関数 groupByProperty を実装してください。

type GroupByProperty = <T>(array:T[],property:keyof T) => {[key:string]:T[]}

const groupByProperty: GroupByProperty = <T>(array, property) => {
  let obj:{[key:string]:T[]} = {};

  for(let i of array){
    if(!obj[i[property]]){
      obj[i[property]] = [i];

    }else {
      obj[i[property]] = [...obj[i[property]],i]
    }
  }

  return obj;
};

const users2 = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 25 },
  { id: 4, name: 'Dave', age: 30 }
];

interface Users2 {
  id:number;
  name:string;
  age:number;
}

const groupedUsers = groupByProperty<Users2>(users2, 'age');
// console.log(groupedUsers);
// 出力:
// {
//   25: [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 3, name: 'Charlie', age: 25 }
//   ],
//   30: [
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 4, name: 'Dave', age: 30 }
//   ]
// }


// ypeScriptでジェネリック関数mergeObjectsを実装してください。この関数は、複数のオブジェクトを受け取り、それらをマージして1つのオブジェクトに結合します。オブジェクトのプロパティ名は重複しないものとします。

// 要件:

// mergeObjectsはジェネリック関数として実装します。引数として可変長のオブジェクトを受け取ります。
// 各オブジェクトのプロパティを結合し、1つのオブジェクトにまとめます。
// プロパティの値は、後に渡されたオブジェクトの値で上書きされます。
// プロパティ名の重複がある場合は、後に渡されたオブジェクトの値が優先されます。
// 結果のオブジェクトは、全てのプロパティを含んでいる必要があります。


function mergeObjects<T extends object>(...objects: T[]) {
  let obj = {};

  for(let i of objects){
    const keys = Object.keys(i);
    
    for(let o of keys){
      obj[o] = i[o]
    }
  }

  return obj;
}

type ObjType = {name:string,age:number,city:string,language:string};
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { age: 30, city: 'Tokyo' };
const obj3 = { city: 'Osaka', language: 'Japanese' };

// const mergedObj = mergeObjects(obj1, obj2, obj3);
// console.log(mergedObj);
// 出力: { name: 'Alice', age: 30, city: 'Osaka', language: 'Japanese' }



// TypeScriptでジェネリック関数getAverageを実装してください。この関数は、数値の配列を受け取り、その平均値を計算して返します。

// 要件:

// getAverageはジェネリック関数として実装します。引数として数値の配列を受け取ります。
// 配列の要素は数値型であることが前提とされます。
// 配列の要素の平均値を計算し、小数点以下は切り捨てた整数値として返します。


function getAverage<T extends number>(array:T[]):number{
  return array.reduce((a,b) => a + b,0) / array.length;
}

const numbers4 = [1, 2, 3, 4, 5];
// console.log(getAverage(numbers4)); // 出力: 3

const numbers5 = [10, 20, 30, 40, 50];
// console.log(getAverage(numbers5)); // 出力: 30


// TypeScriptのジェネリック関数filterArrayを実装してください。この関数は、配列と条件関数を受け取り、条件関数を満たす要素のみを抽出した新しい配列を返します。

// 要件:

// filterArrayはジェネリック関数として実装します。引数として配列と条件関数を受け取ります。
// 条件関数は、配列の要素を受け取り、真偽値を返すものとします。
// filterArrayは、条件関数を満たす要素だけを含む新しい配列を返します。

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter(val => condition(val))
}

const numbers6 = [1, 2, 3, 4, 5];

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const evenNumbers = filterArray(numbers6, isEven);
// console.log(evenNumbers); // 出力: [2, 4]


// TypeScriptでジェネリック関数findDuplicatesを実装してください。この関数は、配列内の重複する要素を検出し、重複している要素の配列を返します。
// findDuplicatesはジェネリック関数として実装します。引数として配列を受け取ります。
// 配列内の重複する要素を検出し、重複している要素の配列を返します。
// 返される配列は、重複した順序で並べられている必要があります。
// 配列内に重複がない場合は、空の配列を返します。

function findDuplicates<T>(array: T[]): T[] {
  // 実装する
}

const numbers = [1, 2, 3, 4, 4, 5, 2, 6, 7, 5];
const duplicates = findDuplicates(numbers);
console.log(duplicates);
// 出力: [4, 2, 5]




// TypeScriptでジェネリック関数findDuplicatesを実装してください。この関数は、配列内の重複する要素を検出し、重複している要素の配列を返します。
// findDuplicatesはジェネリック関数として実装します。引数として配列を受け取ります。
// 配列内の重複する要素を検出し、重複している要素の配列を返します。
// 返される配列は、重複した順序で並べられている必要があります。
// 配列内に重複がない場合は、空の配列を返します。

function findDuplicates<T>(array: T[]): T[] {
  return array.filter((val,index,array) => array.indexOf(val) !== index)
}

const numbers7 = [1, 2, 3, 4, 4, 5, 2, 6, 7, 5];
const duplicates = findDuplicates(numbers7);
// console.log(duplicates);
// 出力: [4, 2, 5]



// 以下の要件を満たすfilterObjects関数を実装してください。

// filterObjects関数はジェネリック関数として実装します。
// 2つの引数を受け取ります: arrayとcondition。
// arrayはオブジェクトの配列です。
// conditionはオブジェクトを受け取り、真偽値を返す関数です。
// filterObjects関数は、arrayの各要素に対してcondition関数を適用し、真と評価された要素だけからなる新しい配列を返します。

interface Person {
  name: string;
  age: number;
}

type FilterObject = <T extends Person>(array:T[],condition:(person:Person) => boolean) => T[];
const filterObject:FilterObject = (array,condition) => {
  return array.filter(val => condition(val))
}

const people: Person[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
];

function isAdult(person: Person): boolean {
  return person.age >= 18;
}

const adults = filterObject(people, isAdult);
// console.log(adults);
// 出力: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]


// ジェネリック関数mergeArraysを実装してください。この関数は、可変長の配列を受け取り、それらを結合して1つの配列にします。ただし、入力配列の要素の型はすべて同じであるものとします。

// 要件:

// mergeArraysはジェネリック関数として実装します。引数として可変長の配列を受け取ります。
// 受け取った配列を結合し、1つの配列にします。
// 結果の配列は、入力配列の要素を順番に結合したものとします。

type MergeArrays = <T>(...array: T[][]) => T[]; 
const mergeArrays: MergeArrays = (...array) => {
  const result = [];
  const mergedArray = result.concat(...array);

  return mergedArray;
}

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = [true, false];

const mergedArray = mergeArrays<number | string | boolean>(array1, array2, array3);
// console.log(mergedArray);
// 出力: [1, 2, 3, 'a', 'b', 'c', true, false]


// 以下のコードを修正して、与えられた文字列配列（array）内の全ての要素を大文字に変換するtoUpperCaseArrayという関数を実装してください。ただし、toUpperCaseArray関数は新しい配列を返すものとします。

function toUpperCaseArray(array: string[]): string[] {
  return array.map(val => val.toUpperCase())
}

const fruits = ['apple', 'banana', 'orange'];
const uppercasedFruits = toUpperCaseArray(fruits);
console.log(uppercasedFruits);
// 出力: ['APPLE', 'BANANA', 'ORANGE']



// 問題:
// 以下の関数countOccurrencesを実装してください。この関数は、与えられた配列内で各要素が出現する回数をカウントし、その結果をオブジェクトとして返します。

function countOccurrences<T>(array: T[]): { [key in T]: number } {
  let result: { [key in T]: number } = {};

  for (let i of array) {
    if (!result[i]) {
      result[i] = 1;
    } else {
      result[i] = result[i] + 1;
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 3, 2, 1];
const numberOccurrences = countOccurrences(numbers);
console.log(numberOccurrences);
// 出力: {1: 2, 2: 2, 3: 2, 4: 1}

const fruits = ['apple', 'banana', 'orange', 'banana', 'apple'];
const fruitOccurrences = countOccurrences(fruits);
console.log(fruitOccurrences);
// 出力: {apple: 2, banana: 2, orange: 1}



// 次の要件を満たす関数を実装してください。
// 関数名: flattenArray
// 入力: T[][] (ジェネリックな2次元配列)
// 出力: T[] (フラット化された1次元配列)
// 要件:
// 入力として与えられた2次元配列をフラット化し、1次元配列として返します。
// フラット化とは、入れ子になった配列を展開して1つの配列にすることを意味します。
// 入力として与えられる2次元配列は任意の深さと長さを持つことができます。

type FlattenArray = <T>(array:T[][]) => T[];
const flattenArray:FlattenArray = (array) => {
  const result = [];
  const flatten = (array) => {
    for(let i of array){
      if(Array.isArray(i)){
        flatten(i);

      }else {
        result.push(i)
      }
    }
  }

  flatten(array);

  console.log(result)
}

const array1 = [1, [2, 3], [4, [5, 6]]];
console.log(flattenArray<number>(array1)); 
// 出力: [1, 2, 3, 4, 5, 6]

const array2 = [['a', 'b'], ['c'], ['d', 'e', ['f']]];
console.log(flattenArray<string>(array2)); // 出力: ['a', 'b', 'c', 'd', 'e', 'f']


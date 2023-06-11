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





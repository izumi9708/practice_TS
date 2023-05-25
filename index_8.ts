// 指定された時間（秒）だけ待機する関数 wait を実装してください。wait は Promise オブジェクトを返し、指定された時間が経過した後に resolve します。

// 例えば、wait(5) を呼び出すと、5秒後に Promise が resolve されます。

const wait = async(num:number):Promise<void> => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve();
    },num * 1000)
  })
}

wait(5).then(() => {
  // console.log("5秒後に呼び出されました。");
})


// 関数 isPalindrome を実装してください。isPalindrome は文字列を受け取り、その文字列が回文（前から読んでも後ろから読んでも同じ結果になる）かどうかを判定します。

// 文字列は大文字と小文字を区別しません。つまり、大文字と小文字の違いは無視します。
// 文字列はアルファベットのみで構成されるものとします。数字や記号は含まれません。
// 空文字列も回文とみなします。

const isPalindrome = (str:string):boolean => {
  const palind = str.toLocaleLowerCase().split('').reverse().join('');
  
  return str === palind ? true : false
}

// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("Hello")); // false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("12321")); // true
// console.log(isPalindrome("race car")); // true
// console.log(isPalindrome("")); // true


// 関数 chunkArray を実装してください。chunkArray は与えられた配列を指定されたサイズごとに分割し、分割された配列を要素とする新しい配列を返します。

// 元の配列は変更せず、新しい配列を返します。
// 分割されるサイズは正の整数とします。
// 元の配列の最後の要素が分割サイズに満たない場合、最後の要素は分割された配列の一部となります。

const chunkArray = (array:number[],num:number) => {
  const newArray = [];
  const loopNum  = Math.ceil(array.length / num);

  let propsNum = num;
  let stateNum = 0;
  for( let i = 0; i < loopNum; i++ ){
    const sliceArray = array.slice(stateNum,stateNum + num);
    
    newArray.push(sliceArray);
    stateNum += propsNum;
    num = propsNum + num
    
  }
  return newArray
}


// console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
// console.log(chunkArray([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
// console.log(chunkArray([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
// console.log(chunkArray([1, 2, 3, 4, 5], 7)); // [[1, 2, 3, 4, 5]]


// 以下の Student インターフェースを使用して、学生のデータを表すオブジェクトを定義してください。

// name プロパティ: 文字列型
// age プロパティ: 数値型
// grade プロパティ: 文字列型 (A, B, Cのいずれか)
// また、上記の Student インターフェースを使用して、以下の条件に一致する関数を定義してください。

// 関数名: filterStudentsByGrade
// 引数: students (Studentオブジェクトの配列), grade (フィルタリングする成績)
// 戻り値: grade で指定された成績を持つ学生の配列

interface Student {
  name:string;
  age:number;
  grade:string;
}

const students: Student[] = [
  { name: 'Alice', age: 18, grade: 'A' },
  { name: 'Bob', age: 19, grade: 'B' },
  { name: 'Charlie', age: 20, grade: 'A' },
  { name: 'David', age: 19, grade: 'C' }
];

type FilterStudentsByGrade<T> = (array:T[],str:string) => T[];

const filterStudentsByGrade:FilterStudentsByGrade<Student> = (array,str) => {
  return array.filter(val => val.grade == str);
}

const filteredStudents = filterStudentsByGrade(students, 'A');
// console.log(filteredStudents);
// 出力: [{ name: 'Alice', age: 18, grade: 'A' }, { name: 'Charlie', age: 20, grade: 'A' }]


// 型エイリアス FilterByProperty を定義し、与えられたオブジェクトの配列とプロパティ名、値を受け取り、指定されたプロパティの値が与えられた値と一致するオブジェクトをフィルタリングする関数を作成してください。関数の型は FilterByProperty と一致している必要があります。

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: 1, name: 'Apple', price: 100, category: 'Fruit' },
  { id: 2, name: 'Banana', price: 80, category: 'Fruit' },
  { id: 3, name: 'Carrot', price: 50, category: 'Vegetable' },
  { id: 4, name: 'Milk', price: 200, category: 'Dairy' },
];

type FilterByProperty<T,K extends keyof T> = (array:T[],property:K,value:T[K]) => T[];

const filterByProperty:FilterByProperty<Product,keyof Product> = (array,property,value) => {
  return array.filter(val => val[property] == value)
}

const filteredProducts = filterByProperty(products, 'category', 'Fruit');
// console.log(filteredProducts);



// 以下の条件を満たす TypeScript の型エイリアスを宣言してください。

// 引数としてオブジェクトとプロパティ名を受け取り、指定されたプロパティがオブジェクトに存在する場合はそのプロパティの型、存在しない場合は undefined の型を返す型エイリアス

type Obj2 = {
  name:string;
  age:number;
}

type ObjProperty<T,K> = K extends keyof T ? T[K] : undefined;

type Result5 = ObjProperty<Obj2,'name'>;


// 型エイリアス FilterByProperty は、ジェネリック型 T とプロパティキーのリテラル型 K、プロパティの値の型 V を引数に取ります。
// T はオブジェクト型とします。
// FilterByProperty 型エイリアスは、T のプロパティキーが K であり、その値の型が V であるオブジェクトをフィルタリングする関数型となります。
// フィルタリングされたオブジェクトの配列を返します。

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

type FilterByProperty2<T,K extends keyof T,V> =  (array:T[],prop:K,val:V) => T[];

type RResult = FilterByProperty2<Product,'category','Fruit'>

const filteredProducts2:FilterByProperty2<Product,'category','Fruit'> = (array,prop,val) => {
  return array.filter(val2 => val2[prop] == val);

}

const products_2: Product[] = [
  { id: 1, name: 'Apple', price: 100, category: 'Fruit' },
  { id: 2, name: 'Banana', price: 80, category: 'Fruit' },
  { id: 3, name: 'Carrot', price: 50, category: 'Vegetable' },
  { id: 4, name: 'Milk', price: 200, category: 'Dairy' },
];

// console.log(filteredProducts2(products_2,'category','Fruit'));


// 問題: 数値の配列が与えられたとき、配列内の要素を2倍にする関数 doubleArray を実装してください。関数は与えられた配列を変更せず、新しい配列を返す必要があります。

// 具体的な要件:
// doubleArray 関数は、数値の配列として number[] 型の引数 array を受け取ります。
// 関数は新しい配列を返すため、元の配列 array は変更しないでください。
// 関数の戻り値は、元の配列の要素を2倍にした配列としてください。

type DoubleArray<T> = (array:T[]) => T[];

const doubleArray:DoubleArray<number> = (array) => {
  return array.map(val => val * 2);
}
// console.log(doubleArray([3,2,1,4]))


// 型エイリアス FilterByAge を完成させてください。FilterByAge は、与えられたオブジェクトの配列から、指定された年齢以下のオブジェクトのみをフィルタリングするための関数型です。

interface Person2 {
  name: string;
  age: number;
}

type FilterByAge<T> = (array:T[],maxAge:number) => T[];

const people: Person2[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 40 },
];

const filterByAge: FilterByAge<Person2> = (array, maxAge) => {
  return array.filter(obj => obj.age <= maxAge);
};

const filteredPeople = filterByAge(people, 30);
// console.log(filteredPeople);


// 問題:
// 与えられた文字列内の単語の個数を数える関数 countWords を実装してください。関数は以下の仕様を満たす必要があります。

// 仕様:
// countWords 関数は、文字列としての入力を受け取ります。
// 関数は、与えられた文字列内の単語の個数を返します。
// 単語は、スペースで区切られた文字列として定義されます。例えば、"Hello World" は 2 つの単語から構成されています。
// 文字列内の連続したスペースは、1 つのスペースとして扱われます。例えば、"Hello World" は 2 つの単語から構成されています。

const countWords = (str:string):number => {
  return str.split(' ').filter(val => val !== '').length;
}

// console.log(countWords("Hello World")); // 2
// console.log(countWords("This is a sentence.")); // 4
// console.log(countWords("   There   are   spaces   ")); // 3
// console.log(countWords("NoSpaces")); // 1
// console.log(countWords("")); // 0


// 問題: 配列内の数値要素の合計を計算する関数を作成してください。

// 関数名: calculateSum
// 引数: 数値の配列 (number[])
// 戻り値: 合計値の数値 (number)
// 制約:
// 引数の配列は少なくとも1つの要素を持つものとします。
// 引数の配列は正の整数のみを含みます。

const calculateSum = (array:number[]) => {
  return array.reduce((a,b) => a + b　, 0);
}
// console.log(calculateSum([1, 2, 3, 4, 5])); // 出力: 15
// console.log(calculateSum([10, 20, 30, 40])); // 出力: 100
// console.log(calculateSum([5])); // 出力: 5


// 問題: 与えられた文字列 str を逆さにして返す関数 reverseString を作成してください。
// 入力:
// str (文字列): 逆さにする対象の文字列。
// 出力:
// 逆さになった文字列。

type ReverseString = (str:string) => string;
const reverseString:ReverseString = (str) => {
  return str.split('').reverse().join('');
}

// console.log(reverseString('Hello')); // 'olleH'
// console.log(reverseString('OpenAI')); // 'IAepnO'
// console.log(reverseString('12345')); // '54321'


// 文字列の配列を受け取り、文字列の長さが最も長い要素を返す関数 findLongestString を実装してください。
// 配列の要素はすべて文字列であるとします。
// 配列が空の場合は空文字列 ("") を返します。
// 複数の要素が同じ最大の長さを持つ場合は、最初に出現する要素を返します。
// 文字列の長さは、ユニコードコードポイントに基づいて計算されます（サロゲートペアや結合文字に対応しています）。
// findLongestString の実装を提供してください。

type FindLongestString<T> = (array:T[]) => T

const findLongestString:FindLongestString<string> = (array) => {
  const wordArray = array.map(val => val.length);
  const max = wordArray.reduce((prev,next) => Math.max(prev,next));
  const result = array.filter((val,index) => val.length == max)
  
  return result[0]
}
// console.log(findLongestString(["apple", "banana", "kiwi", "strawberry"])); // "strawberry"
// console.log(findLongestString(["hello", "world", "openai"])); // "openai"
// console.log(findLongestString(["cat", "dog", "elephant"])); // "elephant"


// 与えられた文字列の配列から、重複している文字列を取り除いた配列を返す関数 removeDuplicates を実装してください。

type RemoveDuplicates<T> = (array:T[]) => T[]
const removeDuplicates: RemoveDuplicates<string> = (array) => {
  return Array.from(new Set(array));
};

// console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana", "kiwi"])); // ["apple", "banana", "orange", "kiwi"]
// console.log(removeDuplicates(["hello", "world", "hello", "openai"])); // ["hello", "world", "openai"]
// console.log(removeDuplicates(["cat", "dog", "elephant", "dog", "cat"])); // ["cat", "dog", "elephant"]


// 数値の配列が与えられたとき、各数値を2倍した新しい配列を返す関数 doubleNumbers を作成してください。
// doubleNumbers 関数は、array という名前の数値の配列を引数として受け取ります。
// 関数は、与えられた配列の各要素を2倍した新しい配列を返します。
// 元の配列は変更せず、新しい配列を作成してください。

type DoubleNumbers = (array:number[]) => number[]
const doubleNumbers:DoubleNumbers = (array) => {
  return array.map(val => val*2);
}

// console.log(doubleNumbers([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
// console.log(doubleNumbers([0, -1, 10, -5])); // [0, -2, 20, -10]
// console.log(doubleNumbers([3.14, 2.5, 1.618])); // [6.28, 5, 3.236]


// 以下の要件を満たす関数を実装してください。

// 関数名は sumArray とします。
// 関数は以下の引数を受け取ります:
// array: number[] - 数字の配列
// 関数は配列の要素を合計してその結果を返します。

const sumArray = (array:number[]):number => {
  return array.reduce((a,b) => a + b )
}

// console.log(sumArray([1, 2, 3, 4, 5])); // 15
// console.log(sumArray([0, -1, 10, -5])); // 4
// console.log(sumArray([3.14, 2.5, 1.618])); // 7.258



// 以下の型エイリアス GetValues を使用して、与えられたオブジェクトの配列から指定されたプロパティの値を取り出す関数 getValues を作成してください。
type GetValues<T, K extends keyof T> = (array: T[], property: K) => T[K][];

const getValues:GetValues<Users,keyof Users> = (array,property) => {
  return array.map(val => val[property]);
}
type Users = {
  id:number;
  name:string;
  age:number;
}
const users4 = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 20 },
];
// console.log(getValues(users4, 'name')); // ['Alice', 'Bob', 'Charlie']
// console.log(getValues(users4, 'age')); // [25, 30, 20]


// 以下の要件を満たす関数を実装してください。

// 関数名: sumProperty
// パラメータ:

// array: オブジェクトの配列。各オブジェクトは同じプロパティを持つものとします。
// property: 合計するプロパティの名前を指定します。
// 戻り値: プロパティの値の合計値を返します。
// 制約:

// プロパティの値は数値型とします。
// プロパティの値が存在しないオブジェクトは無視して合計を計算します。

interface Product2 {
  id: number;
  name: string;
  price: number;
}

type SumProperty = (array:Product2[],property:string) => number;

const sumProperty:SumProperty = (array,property) => {
  return array.map(val => val[property]).reduce((a,b) => a + b,0);
}

const products2: Product2[] = [
  { id: 1, name: 'Apple', price: 100 },
  { id: 2, name: 'Banana', price: 80 },
  { id: 3, name: 'Carrot', price: 50 },
  { id: 4, name: 'Milk', price: 200 },
];

// console.log(sumProperty(products2, 'price')); // 430 (100 + 80 + 50 + 200)


// 与えられた文字列配列から、重複している要素を削除する関数 removeDuplicatesFromArray を作成してください。

type RemoveDeplicatesFromArray<T> = (array:T[]) => T[]
const removeDeplicatesFromArray:RemoveDeplicatesFromArray<string> = (array) => {
  return Array.from(new Set(array));
}
const names2: string[] = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob'];

// console.log(removeDeplicatesFromArray(names2))


// 与えられた数値配列から、指定された数値よりも大きい要素のみをフィルタリングする関数 filterGreaterThan を作成してください。

type FilterGreaterThan<T> = (array: T[], value: T) => T[];
const filterGreaterThan:FilterGreaterThan<number> = (array,value) => {
  return array.filter(val => val > value)
}

const numbers: number[] = [1, 5, 2, 8, 3];
// console.log(filterGreaterThan(numbers,4))


// オブジェクトの配列を受け取り、指定されたプロパティの値を抽出して新しい配列として返す関数を定義してください。

// 関数名は extractProperty とします。
// 型引数 T はオブジェクトの型を表します。
// 関数のパラメータは以下のとおりです:
// array: T[] - オブジェクトの配列。プロパティの値を抽出する対象となります。
// property: keyof T - 抽出したいプロパティのキー。
// 関数は、指定されたプロパティの値を抽出して新しい配列として返します。

interface Person2 {
  name: string;
  age: number;
}

type ExtractProperty<T, K extends keyof T> = (array: T[], property: K) => T[K][];

type Test2<T,K extends keyof T> = T[K];


const extractProperty: ExtractProperty<Person2, keyof Person2> = (array, property) => {
  return array.map(val => val[property]);
}

const people2: Person2[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
];

const names:(string|number)[] = extractProperty(people2, 'name');
// console.log(names); // ['Alice', 'Bob', 'Charlie']



// 数値の配列を受け取り、奇数の要素をすべて取り除いた配列を返す関数 removeOddNumbers を実装してください。

// 配列から奇数の要素を除去して、偶数の要素だけを含む新しい配列を返します。
// 順序や元の配列の順序は保持される必要があります。
// 元の配列は変更せず、新しい配列を作成してください。
// 0は偶数として扱います。

type RemoveOddNumbers = (array:number[]) => number[];
const removeOddNumbers:RemoveOddNumbers = (array) => {
  return array.filter(val => val % 2 === 0)
} 
// console.log(removeOddNumbers([1, 2, 3, 4, 5])); // [2, 4]
// console.log(removeOddNumbers([0, 1, 2, 3, 4, 5, 6])); // [0, 2, 4, 6]
// console.log(removeOddNumbers([15, 23, 48, 57, 62])); // [48, 62]


// 以下の関数mergeArraysを完成させ、適切な型アノテーションを付けてください。mergeArraysは、複数の配列を受け取り、それらを1つの配列に結合して返す関数です

type MergeArrays = <T,K,U>(arr1:T[],arr2:K[],arr3:U[]) => (T|K|U)[];
const  mergeArrays:MergeArrays = (arr1, arr2, arr3)  => {
  return [...arr1,...arr2,...arr3]
}

// console.log(mergeArrays<number,number,number>([1,2,3,4,5],[4,5,6,7],[8,9,10,11,13]));



// 以下の関数filterByPropertyは、オブジェクトの配列とプロパティ名、およびそのプロパティの値を受け取り、指定されたプロパティの値が一致するオブジェクトのみをフィルタリングして返す関数です。関数の型アノテーションを完成させてください。

type FilterByProperty3<T> = (objects:T[],property:keyof T, value:T[keyof T]) => T[];
const filterByProperty2:FilterByProperty3<Objects2> = (objects, property, value) => {
  return objects.filter(val => val[property] == value)
}

const objects:Objects2[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
]

interface Objects2  {
  id:number;
  name:string;
  age:number
}

// console.log(filterByProperty(objects,'name','Alice'));


// 以下の関数groupByPropertyは、オブジェクトの配列とグループ化するプロパティ名を受け取り、指定されたプロパティの値でグループ化されたオブジェクトのマップを返す関数です。関数の型アノテーションを完成させてください。

type GroupByProperty<T,K extends keyof T> = (objects:T[],property:K) => {[key:string]:T}[]
const groupByProperty:GroupByProperty<Objects2,keyof Objects2> = (objects, property) => {
  return objects.map(val => {
    const newObj = {};
    newObj[val[property]] = val;
    return newObj;
  })
}

const objects2 = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Alice', age: 40 }
];
const property = 'age';

// console.log(groupByProperty(objects2,property));


// TypeScriptのジェネリック型を使用して、以下の要件を満たすFilterという型を定義してください
// Filterは、与えられた配列の要素をフィルタリングするために使用される関数です。
// Filterは2つのジェネリック型パラメータを持ちます:
// T: 元の配列の要素の型
// U: フィルタリング条件として使用されるプロパティの型
// Filterは、以下のプロパティを持ちます:
// filterBy: フィルタリング条件として使用するプロパティの名前（文字列型）
// value: フィルタリング条件として使用する値（U型）
// Filterは、与えられた配列をフィルタリングして、条件に合致する要素の配列を返します。

type Filter<T,U extends keyof T> = (array:T[],filterBy:U,value:T[U]) => T[];
  
  
  // TypeScriptの型アサーション（Type Assertion）を使用して、以下の要件を満たすconvertToStringという関数を実装してください。

// convertToStringは、与えられた引数を文字列に変換するために使用される関数です。
// convertToStringは、以下の引数を持ちます:
// value: 変換する値（任意の型）
// convertToStringは、value を文字列に変換して返します。文字列に変換する方法は、以下のルールに従います:
// もし value が文字列型であれば、そのままの値を返します。
// もし value が数値型であれば、数値を文字列に変換して返します。
// もし value が真偽値型であれば、真偽値を文字列に変換して返します。
// もし value が配列型であれば、配列の要素を文字列に変換して、カンマで結合した文字列を返します。
// それ以外の場合、value を文字列に変換して返します。

type ConvertToString = <T>(value:T) => string; 

const convertToString:ConvertToString = (value) => {
  if(Array.isArray(value)){
    return value.join(',');

  }else if(typeof value == 'object'){
    return JSON.stringify(value);

  }else {
    return String(value);
  }
}

// 以下の要件を満たす isPalindrome 関数を実装してください。

// isPalindrome 関数は、str という名前の文字列を引数に取ります。
// 関数は、与えられた文字列が回文である場合は true を、回文でない場合は false を返します。
// 回文の判定は、大文字と小文字を区別しないものとします。つまり、文字列を判定する前に大文字と小文字を統一してください。
// 空の文字列は回文とみなします。

const isPalindrome = (str:string):boolean => {
  return str.toLocaleLowerCase().split('').reverse().join('') == str ? true : false
}

// console.log(isPalindrome("radar")); // true
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("Hello")); // false
// console.log(isPalindrome("")); // true


// 配列内の要素の中から重複している値を見つけ、それらを含む新しい配列を返す関数 findDuplicates を実装してください。

// 仕様:
// findDuplicates 関数は、配列を受け取り、重複している要素を含む新しい配列を返します。
// 返される配列には、元の配列において重複している要素のみが含まれます。
// 返される配列の要素の順序は元の配列の順序を保持します。

type FindDuplicates = <T>(array:T[]) => T[];
const findDuplicates:FindDuplicates
 = (array) => {
  return array.filter((val,index,array) => array.indexOf(val) !== index );
}

const numbers = [1, 2, 3, 4, 2, 5, 6, 3];
// console.log(findDuplicates(numbers)); // [2, 3]

const fruits = ["apple", "banana", "orange", "apple", "grape", "banana"];
// console.log(findDuplicates(fruits)); // ["apple", "banana"]


// 与えられた文字列がアナグラム（anagram）かどうかを判定する関数 isAnagram を実装してください。
// 関数名は isAnagram とします。
// 関数は2つの文字列 str1 と str2 を引数として受け取ります。
// 関数は与えられた2つの文字列がアナグラムであれば true を、そうでなければ false を返します。
// 文字列の比較は大文字と小文字を区別しないものとします。
// 文字列に含まれるスペースや句読点などの特殊文字は無視します。

type IsAnagram = (str1:string,str2:string) => boolean
const isAnagram:IsAnagram = (str1,str2) => {
  const str_1 = str1.split('');
  const str_2 = str2.split('');

  const result = str_1.filter(val => str_2.includes(val) );
  return str_1.length === result.length ? true : false;
}

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("rail safety", "fairy tales")); // true
// console.log(isAnagram("hello", "world")); // false



// 与えられた配列に含まれるユニークな要素の数を数える関数 countUniqueElements を実装してください。
// countUniqueElements 関数は、配列を受け取り、その配列内のユニークな要素の数を返します。
// 配列内の要素は異なるデータ型である可能性があります。
// ユニークな要素の数は、重複している要素は1つとしてカウントします。

type CountUniqueElements = <T>(array:T[]) => number;
const countUniqueElements:CountUniqueElements = (array) => {
  return Array.from(new Set(array)).length;
}

// console.log(countUniqueElements([1, 2, 3, 4, 5])); // 5
// console.log(countUniqueElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])); // 4
// console.log(countUniqueElements(["apple", "banana", "apple", "orange", "banana"])); // 3
// console.log(countUniqueElements([])); // 0


// 以下の要件を満たす shuffleArray 関数を実装してください。

// 要件
// shuffleArray 関数は、与えられた配列の要素をランダムに並び替えた新しい配列を返す。
// 元の配列は変更せず、新しい配列を作成して返す。
// シャッフルには Fisher-Yates アルゴリズムを使用する。
// 以下は shuffleArray 関数の使用例です。

const array = [1, 2, 3, 4, 5];

type ShuffleArray = <T>(array:T[]) => T[];
const shuffleArray:ShuffleArray = (array) => {
  let randomArray = [];
  let resultArray = [];

  while(randomArray.length < 5){
    const random = Math.floor(Math.random() * array.length)
    randomArray.push(random);
    randomArray = Array.from(new Set(randomArray));
  }

  return randomArray.map(val => array[val]);
  
}

const shuffled = shuffleArray(array);
// console.log(shuffled); // シャッフルされた配列の表示例: [5, 1, 4, 2, 3]
// console.log(array); // 元の配列は変更されていない: [1, 2, 3, 4, 5]


// 与えられた文字列の中で最も出現回数が多い文字を返す findMostFrequentCharacter 関数を実装してください。

type FindMostFrequentCharacter = (str: string) => string;

const findMostFrequentCharacter:FindMostFrequentCharacter = (str) => {
  let obj:{[key:string]:number} = {};
  let maxCount = 0;
  let maxStr = '';

  for(let i of str){
    obj[i] = (obj[i] || 0)  + 1;

    if(obj[i] > maxCount){
      maxStr   = i;
    }
  }

  return maxStr;
}

// console.log(findMostFrequentCharacter("Hello")) //=> "l"
// console.log(findMostFrequentCharacter("Mississippi")) //=> "s"
// console.log(findMostFrequentCharacter("abcdefg")) //=> "a" (もしくは "b", "c", "d", "e", "f", "g" のいずれか)


// 文字列内のすべての単語を逆順にする関数 reverseWords を作成してください。文字列内の単語はスペースで区切られています。
// ただし、単語の間には複数のスペースがある場合でも、単語の順序を逆にした後に単語間のスペースは1つになるようにしてください。
// 入力:
// str: 文字列
// 出力:
// すべての単語を逆順にした結果の文字列

type ReverseWords = (str:string) => string;
const reverseWords:ReverseWords = (str) => {
  const reverse = str.split(' ').reverse();
  console.log(reverse)
  return reverse.join(' ')
}

// console.log(reverseWords("Hello world")); // 出力: "world Hello"
// console.log(reverseWords("   I   love   JavaScript   ")); // 出力: "JavaScript love I"
// console.log(reverseWords("  Good   morning ")); // 出力: "morning Good"



// 次の要件を満たす型を定義してください。

// Person 型: name プロパティ（文字列型）と age プロパティ（数値型）を持つオブジェクト型です。
// Student 型: Person 型を拡張したオブジェクト型で、さらに university プロパティ（文字列型）を持ちます。
// Teacher 型: Person 型を拡張したオブジェクト型で、さらに subject プロパティ（文字列型）を持ちます。
// 上記の要件を満たす型定義を実装してください。

interface Person  {
  name:string;
  sge:number;
}
interface Student extends Person {
  university:string
}
interface Teacher extends Person {
  subject:string
}



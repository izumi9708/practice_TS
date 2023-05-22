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

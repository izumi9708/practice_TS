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

type Obj = {
  name:string;
  age:number;
}

type ObjProperty<T,K> = K extends keyof T ? T[K] : undefined;

type Result = ObjProperty<Obj,'name'>;


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

console.log(filteredProducts2(products_2,'category','Fruit'));
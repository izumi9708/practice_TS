// 以下の要件を満たすTodoListクラスをTypeScriptで実装してください。

// TodoItemインターフェースを作成し、以下のプロパティを持つ
// title: string型
// description: string型
// completed: boolean型
// TodoListクラスを作成し、以下のプライベートプロパティを持つ
// todoItems: TodoItem型の配列
// TodoListクラスに以下のパブリックメソッドを追加する
// addTodoItem(title: string, description: string): void
// 引数のtitleとdescriptionを元に新しいTodoItemを作成し、todoItems配列に追加する
// toggleTodoItemStatus(title: string): void
// 引数のtitleに該当するTodoItemのcompletedプロパティを反転する
// deleteTodoItem(title: string): void
// 引数のtitleに該当するTodoItemをtodoItems配列から削除する
// getTodoItems(): TodoItem[]
// todoItems配列を返す
// 作成したTodoListクラスを使用し、以下の処理を行う
// TodoListのインスタンスを作成する
// addTodoItemメソッドを使用し、3つのTodoItemを追加する
// getTodoItemsメソッドを使用し、現在のTodoItem一覧を取得して表示する
// toggleTodoItemStatusメソッドを使用し、追加したTodoItemのcompletedプロパティを反転させる
// getTodoItemsメソッドを使用し、現在のTodoItem一覧を取得して表示する
// deleteTodoItemメソッドを使用し、2つ目のTodoItemを削除する
// getTodoItemsメソッドを使用し、現在のTodoItem一覧を取得して表示する

interface TodoItem {
  title:string
  description:string
  completed:boolean
}

class TodoList{
  private todoItems:TodoItem[] = [];

  public addTodoItem(title: string, description: string):void{
    const newArray = {title:title,description:description,completed:false};

    this.todoItems.push(newArray);
  }

  public toggleTodoItemStatus(title:string):void{
    this.todoItems.filter((a:TodoItem) => a.title == title ? a.completed = !a.completed : a.completed)
  }

  public deleteTodoItem(title:string):void{
    this.todoItems = this.todoItems.filter((a:TodoItem) => a.title !== title)
  }

  public getTodoItems():TodoItem[]{
    return this.todoItems;
  }

}

const list = new TodoList();
list.addTodoItem('タスク１','課題を終わらせる')
list.addTodoItem('タスク２','ご飯を食べる')
list.addTodoItem('タスク３','掃除をする')

console.log(list.getTodoItems());

list.toggleTodoItemStatus('タスク３')

console.log(list.getTodoItems())
list.deleteTodoItem('タスク２')
console.log(list.getTodoItems())




// 以下のクラス定義に対して、addStudent メソッドを追加し、students 配列に新しい Student オブジェクトを追加できるようにしてください。Student クラスは既に定義済みとします。


class Student {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
}

class School {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  // ここに addStudent メソッドを実装してください
  addStudent(age:number,name:string):void{
    const newObj = new Student(name,age);
    this.students.push(newObj);

  }

  getStudents(): Student[] {
    return this.students;
  }
}


const student = new Student('mike',10);
console.log(student)
const school = new School();
school.addStudent(student.getAge(),student.getName());


// 1 ジェネリクスの使い方を説明

// 使用する際に型を指定することができる
function sample<T>(a:T){
  return a;
}

sample<number>(1)

// ２ 継承の使い方を説明
class Parent {
  public name:string;
  public age :number;

  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
}

class Child extends Parent {
  public gender:string

  constructor(name,age,gender:string){
    super(name,age);
      this.gender = gender;
  }

  display(){
    const {name,age,gender} = this;
    console.log(name,age,gender);
  }
}

const classChild  = new Child('satoshi',5,'mens');
classChild.display()


// 3.非同期通信とは

function test1(){
  const result = new Promise<void>((resolve,reject)=>{
    setTimeout(val => {
      resolve();
      console.log('1')
    },2000)
  })  

  return result;
}

async function test2():Promise<void>{
  await test1();
  console.log('2');
}

test2()


// 数値を要素に持つ配列を受け取り、全ての要素の平均値を返す関数を実装してください。
// 関数名は calcAverage とし、ジェネリックを使用してください。
// 返り値の型は渡された配列の要素の型に合わせるようにしてください。

function calcAverage<T extends number>(array: T[]): number {
  const length = array.length;
  const result = array.reduce((a, b) => a + b,0);

  return result / length;
}

// 使用例
const arr1 = [1, 2, 3, 4, 5];
const avg1 = calcAverage(arr1);
// avg1 の型は `number` 型になる

const arr2 = [0.1, 0.2, 0.3];
const avg2 = calcAverage(arr2);
// avg2 の型は `number` 型になる

const arr3 = ['0.1', '0.2', '0.3'];
const avg3 = calcAverage(arr3);
// avg3 の型は `number` 型になる
// ただし、コンパイル時にエラーが出るようにしてください


// ・ 数値の配列を受け取り、配列の要素を2倍にした新しい配列を返す関数 doubleArray を実装してください。
// ・ doubleArray 関数は、受け取った配列の要素の型に応じて、新しい配列の型も決定するようにしてください。
// ・　doubleArray 関数の引数には、必ず数値の要素を持つ配列が渡されることが保証されているとします。

// ・ 以下の使用例が正しく動作することを確認してください
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers); // doubledNumbers は number[] 型となる
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const floatNumbers = [1.1, 2.2, 3.3, 4.4, 5.5];
const doubledFloatNumbers = doubleArray(floatNumbers); // doubledFloatNumbers は number[] 型となる
console.log(doubledFloatNumbers); // [2.2, 4.4, 6.

function doubleArray<T extends number>(array:T[]){
  return array.map(a => a * 2);
}


// 以下のUserクラスを継承し、AdminUserクラスを作成してください。AdminUserクラスは、Userクラスのnameプロパティに加え、emailプロパティも持ちます。また、AdminUserクラスには、sayHiメソッドを追加してください。sayHiメソッドは、「Hi, I'm [name] (email)」と出力するように実装してください。nameとemailは、それぞれUserクラス、AdminUserクラスのプロパティから参照してください。

class User {
  constructor(public name: string) {}
  sayHi(): void {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// ここにAdminUserクラスを作成してください
class AdminUser extends User {
  constructor(name:string,public email:string){
    super(name);

    this.email = email;
  }

  sayHi():void{
    console.log(`Hi, I'm ${this.name}(${this.email})`);
  }
}

const admin = new AdminUser('sam','test@gmail.com');
admin.sayHi();



// これを次のような形式の文字列に変換する関数 formatData を実装してください。

const data = [
  { name: 'Alice', age: 20, gender: 'female' },
  { name: 'Bob', age: 25, gender: 'male' },
  { name: 'Charlie', age: 30, gender: 'male' },
  { name: 'Dave', age: 35, gender: 'male' },
  { name: 'Ellen', age: 40, gender: 'female' },
];

// name と age をカンマで区切り、その後にスペースを入れる
// gender を male なら M、female なら F に変換する
// 変換後の各オブジェクトの文字列を改行で区切り、最後に改行を入れる
// 例えば、上記の data に対して formatData(data) を呼び出した場合、次のような文字列が返されるようにしてください。

// Alice, 20, F
// Bob, 25, M
// Charlie, 30, M
// Dave, 35, M
// Ellen, 40, F

interface Format {
  name: string
  age: number
  gender: string
}

function formatData(array:Format[]){
  const mapArray = array.map(a => {
    return {data:`${a.name} ,${a.age} ,${a.gender == 'male' ?'M' : 'F'}`};
  }).forEach( b => console.log(b.data));
  
}

formatData(data);



// 与えられた文字列に含まれる単語の出現回数を数える関数を作成してください。ただし、単語の区切りはスペースとします。また、大文字小文字は区別しないものとします。

function countString(str:string):void{
  const array = str.split(' ').map( val => {
    return {[val]:1}
  });

  const keyArray = array.map( val =>  Object.keys(val)[0]).filter((val,index,array) => {
    return array.indexOf(val) !== index;
  });

  array.forEach( a => {
    const keys = Object.keys(a)
    
    keyArray.forEach( b => {
      if( keys[0] == b ){
        // Object.values(a)[0] + 1;
        console.log(a[keys] += 1)
      }
    })
  })

  array.forEach( val => {
    const keys = Object.keys(val)[0]
    
    console.log(`${keys}:${val[keys]}`);
  })

  
}


// function countString(str: string): Record<string, number> {
//   const words = str.toLowerCase().split(" ");
//   const count: Record<string, number> = {};

//   words.forEach((word) => {
//     if (!count[word]) {
//       count[word] = 0;
//       // なければプロパティを作成して０で初期化
//     }
//     count[word]++;
//   });
//   return count;
// }


countString("Hello world. This is a pen. That is a pencil.");



// User クラスを使って、以下のような処理を行う関数 getFilteredUsers を作成してください。
// User クラスのインスタンスが格納された配列 users と、年齢の下限値 minAge、上限値 maxAge を引数に取ります。
// users 配列の中で、age プロパティが minAge 以上、maxAge 以下の User インスタンスだけを含む新しい配列を返します。

// users 配列の要素数が非常に多くなる可能性があるため、パフォーマンスにも注意してください。
// users 配列の中身を変更する必要はありません。
// 年齢の下限値と上限値のどちらか一方、あるいは両方が null の場合、その条件は無視してよいものとします。
// minAge が maxAge より大きい場合、条件は一致しないものとします。
// 条件に一致する User インスタンスが存在しない場合、空の配列を返します。

class User {
  id: string;
  name: string;
  age: number;

  constructor(id: string, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const users = [
  new User("1", "Alice", 25),
  new User("2", "Bob", 30),
  new User("3", "Charlie", 20),
  new User("4", "David", 35),
  new User("5", "Eva", 40),
];

function getFilteredUsers(users:User[],minAge:number,maxAge:number):User[]{
  if(minAge && maxAge){
    return users.filter(val => val.age >= minAge && val.age <= maxAge);

  }else {
    return users;
  }
}

const filteredUsers = getFilteredUsers(users, 25, 35);
console.log(filteredUsers); 


// 問題: 数字の配列が与えられた場合

// もっとも大きな要素を持つインデックスを見つける関数を作成してください。ただし、複数の最大要素がある場合は、最初のインデックスを返します。

// 例えば、次の配列が与えられた場合、
// [2, 3, 8, 2, 9]
// 出力は 4 となります。最大値は 9 で、インデックスは 4 です。

const array:number[] = [];

for(let i=0; i < 20; i++){
  const random = Math.floor(Math.random() * ( 11 - 1 ) + 1 );
  array.push(random);
}

console.log(findMax(array));

function findMax(array:number[]):number{
    const max = array.reduce((a,b)=> Math.max(a,b));
    
    return array.indexOf(max)
}


// 問題: 2つの文字列が与えられた場合、どちらかの文字列の文字を並べ替えて、もう一方の文字列にできるかどうかを判断する関数を作成してください。ただし、大文字小文字は区別しないものとします。

// 例えば、次のような文字列が与えられた場合、
// "Hello"
// "lelho"
// 出力はtrueとなります。
// また、次のような文字列が与えられた場合、
// "Hello"
// "lello"
// 出力はfalseとなります。

console.log(strDegree('Hello','lello'))

function strDegree(str1:string,str2:string):boolean{
  const firstStr = str1.toLocaleLowerCase().split('');
  const lastStr  = str2.toLocaleLowerCase().split('');

  const result = firstStr.filter(val=> lastStr.indexOf(val) == -1 )

  return result.length == 0 ? true : false;
  
}


// 問題: 数字の配列が与えられた場合、配列の要素をソートせずに、最小値と最大値を O(n) 時間で見つける関数を実装してください。ただし、配列には正の整数のみが含まれているものとします。

const array = [5, 2, 9, 8, 3, 1, 6, 7, 4];

maxMin(array);

function maxMin(array:number[]):void{
  const max = array.reduce((a,b) => Math.max(a,b));
  const min = array.reduce((a,b)=> Math.min(a,b));

  console.log(max,min)
}



// 以下のようなProductというインターフェースが定義されています。このインターフェースを実装したBookというクラスを定義してください。ただし、Bookクラスは以下の要件を満たす必要があります。

// Productインターフェースを実装すること
// Bookクラスには、titleとpriceという2つのプロパティが存在すること
// Bookクラスのコンストラクタには、titleとpriceを引数に取り、それぞれのプロパティに値を設定する処理が存在すること

interface Product {
  title: string;
  price: number;
}

class Book implements Product{
  public title:string;
  public price:number;
  public add  :boolean;

  constructor(title:string,price:number,add:boolean = false){
      this.title = title;
      this.price = price;
      this.add   = add;
  }
}

const book = new Book('a',20)
console.log(book)



// 問題: 以下の配列から、指定した条件に一致する要素だけを抽出し、新しい配列として返す関数を実装してください。
// 条件: priceが200以上の商品を抽出する。

interface Product {
  name:string
  price:number
}

const products:Product[] = [
  {name: 'Product 1', price: 100},
  {name: 'Product 2', price: 200},
  {name: 'Product 3', price: 300},
  {name: 'Product 4', price: 400},
  {name: 'Product 5', price: 500},
];


function priceFil(array:Product[]):Product[]{
  return array.filter(a => a.price >= 200);
}

console.log(priceFil(products))




// 【問題】以下の仕様に従い、Person クラスを定義してください。

// Person クラスは以下の 3 つのプロパティを持ちます。
// name プロパティ：string 型
// age プロパティ：number 型
// address プロパティ：string 型
// Person クラスは以下の 2 つのメソッドを持ちます。
// greet メソッド：console.log() を使って、「Hello, [name]!」と出力します。ただし、[name] には name プロパティの値が入ります。
// getAddressLength メソッド：address プロパティの文字数を返します。

class Person {
  public name:string
  public age :number
  public address:string

  constructor(name:string,age:number,address:string){
    this.name = name
    this.age = age
    this.address = address
  } 

  greet(){
    console.log(`Hello, ${this.name}!`);
  }

  getAddressLength(){
    return this.address.length;
  }
}

const person = new Person('taro',34,'東京');
person.greet();
console.log(person.getAddressLength())


// 次のような処理を行う関数 chunk を作成してください。

// chunk 関数は、第一引数に配列、第二引数に分割するサイズを受け取ります。
// 配列を、指定されたサイズごとに分割した新しい配列を返します。
// 余りの要素がある場合は、最後の配列に含まれることに注意してください。

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function chunk(array:number[],size:number):number[]{
//   let count = 0;
//   return array.map(val => {
//     const result =  array.slice(count,size);
//     count = count + size;
//     size = size + size;

//     return result;
//   })
// }

// 回答
function chunk(array: number[], size: number): number[][] {
  const resultArray: number[][] = [];
  
  for(let i=0; i < array.length; i+= size){
    const result = array.slice(i,i+size)
    resultArray.push(result);
  }
  
  return resultArray;
}


console.log(chunk(array, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
console.log(chunk(array, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


// この数列の要素を1つずつ2乗し、その結果を新しい配列として返す関数 squaredNumbers を作成してください。ただし、 Array#map() を使用して実装してください。

const numbers = [1, 2, 3, 4, 5];

function squaredNumbers(array:number[]):number[]{
  return array.map( val => val * val);
}

console.log(squaredNumbers(numbers))



// 以下のように、整数の配列が与えられた場合、配列内の重複した要素を削除する関数を作成してください。

function removeDuplicates(array: number[]): number[] {
  return Array.from(new Set(array));
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]



// 配列に含まれる数値の中から、重複している数値を配列で返す関数 findDuplicates を作成してください。ただし、返される配列には重複する数値を一度だけ含めてください。

// 返される配列は、数値の昇順で並べてください。
// 元の配列は変更しないでください。
// 元の配列には、負の数や小数点以下の数値も含まれる可能性があることに注意してください。

const array:number[] = [1, 2, 3, 2, 4, 3];

function findDuplicates(array:number[]):number[]{
  const result =  array.filter((val,index,array) => array.indexOf(val) !== index);

  return Array.from(new Set(result));
}

console.log(findDuplicates(array))


// Array.prototype.reduce メソッドを使って、数値の配列の平均値を求める関数 average を実装してください。戻り値は数値で、小数点以下は切り捨てとします。

function average(array:number[]):number{
  return array.reduce((a,b) => a + b ) / array.length
}

console.log(average([1, 2, 3, 4, 5]))



// 以下の要件を満たす関数 pluck を実装してください。

// 引数にオブジェクトの配列とプロパティ名を受け取る。
// 各オブジェクトの指定したプロパティの値を要素とする配列を返す。

const users = [
  { id: 1, name: "Alice", age: 18 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "Dave", age: 30 },
  { id: 5, name: "Ellen", age: 35 },
];

type User = {
  id:number,
  name:string,
  age:number
}

function pluck(obj:User[],property:string){
  return obj.map(a => a[property])
}

console.log(pluck(users,'id'));


// 以下の要件を満たすクラス Vector を実装してください。
// x と y の座標値を持つ。
// add メソッドを持ち、別の Vector インスタンスを受け取り、自身の x と y にその Vector インスタンスの x と y を加算する。
// subtract メソッドを持ち、別の Vector インスタンスを受け取り、自身の x と y からその Vector インスタンスの x と y を減算する。

interface Coding {
  x:number
  y:number
}

class Vector implements Coding {
  public x:number
  public y:number

  constructor(x:number,y:number){
    this.x = x;
    this.y = y;
  }

  add(obj:Coding){
    this.x += obj.x;
    this.y += obj.y;
  }

  subtract(obj:Coding){
    this.x -= obj.x;
    this.y -= obj.y;
  }
}

const vector = new Vector(29,30);
vector.add(new Vector(50,90));
vector.subtract(new Vector(59,44));
console.log(vector)



// 以下の要件を満たすクラス Memo を実装してください。
// text というプロパティを持ち、初期値は空文字列とする。
// write メソッドを持ち、引数で与えられた文字列を text に追記する。
// read メソッドを持ち、現在の text を取得する。
// clear メソッドを持ち、text を空文字列にする。

class Memo {
  public text:string;

  constructor(){
    this.text = ''
  }

  write(str:string){
    this.text += str;
  }

  read(){
    return this.text;
  }

  clear(){
    this.text = '';
  }

}


// 以下の要件を満たす関数 curry を実装してください。
// 関数と、その関数の最初の引数となる値を受け取り、新しい関数を返す。
// 新しい関数は、最初に渡された値を第1引数に渡して、元の関数を実行する。

function curry(fn: (a: any, b: any) => any, arg1: any) {
  return function(arg2: any) {
    return fn(arg1, arg2);
  };
}

function add(a: number, b: number): number {
  return a + b;
}

const add10 = curry(add, 10);
console.log(add10(5)); // 15


// 以下の要件を満たす関数 isPalindrome を実装してください。
// 引数に文字列を受け取り、その文字列が回文であるかどうかを判定する。
// 大文字小文字は区別しない。

function isPalindrome(str:string):boolean{
  const reverse = str.split('').reverse().join('');
  
  return str === reverse;
}

isPalindrome('たけやぶやけた')


// 以下の配列の要素の中で、重複しているものをすべて抽出し、新しい配列として返す関数を実装してください。

// 元の配列の要素の順序を保持する必要がある。
// 新しい配列の要素の順序は元の配列の要素の順序に従う。
// 要素の重複は1つに限定する（同じ要素が複数回出現する場合は、新しい配列には1つだけ含める）。

function test(array:number[]):number[]{
  const newArray = array.filter((val,index,array)=> array.indexOf(val) !== index);

  return Array.from(new Set(newArray))
}

test([1, 3, 3, 5, 8, 8, 9, 9, 10]);



// 以下の要件を満たす関数を実装してください。

// 関数は、数値の引数を一つ受け取る。
// 関数は、次の条件に従って文字列を返す。
// 引数が 3 で割り切れる場合は、"Fizz" を返す。
// 引数が 5 で割り切れる場合は、"Buzz" を返す。
// 引数が 3 と 5 で割り切れる場合は、"FizzBuzz" を返す。
// それ以外の場合は、引数を文字列に変換して返す。
// 例えば、引数が 3 の場合は "Fizz"、引数が 5 の場合は "Buzz"、引数が 15 の場合は "FizzBuzz"、引数が 4 の場合は "4" を返します。

function returnStr(number:number):string{
  if(number % 3 === 0 && number % 5 === 0){
    return 'FizzBuzz';

  }else if(number % 3 === 0){
    return 'Fizz';

  }else if(number % 5 === 0){
    return 'Buzz';

  }else {
    return String(number);
  }
}

console.log(returnStr(15))


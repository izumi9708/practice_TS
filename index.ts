// // 問題１
// // Productという型を定義し、name（商品名）とprice（価格）という2つのプロパティを持たせてください。

type Product = {
  name:string,
  price:number
}

// 問題２
// Productの配列を引数に取り、配列内の各Productオブジェクトの価格の総和を計算する関数calculateTotalPriceを実装してください。

const products: Product[] = [
  { name: 'Apple', price: 100 },
  { name: 'Banana', price: 200 },
  { name: 'Orange', price: 150 },
];

const totalPrice = calculateTotalPrice(products); // 450が計算される
console.log(totalPrice)

function calculateTotalPrice(array:Product[]){
  return array.map(a => a.price).reduce((a,b) => a + b);
}


// 問題３
// Personという型を定義し、name（氏名）とage（年齢）とaddress（住所）という3つのプロパティを持たせてください。addressは、{ city: string, prefecture: string }という形式のオブジェクトです。

type Person = {
  name:string,
  age:number,
  address:{
    city:string,
    prefecture:string
  }
}

// 問題４
// Personの配列を引数に取り、住所が東京都内にある人の数を返す関数countPeopleInTokyoを実装してください。

const people: Person[] = [
  { name: 'Alice', age: 25, address: { city: 'Tokyo', prefecture: 'Tokyo' } },
  { name: 'Bob', age: 32, address: { city: 'Osaka', prefecture: 'Osaka' } },
  { name: 'Charlie', age: 41, address: { city: 'Sapporo', prefecture: 'Hokkaido' } },
];

const count = countPeopleInTokyo(people); // 1が返される
console.log(count)

function countPeopleInTokyo(array:Person[]){
  const result = array.filter(a => a.address.city == 'Tokyo')
  return result.length
}

// 問題５
// Animalという抽象クラスを定義し、name（動物名）というプロパティを持たせ、speakという抽象メソッドを定義してください。

abstract class Animal {
  name:string;
  constructor(name:string){
    this.name = name;
  }

  speak(){}
}

// 問題６
// 以下の要件を満たす、Arrayを拡張した独自のStackクラスをジェネリクスを用いて実装してください。

// スタックの要素を管理する配列を持つ
// スタックに要素を追加する push メソッドを持つ
// スタックから要素を削除して返す pop メソッドを持つ
// スタックが空かどうかを返す isEmpty メソッドを持つ

class Stack<T> {
    private stackArray: T[];

    constructor(){
        this.stackArray = [];
    }

    push(num:T){
      this.stackArray.push(num);
    }

    pop(){
      this.stackArray.pop();
    }

    isEmpty(){
      if(this.stackArray.length == 0){
        return true;
      }else {
        return false;
      }
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.isEmpty()); // true


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


// 1 ジェネリクスの使い方

// 使用する際に型を指定することができる
function sample<T>(a:T){
  return a;
}

sample<number>(1)

// ２ 継承の使い方
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

  constructor(name:string,age:number,gender:string){
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




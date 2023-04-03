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

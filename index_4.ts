// 以下のようなPersonクラスがあります。このクラスには名前と年齢のプロパティがあります。また、インスタンス化されたPersonオブジェクトは自己紹介するメソッドを持ちます。このPersonクラスを継承し、Studentクラスを作成してください。Studentクラスには、Personクラスと同じプロパティの他に、学籍番号と所属するクラス名を表すプロパティがあります。Studentクラスのインスタンス化されたオブジェクトも自己紹介するメソッドを持ちます。

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduceMyself() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  public number:string
  public className:string

  constructor(name:string,age:number,number:string,className:string){
    super(name,age);

    this.number = number
    this.className = className
  }

  introduceMyself() {
    `Hi, I'm ${this.name} and I'm ${this.age} years old. My student ID is ${this.number} and I belong to ${this.className}.`;
  }
}

const student = new Student('Taro', 18, '20220001', '2年A組');
student.introduceMyself();


// ジェネリクスを使って、任意の型の要素を持つ配列を引数に受け取り、配列内の要素を文字列に変換した配列を返す関数を実装してください。ただし、配列内の値の型によって変換後の値が異なるようにしてください。
// number型の場合は、半角数字文字列に変換する
// string型の場合は、そのままの文字列を返す
// その他の型の場合は、空文字列を返す


const changeStringArray = <T>(array:T[]):string[] => {
  return array.map(val => {
    let change:string;
    switch(typeof val){
      case 'number':
        change = val.toString();
        break
      
      case 'string':
        change = val;
        break;

      default :
        change = '';
        break;
    }
    return change;
  })
}

changeStringArray([1, 'two', true, undefined]);


// 文字列の配列を受け取り、配列内の全ての文字列を逆順にして、新しい配列として返す関数を実装してください。ただし、元の配列は変更しないものとします。

const reverseArray = (array:string[]):string[] => {
  return array.reverse()
}

reverseArray(["apple", "banana", "orange"]); // ["elppa", "ananab", "egnaro"]
reverseArray(["hello", "world"]); // ["olleh", "dlrow"]


// 文字列の配列を受け取り、各文字列の先頭と末尾を結合した新しい配列を返すconcatFirstAndLastという関数を実装してください。

const concatFirstAndLast = (array:string[]):string[] => {
  return array.map(val => {
    const start = val.charAt(0)
    const end   = val.slice(-1)
    
    return start + end;
  })
}


const result1 = concatFirstAndLast(['hello', 'world', 'typescript']);
// console.log(result1)


// 配列から、指定されたidのユーザー情報を削除する関数 removeUser を、ジェネリクスを使って実装してください。ただし、削除対象のidが見つからなかった場合は、何もせずに配列をそのまま返すようにしてください。また、元の配列を変更せず、新しい配列を返すようにしてください。

type User = {
  id: number;
  name: string;
  age: number;
  address: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Alice",
    age: 18,
    address: "Tokyo"
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    address: "Osaka"
  },
  {
    id: 3,
    name: "Charlie",
    age: 32,
    address: "Kyoto"
  }
];


const removeUser = <T extends {id:number}>(array:T[],id:number):T[] => {
  // TypeScript はジェネリック型である T に対して id プロパティが存在するとは保証できないため型パラメーター T に id プロパティーが存在することを保証する必要がある
  return array.filter(val => val.id !== id)
  // オブジェクトをdeleteするのではなく該当のオブジェクトを除外する
}


const reuslt2 = removeUser(users, 2);
// console.log(reuslt2);

const result3 = removeUser(users, 4);
// console.log(result3);


// ユーザー情報を格納するオブジェクトの配列が与えられた場合に、各オブジェクトのemailプロパティのドメイン部分を*に置き換える関数replaceEmailDomainを実装してください

interface DomeinUser {
  name: string;
  age: number;
  email: string;
}

const domeinUsers: DomeinUser[] = [
  { name: 'Alice', age: 23, email: 'alice@example.com' },
  { name: 'Bob', age: 38, email: 'bob@example.com' },
  { name: 'Charlie', age: 19, email: 'charlie@example.com' }
];

function replaceEmailDomain<T extends {email:string}>(array:T[]):T[]{
  const result =  array.map(val => {
    const index = val.email.indexOf('@');
    const targetString = val.email.slice(0,index)
    const changeTarget =  val.email.replace(targetString,'*')

    val.email = changeTarget
    return val
  })

  // return array.map(v => ({...v,email:v.email.replace(/^[^@]*/, '*')}))

  return result
}


const result4 = replaceEmailDomain(domeinUsers);
console.log(result4)


// 指定した id を持つ要素を削除する関数 removeItem を実装してください。ただし、配列の要素はオブジェクトで構成されており、オブジェクトは id プロパティを持っているものとします。また、削除する要素が存在しない場合は、配列をそのまま返すものとします。

const items:itemFace[] = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'baz' }
]

interface itemFace {
  id:number
  name:string
}

function removeItem<T extends {id:number}>(array:T[],id:number):T[]{
  return array.filter(val => val.id !== id)
}

const removeItem1 = removeItem(items, 2)
// console.log(removeItem1)

const removeItem2 = removeItem(items, 4)
// console.log(removeItem2)

// age プロパティが 30 歳未満のオブジェクトの配列を取得する関数 getUsersUnder30 を作成してください。ただし、返り値の配列は id の昇順でソートしてください。また、返り値の配列には id, name, age の３つのプロパティが含まれている必要があります。

const users2:userFace[] = [
  { id: 1, name: 'Alice', age: 24 },
  { id: 2, name: 'Bob', age: 32 },
  { id: 3, name: 'Charlie', age: 41 },
  { id: 4, name: 'David', age: 19 },
  { id: 5, name: 'Emily', age: 56 },
];

interface userFace {
  id:number
  name:string
  age:number
}

function getUsersUnder30(array:userFace[]):userFace[]{
  return array.filter(val => val.age < 30).sort((a,b) => a.id - b.id)
}

const usersUnder1 = getUsersUnder30(users2);
// console.log(usersUnder1)

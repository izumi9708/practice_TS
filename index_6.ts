// フィルタリング条件に基づいて users 配列から要素をフィルタリングするように実装してください。ただし、以下の条件に従うものとします。

// フィルタリング条件は、 name プロパティが "John" または "Bob" であること。
// フィルタリングされた配列は、 CustomFilter 型の戻り値と同じ型であること。
// CustomFilter 型は、 unknown 型を使用しています。これを変更せずに問題を解決してください。

type CustomFilter<T, U> = (arr: T[], condition: U) => T[];

const users7:Users7[] = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 }
];

type Users7 = {
  id:number,
  name:string,
  age:number
}

const filterUsers: CustomFilter<Users7, string> = (arr, condition) => {
  let result:Users7[];
  if(typeof condition == 'string'){
    result = arr.filter(val => val[condition] == 'John' || val[condition] == 'Bob');
  }

  return result;
};


// console.log(filterUsers(users7, 'name'));



// 以下の条件を満たす関数 groupBy を実装してください。

// 関数 groupBy は、引数で受け取った key に基づいて、オブジェクトの配列をグループ化します。
// key は、オブジェクトのプロパティを指定します。
// groupBy は、グループ化された結果をオブジェクトで返します。オブジェクトのプロパティ名は key で指定したプロパティの値とします。プロパティの値は、そのグループに属するオブジェクトの配列とします。

type User8 = {
  id: number;
  name: string;
  age: number;
  email: string;
  address: string;
}

const user8:User8[] = [
  {id:1,name:'John',age:30,email:'john@example.com',address:'Tokyo'},
  {id:2,name:'Jane',age:25,email:'jane@example.com',address:'Osaka'},
  {id:3,name:'Bob',age:35,email:'bob@example.com',address:'Tokyo'}
]


const groupBy = (array:User8[],key:string):{[key:string]:User8} => {
  let resultObj = {};

  const property = array.map(val => val[key])
  array.forEach((val,index) => {
    if(val[key] == property[index]){
      resultObj[val[key]] = val;
    }
  })

  return resultObj;
}

// console.log(groupBy(user8,'age'));



// この型は、2つのオブジェクト T と U を受け取り、それらのプロパティをマージした新しいオブジェクト型を返します。ただし、T と U に同名のプロパティがある場合は、U のプロパティが優先されます。また、T と U に共通するプロパティがない場合、返り値のオブジェクト型には never 型が含まれます。

type MergeObjects<T extends object, U extends object> = T & Omit<U,keyof T> & Omit<T,keyof U>;



// 次のような型を実装してください。
// この型は、配列の最初の要素の型を返します。例えば、Head<[string, number, boolean]>はstring型を返します。ただし、配列が空の場合にはundefined型を返します。

type Head<T extends any[]> = T[0]|undefined;


// 次のような型を実装してください。
// この型は、多次元の配列をフラットにする型です。例えば、[1, [2, [3, 4], 5], 6]という配列を渡すと、[1, 2, 3, 4, 5, 6]という配列を返します。ただし、ネストの深さに上限はありません。また、Tには配列だけでなく、配列の要素として別の配列が入る場合もあるとします。

type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;


// 以下の配列から最初の要素を取得する型エイリアス Head2 を infer を用いて実装してください。

type T = ['apple', 'banana', 'orange'];

type Head2<T extends any[]> = T extends [infer H , ...any[]] ? H : never;

type A = Head2<T>;


// 次の配列型 Tuple の最後の要素の型を取得する型 Last<T> を、infer キーワードを使用して実装してください

type Tuple = [number, string, boolean];
type Last<T> = T extends [...unknown[], infer U] ? U : unknown;
 
type Example = Last<Tuple>; // boolean


// ジェネリック型パラメーターTがオブジェクト型である場合、そのプロパティの値の型を配列として抽出する型エイリアスValues<T>を定義してください。ただし、Tのキーは文字列とするものとします。

type Values<T> = T extends {} ? T[keyof T] : never;


// 以下の配列型から、string型である要素のみを抽出する型StringArrayを定義してください。

type Array1 = [string, number, boolean, "hello", 42, "world"];

type StringArray<T extends any[]> = {
  [K in keyof T]:T[K] extends string ? T[K] : never;
}



// 型を利用して、以下の要件を満たす型 PersonWithPartialAddress を定義してください。

// Person と同じフィールドを持ちます。
// address フィールドの値は、 prefecture プロパティと city プロパティのいずれか、または両方が null または undefined になることができます。ただし、 address プロパティ自体は削除することはできません。


type Person11 = {
  name: string;
  age: number;
  address: {
    prefecture: string;
    city: string;
  };
};

type PersonWithPartialAddress = {
  name: string;
  age: number;
  address?: {
    prefecture?: string;
    city?: string;
  };
}


// PersonWithPartialAddress型を定義し、Person型からaddressプロパティの存在を除外して、他のプロパティはそのまま残すようにしてください。
type Person12 = {
  name: string;
  age: number;
  address?: {
    prefecture: string;
    city: string;
  };
};

type PersonWithPartialAddress2 = Omit<Person12,'address'>




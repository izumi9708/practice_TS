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


// 2つのインターフェースをマージし、新しいインターフェース ExtendedUser を作成してください。

// ExtendedUser の型を使用して、以下の変数 user に適切な値を与えてください。

interface User11 {
  name: string;
  age: number;
}

interface User12 {
  email: string;
}

type User13 = User11 & User12;

type ExtendedUser = {
  name: string;
  age: number;
  email: string;
}

const user13: ExtendedUser = {
  name:'ichiro',
  age:25,
  email:'aaa'
} ;


// 以下の要件を満たす型を定義してください。

// 数値の配列を受け取り、各要素を2倍にした配列を返す関数 doubleNumbers を定義する。
// doubleNumbers の引数には数値の配列を与える必要があり、それ以外の引数を与えるとエラーとなる。

type DoubleNumbers<T extends number> = (array:T[]) => T[]



// 関数 isUnique を実装してください。

// isUnique は、文字列を受け取り、その文字列内に重複する文字がない場合に true を、重複する文字がある場合に false を返します。
// ただし、大文字と小文字は区別しません。つまり、同じ文字の大文字小文字の組み合わせは重複とみなされません。
// 空文字列が渡された場合には true を返します。

// isUnique 関数は、型パラメータ T を持ちます。
// T は string 型を extend します。

type IsUnique<T extends string> = (str:T) => boolean 

const isUnique:IsUnique<string> = (str) => {
  const array = str.split('');
  const result = array.filter((val,index,array) => array.indexOf(val) !== index)
  
  return result.length > 0 ? true : false;
}

// console.log(isUnique('abcdefg'))


// SwapKeyAndValue を定義してください。この型エイリアスは、オブジェクトの型を引数として受け取り、そのオブジェクトのキーと値を入れ替えたオブジェクトの型を返すものとします。

type SwapKeyAndValue<T extends { [key: string]: string }> = {
  [K in keyof T]: {
    [P in keyof T]: T[K] extends T[P] ? P : never;
  }[keyof T];
};

type Input = {
  a: "apple",
  b: "banana",
  c: "cherry"
}

type Result = SwapKeyAndValue<Input>;


// 型の各キーに対応する値の型を、各キーをキーとするオブジェクトとして表現する型 Values を定義してください。

type KeyValuePair = {
  key1: string,
  key2: number,
  key3: boolean,
}

type Values<T> = {
  [K in keyof T]: T[K]
}

type Result2 = Values<KeyValuePair>



// 以下の型エイリアス SwapFirstAndSecond を実装してください。この型エイリアスは、2つの引数の型を受け取り、それらを順番を入れ替えた新しい型を返すものとします。

type SwapFirstAndSecond<A, B> = [B,A]

type Result3 = SwapFirstAndSecond<number, string>


// 以下のような関数を型で表現してください。

function filterNullish<T>(array: T[]): NonNullable<T>[] {
  return array.filter(Boolean) as NonNullable<T>[];
}

type FilterNullish<T> = T extends (null | undefined) ? unknown : T;


// 2つのオブジェクトのプロパティをマージする型エイリアス Merge を定義してください。ただし、同じプロパティがあった場合は第2引数のもので上書きされます。

type A = { a: string, b: number }
type B = { b: string, c: boolean }

type Merge<T,U> = Omit<T,keyof U>&U

type Result4 = Merge<A, B> 


// この型から email プロパティを省いた型を定義してください。

type User14 = {
  id: number;
  name: string;
  age: number;
  email?: string;
};

type Result5 = Omit<User14,'email'>


// 関数 filterBy を、ジェネリクスを使って定義してください。

// 関数 filterBy は、2つの引数を取ります。
// 第1引数は、オブジェクトの配列です。
// 第2引数は、オブジェクトの1つのプロパティに対するフィルター条件です。
// 関数 filterBy は、第1引数で渡された配列から、第2引数で指定されたフィルター条件を満たすオブジェクトだけを抽出して、そのオブジェクトの配列を返します。

const persons = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 25 },
  { id: 4, name: 'David', age: 30 },
];

type FilterBy<T> = (obj:T[],str:string) => T[]; 



// 与えられた配列から、ランダムな要素を取得する関数 getRandomItem を持ちます。
// getRandomItem 関数は、引数として配列を受け取り、戻り値としてその配列のランダムな要素を返します。
// 型定義では、getRandomItem 関数の引数と戻り値の型をジェネリクスを用いて定義してください。

type GetRandomItem<T> = (arr:T[]) => T[];


// 型引数 T を受け取り、T のプロパティ name のみを持つオブジェクト型を定義する。
// ただし、name の型は string 型であることを保証する。
// その他のプロパティは含まないものとする。

type NameObj<T extends {name:string}> = Pick<T,'name'> 

interface Person {
  name: string;
  age: number;
  address: string;
}

type Result6 = NameObj<Person>; 



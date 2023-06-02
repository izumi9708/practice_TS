// 次の Person 型に対して、PartialPerson 型を定義してください。PartialPerson 型は、Person 型の各プロパティをオプショナル（nullable）にした型として定義してください。
type Person7 = {
  name: string;
  age: number;
  address: string;
};

type PartialPerson2<T> = Partial<T>;
type result6 = PartialPerson2<Person7>;


// 与えられたオブジェクトから指定されたプロパティのみを選択する型 MyPick<T, K> を定義してください。T は対象のオブジェクトの型であり、K は選択するプロパティのキーのユニオン型とします。
// MyPick<T, K> は、T 型のオブジェクトを受け取り、K 型のプロパティのみを持つ新しい型を返します。
// MyPick<T, K> のプロパティは、T 型のプロパティのうち、K 型に含まれるキーのみを選択します。
// MyPick<T, K> は、選択されたプロパティのみを持つ新しい型を返します。

interface Person2 {
  name: string;
  age: number;
  address: string;
  email: string;
}

type MyPick2<T,K extends keyof T> = Pick<T,K>;

type SelectedProps = MyPick2<Person, 'name' | 'age'>;
// 期待される型: { name: string; age: number; }


// 指定されたプロパティを除外して正しい型が得られるよう、Omit 型の実装を完成させてください。

type Person3 = {
  name: string;
  age: number;
  address: string;
  email: string;
};

type OmitResult<T,K extends keyof T> = Omit<T,K>;

type OmittedProps = OmitResult<Person3, 'age' | 'email'>;
// 期待される型: { name: string; address: string; }


// Person4 を基に、以下の要件を満たす Mapped Type を作成してください。

// プロパティの名前を変更し、新しいプロパティ名を使用する。
// プロパティの型は変更せず、元の型をそのまま使用する。

type Person4 = {
  name: string;
  age: number;
  address: string;
  email: string;
};

type MappedType<T> = {
  [K in keyof T]:T[K]
}

type Result6 = MappedType<Person4>;


// MapValues 型を完成させてください。MapValues 型は、与えられたオブジェクトの各プロパティの値に対して指定されたジェネリック型の変換を行います。

type Person5 = {
  name: string;
  age: number;
  address: string;
};

type MapValues<T,K> = {
  [U in keyof T]:K
}

type MappedPerson = MapValues<Person5, boolean>;


// 次の条件を満たすジェネリック型 FilterByProperty を定義してください。

// FilterByProperty は2つの型パラメータ T と K を持ちます。T はオブジェクト型を表し、K は T のプロパティ名を表します。
// FilterByProperty は、T 型の配列と K 型の値を受け取り、T 型の配列を返します。
// FilterByProperty の実装では、与えられた配列の各要素に対して、指定されたプロパティ K の値が与えられた値と一致するかどうかをチェックし、一致する要素のみを結果の配列に含めます。

type Person6 = { id: number; name: string; age: number };
type FilterByProperty4<T,K extends keyof T> = T[]　;

type FilteredPerson = FilterByProperty4<Person6, 'age'>;
// FilteredPerson の型は { id: number; name: string; age: number } となります


// ジェネリック型を使用して、配列の要素を逆順に並び替えるreverseArray関数を実装してください。以下の要件を満たすようにコードを記述してください。

// reverseArray関数は、ジェネリック型Tと配列array: T[]を引数とし、要素が逆順に並び替えられた新しい配列を返します。
// 配列の要素の順序を逆にするために、組み込みのreverse関数を使用してはいけません。
// 入力配列の内容は変更せず、新しい配列を作成してください。

function reverseArray<T>(array: T[]): T[] {
  const newArray = [];

  for(let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

// 使用例
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// console.log(reverseArray(["apple", "banana", "orange"])); // ["orange", "banana", "apple"]


// 配列の要素を指定された数だけ繰り返し、新しい配列に展開する関数 expandArray を実装してください。
// 使用例

type ExpandArray = <T>(array:T[],loop:number) => T[];
const expandArray:ExpandArray = (array,loop) => {
  let loopNum = 0;
  let resultArray = [];

  while(loopNum < loop){
    resultArray.push(...array)

    loopNum++;
  }

  return resultArray;
}
// console.log(expandArray([1, 2, 3], 3)); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
// console.log(expandArray(["a", "b", "c"], 2)); // ["a", "b", "c", "a", "b", "c"]



// 以下の要件を満たす TypeScript のコードを実装してください。

// Product というインターフェースを定義します。
// name というプロパティを持ち、文字列型です。
// price というプロパティを持ち、数値型です。
// quantity というプロパティを持ち、数値型です。
// calculateTotalPrice という関数を作成します。
// 引数として products という Product の配列を受け取ります。
// products 配列内の各商品の価格と数量を掛け合わせ、総合計金額を計算します。
// 計算結果を数値型として返します。

interface Product3 {
  name:string;
  price:number;
  quantity:number;
}

const calculateTotalPrice = (products:Product3[]):number => {
  return products.map(val => val.price * val.quantity).reduce((a,b) => a + b)
}

const products3: Product3[] = [
  { name: "Apple", price: 100, quantity: 2 },
  { name: "Banana", price: 50, quantity: 3 },
  { name: "Orange", price: 80, quantity: 1 }
];

// console.log(calculateTotalPrice(products)); // 出力: 430

// 配列内の数値の平均値を計算する関数 calculateAverage を実装してください。関数のシグネチャは以下の通りです。

type CalculateAverage = (array:number[]) => number; 

const calculateAverage:CalculateAverage = (array) => {
  return array.reduce((a,b) => a + b) / array.length
}
// console.log(calculateAverage([1, 2, 3, 4, 5])); // 出力: 3
// console.log(calculateAverage([10, 20, 30, 40, 50])); // 出力: 30
// console.log(calculateAverage([2, 4, 6, 8, 10])); // 出力: 6


// 配列の要素を辞書順にソートする関数 sortArray を実装してください。ただし、与えられる配列は文字列のみからなり、大文字と小文字を区別しないものとします。
// 入力配列 array の要素数は 1 以上です。
// 入力配列 array の要素は文字列で構成されています。

type SortArray = (array:string[]) => string[];
const sortArray = (array) => {
  return array.map(val => val.toLowerCase()).sort((a,b) => a > b ? 1 : -1)
}

const array1 = ["banana", "apple", "Orange", "grape"];
// console.log(sortArray(array1)); // 出力: ["apple", "banana", "grape", "Orange"]

const array2 = ["zebra", "Tiger", "lion", "Elephant"];
// console.log(sortArray(array2)); // 出力: ["Elephant", "lion", "Tiger", "zebra"]


// 以下の仕様に基づいて、指定された要素の個数を数える関数 countOccurrences を実装してください。
// 仕様:
// countOccurrences 関数は、配列と要素を引数として受け取ります。
// 関数は、配列内で指定された要素が出現する回数を返します。
// 配列内に要素が存在しない場合は、回数は 0 とします。
type Count0ccurrences = <T>(array:T[],element:T) => number;

const countOccurrences:Count0ccurrences = (array,element) => {
  return array.filter(val => val === element).length;
}

const numbers = [1, 2, 3, 4, 2, 1, 2, 3, 1];
// console.log(countOccurrences(numbers, 2)); // 出力: 3
// console.log(countOccurrences(numbers, 5)); // 出力: 0

const fruits = ["apple", "banana", "apple", "orange", "apple"];
// console.log(countOccurrences(fruits, "apple")); // 出力: 3
// console.log(countOccurrences(fruits, "grape")); // 出力: 0


// Filter<T, U> 型は、ジェネリック型 T のプロパティのうち、U に指定されたプロパティ名のみを持つ新しい型を返します。
// Filter<T, U> 型は、T のプロパティ名を走査し、U に指定されたプロパティ名と一致するプロパティのみを持つ新しい型を返します。
// U には単一のプロパティ名を指定します。

type Filter<T,U extends keyof T> = Pick<T,U>;

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type FilteredUser = Filter<User, "name" | "email">;
// 期待される型: { name: string; email: string; }



// FilterArray<T, U> 型は、ジェネリックな型パラメータ T と U を持ちます。
// T は配列型であり、要素の型は任意の型です。
// U は T の要素型のユニオン型です。
// FilterArray 型は、T の要素のうち、U に指定された型に一致する要素のみを持つ新しい配列型を表します。

type MyArray = [string, number, boolean, string[]];

type FilterArray<T,U> = {
  [K in keyof T]: T[K] extends U ? T[K] : (T[K] extends Array<U> ? T[K] : undefined)
}


type FilteredArray1 = FilterArray<MyArray, string>;
// 期待される型: [string, string[]]

type FilteredArray2 = FilterArray<MyArray, number | boolean>;
// 期待される型: [number, boolean]


// 以下の MergeObjects 型を実装してください。この型は、複数のオブジェクト型を受け取り、それらのプロパティをすべて結合した新しいオブジェクト型を返します。
// T 型はオブジェクト型のタプルとして与えられます。
// keyof キーワードを使用してオブジェクト型のキーのユニオン型を取得できます。
// keyof T[number] は T 型のすべての要素のキーのユニオン型を表します。
// T[number] は T 型のすべての要素の結合型を表します。
// Pick 型やマップ型を使って必要なプロパティを選択・結合することができます。

type UnionToIntersection<T> = (T extends any ? (k:T) => void : never) extends ((k:infer U) => void) ? U : never;

type MergeObjects<T extends object[]> = UnionToIntersection<T[number]>

type Object1 = { id: number; name: string };
type Object2 = { age: number; address: string };
type Object3 = { isActive: boolean };

type MergedObject = MergeObjects<[Object1, Object2, Object3]>;
// 期待される型: { id: number; name: string; age: number; address: string; isActive: boolean; }


// Partial<T>」型を使用せずに、オブジェクトの一部のプロパティをオプショナルにする型「MyPartial<T>」を実装してください。

type MyPartial<T> = {
  [K in keyof T]?:T[K]
};

// 使用例
type Person = {
  name: string;
  age: number;
  address: string;
};

type PartialPerson = MyPartial<Person>;
// 期待される型: { name?: string; age?: number; address?: string; }


// MyRequired<T>は、与えられた型Tのすべてのプロパティを必須にする型を返します。
// Tはオブジェクト型とします。
type Person2 = {
  name?: string;
  age?: number;
  address?: string;
};

type MyRequired<T> = Required<T>

type RequiredPerson = MyRequired<Person2>;
// 期待される型: { name: string; age: number; address: string; }



// 与えられたオブジェクト型 T から、指定されたプロパティ K を除外する Omit 型を定義してください。ただし、K は T のキーのサブセットであるとします。

type Person3 = {
  name: string;
  age: number;
  address: string;
};

type MyOmit<T,K extends keyof T> = Omit<T,K>;

type OmittedPerson = MyOmit<Person, 'age' | 'address'>;
// 期待される型: { name: string; }


// 与えられたオブジェクトのプロパティをすべて任意の値（undefined も含む）に設定する型を作成してください。ただし、元のオブジェクトの構造は変更せず、すべてのプロパティがオプショナルとなるようにしてください。

type Input = {
  name: string;
  age: number;
  address: string;
};

type SetOptional<T> = Partial<T>

type Result = SetOptional<Input>;


// TypeScriptにおいて、与えられた配列から重複する要素を削除する関数 removeDuplicates を実装してください

type RemoveDuplicates = <T>(array: T[]) => T[];

const removeDuplicates:RemoveDuplicates = (array) => {
  return Array.from(new Set(array));
}

const numbers = [1, 2, 3, 4, 2, 1, 2, 3, 1];
// console.log(removeDuplicates(numbers)); // 出力: [1, 2, 3, 4]

const fruits = ["apple", "banana", "apple", "orange", "apple"];
// console.log(removeDuplicates(fruits)); // 出力: ["apple", "banana", "orange"]


// TypeScriptのジェネリック型を使用して、与えられた配列の要素をランダムにシャッフルする shuffleArray 関数を実装してください。ただし、元の配列は変更せずに新しいシャッフルされた配列を返すようにしてください。

type ShuffleArray = <T>(array:T[]) => T[];
const shuffleArray:ShuffleArray = (array) => {
  let randomArray = [];
  let resultArray = [];

  while(randomArray.length < array.length){
    const random = Math.floor(Math.random() * array.length);

   randomArray.push(random);
   randomArray = Array.from(new Set(randomArray))
  }

  return randomArray.map(val => array[val]);
}

const numbers2 = [1, 2, 3, 4, 5];
const shuffledNumbers = shuffleArray(numbers2);
console.log(shuffledNumbers); // シャッフルされた配列の例: [3, 5, 1, 2, 4]

const fruits2 = ["apple", "banana", "orange", "kiwi"];
const shuffledFruits = shuffleArray(fruits2);
console.log(shuffledFruits); // シャッフルされた配列の例: ["banana", "kiwi", "orange", "apple"]

// mapToObject 関数を実装してください。この関数は、キーと値のペアの配列を受け取り、それをオブジェクトに変換します。ただし、キーは文字列型、値は数値型とします。同じキーが複数回出現した場合、最後の値が採用されます。

type KeyValue = [string, number];

type MapToObject = <T>(arr:T[]) => {[key:string]:number};
const mapToObject: MapToObject = (arr) => {
  const obj:{[key:string]:number} = {};
  const result = arr.forEach(val => {
    obj[val[0]] = val[1];
  })

  return obj;
};

// 使用例
const array: KeyValue[] = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["a", 4],
];

const result = mapToObject(array);
console.log(result);
// 出力: { a: 4, b: 2, c: 3 }


// 以下の要件を満たす TypeScript の型を定義してください。

// FilterKeys<T, U> というジェネリック型を定義します。
// T はオブジェクト型を表し、U はそのオブジェクト型のプロパティキーのユニオン型を表します。
// FilterKeys<T, U> の結果型は、T のプロパティキーのうち U に含まれるものだけを持つ新しいオブジェクト型となります。

type FilterKeys<T,U extends keyof T> = Pick<T,U>;

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type FilteredKeys = FilterKeys<User, "id" | "email">;
// 期待される型: { id: number; email: string; }



// TypeScriptのキーを除外する型 ExcludeKey<T, K> を実装してください。この型は、オブジェクト型 T からキー K を除外した新しいオブジェクト型を生成します。

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type ExcludeKey<T,K extends keyof T> = Omit<T,K>

type ExcludedUser = ExcludeKey<User, "age" | "email">;
// 期待される型: { id: number; name: string; }



// 以下の要件に基づいて、TypeScriptの型定義を作成してください。

// Userというインターフェースを定義します。Userは以下のプロパティを持ちます。

// id: 数値型
// name: 文字列型
// age: 数値型
// email: 文字列型
// fetchUserという関数を定義します。この関数は非同期関数として作成し、引数としてidを受け取ります。戻り値の型はPromise<User>とします。

// 非同期でAPIなどからユーザー情報を取得し、UserオブジェクトをPromiseで返します。
// getUserDataという関数を定義します。この関数は非同期関数として作成し、引数としてidを受け取ります。戻り値の型はPromise<{ id: number; email: string; }>とします。

// fetchUser関数を使用して指定されたidのユーザー情報を取得します。
// 取得したユーザー情報からidとemailのプロパティを抽出したオブジェクトをPromiseで返します。

interface User2 {
  id:string;
  createdAt:number;
}

type GetUserData<T> = () => Promise<T>;
type FetchUser<T> = (id:T) => Promise<T>; 

async function main() {
  const userData = await getUserData();
  const fetch = await fetchUser(userData.id);
  return fetch;
}


const getUserData:GetUserData<User2> = async () => {
  const form = new FormData();
  form.append('name', "morpheus");
  form.append('job','leader');

  const result = await fetch('https://reqres.in/api/users',{
    method:'post',
    headers : {
      'Accept': 'application/json',
    },
    body:form
  })

  return result.json();
}

const fetchUser:FetchUser<string> = async (id) => {
    return id;
}
 
// main().then(res => console.log(res))


type MyObject = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type PickProperties<T, K extends keyof T> = Pick<T,K>

type PickedObject = PickProperties<MyObject, "name" | "email">;
// 期待される型: { name: string; email: string; }


// ジェネリック型ExcludeProperties<T, K>を定義してください。この型は、オブジェクト型Tから指定されたプロパティKを除外した型を表現します。
// 具体的には、ExcludeProperties<T, K>は以下の条件を満たす必要があります:
// Tはオブジェクト型として定義されています。
// KはTのプロパティ名、またはTのプロパティ名の配列です。

type User3 = {
  id: number;
  name: string;
  age: number;
};

type ExcludeProperties<T,K extends keyof T> = Omit<T,K>

type ExcludedUser3 = ExcludeProperties<User3, 'age'>;
// 期待される型: { id: number; name: string; }

type ExcludedUser2 = ExcludeProperties<User3, 'name' | 'age'>;
// 期待される型: { id: number; }



// 与えられたオブジェクトから、特定のキーを除外し、残りのプロパティの値をnullableにする型OmitAndNullable<T, K>を定義してください。Tは入力オブジェクトの型を表し、Kは除外するキーのユニオン型です。

type User4 = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type PropertyOptional<T,K extends keyof T> = Partial< Pick<T,K> > & Omit<T,K>;
type ValueNull<T,K extends keyof T> = {
  [U in keyof T]:T[U] extends K ? T[U]|null : T[U];
}
type OmitAndNullable<T,K extends keyof T> = ValueNull<T,K>
type ModifiedUser = OmitAndNullable<PropertyOptional<User4,'age' | 'email'>, 'age' | 'email'>;

const obj:ModifiedUser = {
  id:4,
  name:'aa',
  age:null,
  email:null
}


/*
期待される型:
{
  id: number;
  name: string;
  age?: number | null;
  email?: string | null;
}
*/


// 与えられたオブジェクトのプロパティのうち、指定された型に一致するプロパティのみを抽出する型PickPropertiesOfTypeを定義してください。
// T：対象のオブジェクト型。
// U：抽出したいプロパティの型。

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type PickPropertiesOfType<T,U> = {
  [K in keyof T as T[K] extends U ? K : never]:T[K] 
}

type StringProperties = PickPropertiesOfType<User, string>;
// 期待される型: { name: string; email: string; }

type NumericProperties = PickPropertiesOfType<User, number>;
// 期待される型: { id: number; age: number; }


// 与えられたオブジェクトのプロパティ名をユニオン型として取得する型を定義してください。

type User2 = {
  id: number;
  name: string;
  age: number;
};

type ElementType<T> =　keyof T

type UserElement = ElementType<User2>;
// 期待される型: "id" | "name" | "age"



// 与えられたオブジェクトのプロパティの値を、別の型に変換するMapValues<T, U>という型を定義してください。

type User3 = {
  id: number;
  name: string;
  age: number;
};

type MapValues<T,U> = {
  [K in keyof T]: U
}

type Stringify<T> = MapValues<T, string>;

type StringifiedUser = Stringify<User3>;
/*
期待される型:
{
  id: string;
  name: string;
  age: string;
}
*/


// 与えられたオブジェクト型から、指定されたプロパティを除外する型ExcludeProperties<T, K>を定義してください。

type User4 = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type ExcludeProperties<T,U extends keyof T> = Omit<T,U>;

type ExcludedUser = ExcludeProperties<User4, 'age' | 'email'>;
/*
期待される型:
{
  id: number;
  name: string;
}
*/


// DeepPartial<T>は、入力のオブジェクト型Tの各プロパティを再帰的にオプショナルにする型です。つまり、Tの全てのプロパティを再帰的にundefinedもしくはそのプロパティの型のunion型にします。

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]|undefined;
}


type User5 = {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
  };
};

type Result = DeepPartial<User5>



// オブジェクト型 T のプロパティのうち、値の型が U に一致するプロパティのみを持つ型を作成します。

type User6 = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type FilterByValueType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]:T[K]
}

type FilterProperty = FilterByValueType<User6,number>



// 与えられたオブジェクト型 T のプロパティの値を、指定された型 U に変換するマップ型 MapPropertyValues<T, U> を実装してください。変換後の型は、元のオブジェクト型 T と同じプロパティを持ちますが、各プロパティの値は型 U に変換されます。

type User = {
  id: number;
  name: string;
  age: string;
};

type MapPropertyValues<T,U> = {
  [K in keyof T]:T[K] extends U ? T[K] : number;
}

type MappedUser = MapPropertyValues<User, number>;
// 期待される型: { id: number; name: number; age: number; }


// 与えられた型Tのプロパティを全てオプショナルにする型PartialProperties<T>を定義してください。ただし、Tはオブジェクト型とします。
type User2 = {
  id: number;
  name: string;
  age: number;
};

type PartialProperties<T> = Partial<T>

type PartialUser = PartialProperties<User>;
// 期待される型: { id?: number; name?: string; age?: number; }


// 型をマージして、新しい型UserAddressを作成する方法を示してください。UserAddressはUserとAddressのプロパティを持つ型となります。

type User3 = {
  id: number;
  name: string;
};

type Address = {
  city: string;
  country: string;
};

type UserAddress = User3 & Address;


// 以下のUser型から、ageプロパティを除外した新しい型を作成してください。
type User4 = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type Result = Omit<User4,'age'>;



// mergeObjects関数は、複数のオブジェクトを受け取り、それらをマージして新しいオブジェクトとして返す関数です。型アノテーションを追加して、適切な型情報を指定してください。

function mergeObjects<T extends object>(...objects:T[]): T {
  return Object.assign({}, ...objects);
}



// 以下のfilterByAge関数は、personsというPerson型の配列と、minAgeとmaxAgeという数値を受け取り、指定された年齢範囲に該当する人物をフィルタリングして新しい配列として返す関数です。型アノテーションを追加して、適切な型情報を指定してください。

function filterByAge<T extends {age:number}>(persons:T[], minAge:number, maxAge:number): T[] {
  return persons.filter(person => person.age >= minAge && person.age <= maxAge);
}









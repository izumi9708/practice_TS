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


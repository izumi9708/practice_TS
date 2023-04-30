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


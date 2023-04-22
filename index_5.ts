// 配列に対して、以下の操作を行う関数を実装してください。

// age の平均値を求める関数 averageAge
// gender ごとに年齢の平均値を求める関数 averageAgeByGender
// ただし、以下の点に注意してください。

// 配列の要素数が 0 の場合、どちらの関数でも null を返してください。
// // 平均値は小数点以下第一位まで求めてください。

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  gender: 'male' | 'female' | 'other';
};

type GenderArray = {
  female: User[],
  male : User[]
  other : User[]
}

const users: User[] = [
  { id: 1, name: 'Alice', age: 23, email: 'alice@example.com', gender: 'female' },
  { id: 2, name: 'Bob', age: 31, email: 'bob@example.com', gender: 'male' },
  { id: 3, name: 'Charlie', age: 19, email: 'charlie@example.com', gender: 'male' },
  { id: 4, name: 'Dave', age: 45, email: 'dave@example.com', gender: 'other' },
  { id: 5, name: 'Eve', age: 29, email: 'eve@example.com', gender: 'female' },
];

function averageAge(array:User[]):number {
  if(array.length == 0){
    return null
  } else {
    return array.map(val => val.age).reduce((a,b) => a + b) / array.length;
  }
}
console.log(averageAge(users))

function createGenderArray(array:User[]):GenderArray[] {
  const newObj:GenderArray = {female:[],male:[],other:[]}
  array.map(val => {
    const {gender} = val
    if(!newObj[gender]){
      newObj[gender] = [val];

    }else {
      newObj[gender].push(val)
    }
  }) 

  return [newObj];
}

function averageAgeByGender(array:GenderArray[]):{[key:string]:number}[]{
  const property = array.map(val => Object.keys(val))[0]

  const result = array.map(val => Object.keys(val).map(key => val[key]))[0]
  const result2 = result.map(val => val.map(key => key.age))
  const average =  result2.map(val => val.reduce((a:number,b:number) => a + b / val.length))

  return average.map((val,index) => ({[property[index]]:val}) )

}

const genderArray:GenderArray[] = createGenderArray(users);
const ageByGender = averageAgeByGender(genderArray);

for(let i of ageByGender){
  console.log(i)
}

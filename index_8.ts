// 指定された時間（秒）だけ待機する関数 wait を実装してください。wait は Promise オブジェクトを返し、指定された時間が経過した後に resolve します。

// 例えば、wait(5) を呼び出すと、5秒後に Promise が resolve されます。

const wait = async(num:number):Promise<void> => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve();
    },num * 1000)
  })
}

wait(5).then(() => {
  // console.log("5秒後に呼び出されました。");
})


// 関数 isPalindrome を実装してください。isPalindrome は文字列を受け取り、その文字列が回文（前から読んでも後ろから読んでも同じ結果になる）かどうかを判定します。

// 文字列は大文字と小文字を区別しません。つまり、大文字と小文字の違いは無視します。
// 文字列はアルファベットのみで構成されるものとします。数字や記号は含まれません。
// 空文字列も回文とみなします。

const isPalindrome = (str:string):boolean => {
  const palind = str.toLocaleLowerCase().split('').reverse().join('');
  
  return str === palind ? true : false
}

// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("Hello")); // false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("12321")); // true
// console.log(isPalindrome("race car")); // true
// console.log(isPalindrome("")); // true


// 関数 chunkArray を実装してください。chunkArray は与えられた配列を指定されたサイズごとに分割し、分割された配列を要素とする新しい配列を返します。

// 元の配列は変更せず、新しい配列を返します。
// 分割されるサイズは正の整数とします。
// 元の配列の最後の要素が分割サイズに満たない場合、最後の要素は分割された配列の一部となります。

const chunkArray = (array:number[],num:number) => {
  const newArray = [];
  const loopNum  = Math.ceil(array.length / num);

  let propsNum = num;
  let stateNum = 0;
  for( let i = 0; i < loopNum; i++ ){
    const sliceArray = array.slice(stateNum,stateNum + num);
    
    newArray.push(sliceArray);
    stateNum += propsNum;
    num = propsNum + num
    
  }
  return newArray
}


// console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
// console.log(chunkArray([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
// console.log(chunkArray([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
// console.log(chunkArray([1, 2, 3, 4, 5], 7)); // [[1, 2, 3, 4, 5]]



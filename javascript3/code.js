//javascriptのプログラム構造

//順次型
//記述順で処理する
/*例：

let a = 10;

     ↓　順番に処理していく

console.log(a);

*/

//選択型　（条件分岐）
//条件に基づいてプログラムを判断する
/*例：

let a = 0;

if(a === 0){
console.log("hello");
};

*/

//反復型　（繰り返し処理）
//プログラムの条件が満たしてる間にプログラムを繰り返して実行する
/*例：

for(let i = 1; i < 21; i++){
 console.log(i);
};

*/

//==============================================================//

//条件分岐

/*

if(条件式){
    //条件式に合う場合はこちらが実行されます
}else{
    //条件式に場合は合わない場合はこちらが実行されます
}

*/

let a = 1;

if(a === 0){
console.log("hello");
}else{
 console.log("goodbye")
}


/*複数の条件を取り扱いたいときに使います

if(条件式){
    //条件式に合う場合はこちらが実行されます
}else if(条件式)その２){
    //条件式その２に合う場合はこちらが実行されます
}else{
    //条件式に場合は合わない場合はこちらが実行されます
}

*/

let x = 3;

if(x === 0){
console.log("hello");
}else if (x === 1){
console.log("hello everyone!");
}else{
 console.log("goodbye")
};

score = 100;

if (score >= 90) {

    console.log("A");

}else if (score >= 70){

    console.log("B");

}else if (score >= 60){

    console.log("C");

}else{

    console.log("D");

};


//演算子

//算術演算子
//データを計算するために使う演算子

a = 10;

b = 20;

console.log(a + b);//30

//比較演算子
//データを比較するために使う演算子
x = 50;

y = 100;

console.log(x < y);//true

//論理演算子
//比較演算子とよく使われています。データを判断するために使う演算子

a = true;

b = false;

//それぞれのデータがtrueなら
console.log(a && b);//false


let age = 35;
let isStudent = true;
let isSenior = false;

let price = 10000;


const tax = 1.1;

if (isStudent && age <= 18 ) {

    console.log(price / 2 * tax);

}else if (isSenior && age >= 65){

    console.log(price * 0.4 * tax);

}else if (!isStudent){

    console.log("学生じゃない");

}else if (!isSenior){

    console.log("シニアじゃないです");

}else{
     console.log("それ以外");
}
//ルール①
function $(){
    console.log("hi");
};

$();

function user_name(){
    console.log("hi");
};

user_name();

//NG

function  関数(){
    console.log("hi");  
}

関数();

//NG
let  変数 = 1;

//NG
const  定数 = 3;


//=======================================================================//



//ルール②

///変数名・関数名・定数名の先頭に数字を使用しない

//NG (前書き)

// const 123name= "alessio";

// let 345name = "alessio;"

// function 678name(){
//  console.log("name")
// }

//OK　(後書き)

const name123 = "alessio";

let name345 = "alessio;";
 
function name678(){
 console.log("name") 
};


//=======================================================================//


//ルール③

//javascriptの記述

// キャメルケース　ー＞　関数名・メソッド名・変数　例：userName

let userName = "ゲスト";

// パスカルケース ー＞　変数・関数名 例：UserName

function UserName(){
    let userName = "ゲスト";
    console.log(userName);
};

// スネークケース  ー＞　定数　例：user_name

const user_name = "ゲスト";

// ケバブケース ー＞ｈｔｍｌのクラスによく使われます 例：user-name

 <div class="user-name"></div>


 //=======================================================================//


//ルール④

///変数名・関数名・定数名に予約語を使用しない

//　function  function(){
//　　console.log("hi");  
//　}

//　　function();


//　　let let = 1;

//　　const const = 2;

//
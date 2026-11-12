const nameInput = document.getElementById("input");
const btn = document.getElementById("button");
const res = document.getElementById("result");

const greeting = "こんにちは！";
let userName = "ゲスト";

res.textContent = greeting + userName + "さん";

btn.addEventListener("click", function(){
    userName = nameInput.value;

    res.textContent = greeting + userName + "さん";
});
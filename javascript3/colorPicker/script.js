const text = document.querySelector("#colorText");

//document.getElementById -> Id を取得するためのメソッドです（Id 専用）

//document.getElementsByClassName ->　class を取得するためのメソッドです（class専用 使用の頻度は低い）

//document.querySelector　-> Id  と　class を両方取得するためのメソッドです。（＃で指定するとidを取得する、. で指定するとclassを取得する）

const color = document.querySelector("#colorPicker");

const colorBg = () => {

    document.body.style.backgroundColor = color.value;

    if(color.value === "#ffffff"){
        text.textContent = `カラーコード：${color.value} (white)`
    }else if (color.value === "#000000"){
         text.textContent = `カラーコード：${color.value} (black)`
    } else{
         text.textContent = `カラーコード：${color.value} (その他)`
    }

}

color.addEventListener("input" ,colorBg);
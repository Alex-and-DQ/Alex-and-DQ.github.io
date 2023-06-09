let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/img1.jpg'){
        myImage.setAttribute('src', 'images/img2.jpg');
    } else{
        myImage.setAttribute('src', 'images/img1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '酷毙了，' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

const p = document.querySelector('p.slogan');
p.addEventListener('click', update);
function update(){
    p.textContent = prompt('输入想要显示的内容：');
}

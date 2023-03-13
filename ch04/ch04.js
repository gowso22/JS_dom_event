// html 요소에 class, style 제어

const box = document.getElementById('box');
const boxSt = box.style;

const color = document.getElementById('color');

color.onclick = function(e){
    const target = e.target;
    if(target.tagName !== 'LI') return;
        target.classList.toggle("txt-pink")  
};


// box.className = 'box bg-blue txt-pink';

// classList
// 해당 태그의 class 목록을 보여줌


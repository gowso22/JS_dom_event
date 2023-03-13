function sayHello(){
    alert('Hello')
}

const el = document.getElementById('btn');

// 괄호가 있으면 함수의 반환값이 발생하므로 괄호 제거
el.onclick = sayHello;

const el2 = document.getElementById('btn2')
// el2.addEventListener("click", sayHello);

// 가급적 addEventListener 사용권장
// addEventListener가 있어야 이벤트가 동작하는 경우가 있음

//dblclick : 더블클릭
el2.addEventListener("dblclick", ()=>{
    alert('hi');
});

// removeEventListener > 이미 할당된 핸들러를 삭제할 때 사용


// 키보드이벤트
const input = document.getElementById('txt');
input.addEventListener("keyup", event =>{
    console.log(event.key); // 어떤 키를 입력하였는지 console창에서 확인 할 수 있음(영문만)
})

//focus , blur
// foucs >> input에 커서가 뜨면 발생
// blur >> input에 focus를 잃으면 발생

input.addEventListener('focus', () =>{
    input.style.backgroundColor = "rgb(255,0,0,0.2)";
})
input.addEventListener('blur', () =>{
    input.style.backgroundColor = null;
})

   // Window resize 이벤트
   window.addEventListener("resize", () => {
    document.body.innerText = 
    `현재 창 크기는 ${window.innerWidth} * ${window.innerHeight} 입니다.`;
})
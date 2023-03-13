// 동작하는 것은 비슷하지만 
// 각 반환 값이 NodeList와 HTMLCollection으로 다름
// 둘 다 유사객체배열이면서 Iterable
const pList1 = document.querySelectorAll('p') //NodeList
const pList2 = document.getElementsByClassName('p')// HTMLCollection

// 차이점
// HTMLCollection : 노드의 변경사항이 실시간으로 반영됨
// NodeList : 한 번 저장된 값을 계속 사용, childNodes 같은 경우 HTMLCollection처럼 실시간 반영됨

const red = document.getElementById('red');
// red의 부모노드 접근
red.parentNode; // 부모인 노드 중 모든 노드 반환
red.parentElement; // 부모인 노드 중 요소 노드(예를 들면 html 태그) 반환

const ul = document.getElementById('color')
// ul의 자식노드 접근
ul.childNodes; // 자식 노드 전부 반환
ul.children; // 자식 노드 중 요소노드만 반환(li 태그들만 반환하는 것을 확인)

ul.firstChild; // ul의 1번째 자식노드
ul.lastChild; // ul의 마지막 자식노드
ul.firstElementChild; // ul의 1번째 자식요소노드(자식태그)
ul.lastElementChild; // ul의 마지막 자식요소노드(자식태그)

// 형제 노드 접근
const blue = document.getElementById('blue')

blue.previousSibling; // blue의 형제 노드 중 이전 노드요소
blue.nextSibling; // blue의 형제 노드 중 다음 노드요소

blue.previousElementSibling; // blue의 형제 노드 중 이전 태그
blue.nextElementSibling; // blue의 형제 노드 중 다음 태그
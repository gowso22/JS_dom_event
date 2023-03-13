// DOM >> Document Object Model 문서객체모델
// html 문서의 각 요소들을 트리형식으로 표현해줌

// 모든 html 태그는 객체
// 객체는 자바스크립트로 접근하고 제어할 수 있다.


// document.documentElement >> html문서의 Elements에 접근
// document.body>> body 태그에 접근
// document.body.style >> style객체에 접근

//해당 id명에 접근, id는 하나 밖에 없으므로 Element이다.
document.getElementById('아이디명')  

// 해당하는 태그에 접근, 해당하는 태그가 여러개가 있을 수 있으므로 Elements이다.
document.getElementsByTagName('태그명') 

// 해당하는 클래스명에 접근
document.getElementsByClassName('클래스명')


// querySelectorAll 사용하여 클래스에 접근
document.querySelectorAll('.클래스명')
// querySelectorAll 사용하여 아이디에 접근
document.querySelectorAll('#아이디명')
// 아이디는 하나밖에 존재하지 않으므로 querySelector로 선언
document.querySelector('#아이디명')

// html 페이지에 2번째로 선언된 h3태그 접근 
document.querySelector('h3:nth-of-type(2)')

// 짝수번째로 선언된 p태그를 접근에 pList에 할당
const pList = document.querySelectorAll('p:nth-of-type(2n)')

// pList는 NodeList로 확인됨
// NodeList는 배열은 아니고 Iterable Collection

// for문을 사용하여 index 번호를 사용 가능 하지만
// pust pop filter join은 사용하지 못함.




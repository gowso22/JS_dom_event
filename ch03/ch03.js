const blue = document.getElementById('blue')

blue.firstChild; // TEXT노드(Blue)
blue.firstElementChild // 자식 태그는 없으므로 null

const blueTextNode = blue.firstChild;

blueTextNode.nodeName // blue의 첫번째 자식 노드는 텍스트노드
blueTextNode.nodeType // 텍스트 노드는 노드타입 중 3번째에 해당
blueTextNode.nodeValue // 텍스트노드의 value는 'Blue' 이다. 텍스트노드가 아니면 nodevalue는 null을 반환함.

const ul = document.getElementById('color');
ul.nodeType; // Element_노드는 nodeType 1
ul.nodeName; // UL태그이므로 UL
ul.nodeValue; // 텍스트노드가 아니므로 null


const newLi =document.createElement('li'); // li태그 생성
// text노드 생성
const newText = document.createTextNode('Pink');
// newLi에 newText 넣기
newLi.appendChild(newText);
//ul에 newLi 추가
ul.appendChild(newLi);


// insertBefore 이용하여 원하는 위치에 li 추가
const newLi2 = document.createElement('li')
const newText2 = document.createTextNode('Black')
newLi2.appendChild(newText2);

// Red 앞에 newLi2 추가
// Red에 접근하도록 선언
const red = document.getElementById('red');

ul.insertBefore(newLi2, red); // red 앞에 newLi 추가라는 의미

// 기존에 존재하던 자식노드를 appendChild하면 맨 뒤에 추가
ul.appendChild(red);

// 노드 복제 cloneNode
const newBlack = newLi2.cloneNode(true);
ul.appendChild(newBlack);

// 삭제 removeChild

// red, newBlack 삭제
ul.removeChild(red);
ul.removeChild(newBlack);


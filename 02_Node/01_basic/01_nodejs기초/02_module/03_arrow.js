//화살표 함수

let getTriangles = (base, height) => (base * height) / 2;

console.log('삼각형의 면적 :' + getTriangles(5, 2));

//
const person = {
  name: 'bear',

  // 일반함수
  hello1: function () {
    console.log('일반함수 :', this);
  },

  //화살표 함수 (화살표함수는 객체 자신을 가리키지 않음)
  hello2: () => {
    console.log('화살표함수 : ', this);
  },
};

person.hello1();
person.hello2();

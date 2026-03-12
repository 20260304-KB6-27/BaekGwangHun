async function init() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('에러 발생: ', error);
  }
}

init();

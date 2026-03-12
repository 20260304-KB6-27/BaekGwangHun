//Promise 객체로 만들기
//Promise
//비동기 처리 함수(resolve, reject)를 제공해준다
//비동기 함수를 실행시 성공, 실패시 처리가 용이하다.

// Promise의 상태
// pending: 대기상태
// fulfield : 작업이 성공적으로 완료된 상태
// rejected 작업이 실패한 상태

// 로그인 API (가정)
// 로그인 API
function login(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        reject('로그인 실패 : userId 없음');
        return;
      }

      console.log('로그인 성공');
      resolve({ userId: userId });
    }, 1000);
  });
}

// 사용자 정보 조회 API
function getUserInfo(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('사용자 정보 조회 완료');
      resolve({ userId: user.userId, name: 'kim' });
    }, 1000);
  });
}

// 주문 조회 API
function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('주문 목록 조회 완료');
      resolve([{ orderId: 1 }, { orderId: 2 }]);
    }, 1000);
  });
}

// 배송 조회 API
function getDelivery(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('배송 상태 조회 완료');
      resolve({ orderId: order.orderId, status: '배송중' });
    }, 1000);
  });
}

// async await

async function processOrder() {
  try {
    // await : Promise가 종료될 때까지 기다린 뒤 결과를 꺼내온다.
    // reject가 발생한 경우 error를 발생시킴 -> catch
    const user = await login('user1');
    console.log(user);

    const userInfo = await getUserInfo(user);
    console.log(userInfo);

    const orders = await getOrders(userInfo);
    console.log(orders);

    const delivery = await login(orders[0]);
    console.log('최종 배송 상태 : ', delivery);
  } catch (error) {
    console.error('에러 발생 : ', error);
  }
}

processOrder();

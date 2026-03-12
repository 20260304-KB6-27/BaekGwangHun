function orderPizza() {
  return new Promise((resolve) => {
    resolve('피자를 주문했습니다.');
  }, 1000);
}

orderPizza().then((message) => {
  console.log(message);
});

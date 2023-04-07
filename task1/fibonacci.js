function fibonacci() {
  let a = 0;
  let b = 1;
  return function () {
    let count = a;
    a = b;
    b += count;
    return count;
  };
}
let fib = fibonacci;
for (let i = 0; i < 10; i++) {
  console.log(fib());
}

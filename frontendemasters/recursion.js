// factorial
const factorial = n => {
  if (n <= 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
};

console.log("factorial");
console.log(factorial(5));

// fibonacci
const fibonacci = n => {
  if (n <= 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("Fibo");
console.log(fibonacci(4));

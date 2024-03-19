function fibonacci(num) {function fibonacci(num) {
  // Handle base cases (0 and 1)
  if (num <= 1) {
    return num;
  }

  // Initialize variables for the two preceding numbers
  let a = 0;
  let b = 1;
  let current;

  // Loop for n-2 times (since the first two numbers are already defined)
  for (let i = 2; i <= num; i++) {
    current = a + b;
    a = b;
    b = current;
  }

  // Return the nth Fibonacci number
  return current;
}

// Test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3

}

module.exports = fibonacci;

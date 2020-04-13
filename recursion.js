/* Basic JavaScript: Replace Loops using Recursion
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
 */

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

/* However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop. */

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
}

/* The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing. 

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
*/

function sum(arr, n) {
    if(n === 0){
      return 0;
    }else{
      return sum (arr, n - 1) + arr[n - 1];
    }
}

/*Contador regressivo em recursão: */

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n); // Trocando pelo método push se obtém um contador crescente.
    return arr;
  }
}

/* Retorna um range de números: */

function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){ //if (endNum - startNum === 0)
    return [startNum];
  }else{
    var range = rangeOfNumbers(startNum , endNum -1);
    range.push(endNum);
    return range;
  }
};

/* Alguns links, lembrar que sempre jogar learn recursion, ou what is recursion no google duckgo etc sempre vai retornar algo bom
https://medium.com/@daniel.oliver.king/getting-started-with-recursion-f89f57c5b60e
https://www.quora.com/What-is-the-best-way-to-master-recursion
https://www.youtube.com/watch?v=AfBqVVKg4GE
https://www.youtube.com/watch?v=QqoEmoCsmUg
https://www.youtube.com/watch?v=h76YXSO0GgU*/

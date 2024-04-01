 // function to filter prime numbers 
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
 
  function filterPrimes(inputArray) {
    return inputArray.filter(num => isPrime(num));
  }
  
  // usage of the function
  var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var primeNumbers = filterPrimes(inputArray);
  console.log(primeNumbers);
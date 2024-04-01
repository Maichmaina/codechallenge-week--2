// function to generate arrays
function generateArray(start, end) {
    var array = [];
    if (start <= end) {
      for (var i = start; i <= end; i++) {
        array.push(i);
      }
    } else {
      for (var i = start; i >= end; i--) {
        array.push(i);
      }
    }
    return array;
  }
  
  // Example of the usage of the function
  console.log(generateArray(4, 7)); 
  console.log(generateArray(-4, 7)); 
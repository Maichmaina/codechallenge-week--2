//function to change case from uppercase to lowercase and vice versa
function swapCase(inputString) {
    return inputString.replace(/([a-zA-Z])/g, function (match, p1) {
      if (p1 === p1.toLowerCase()) {
        return p1.toUpperCase();
      } else {
        return p1.toLowerCase();
      }
    });
  }
  
  // Example usage of the function
  var input = 'The Quick Brown Fox';
  var output = swapCase(input);
  console.log(output);

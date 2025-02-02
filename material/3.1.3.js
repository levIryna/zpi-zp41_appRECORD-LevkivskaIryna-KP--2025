function filterArray(numbers, value) {
    const filteredNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > value) {
        filteredNumbers.push(numbers[i]);
      }
    }
  
    return filteredNumbers;
  }
  
  console.log(filterArray([1, 2, 3, 4, 5, 6], 3)); 
  console.log(filterArray([10, 15, 20, 25, 30], 18)); 
  
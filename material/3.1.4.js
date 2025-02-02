function createArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 100)); 
    }
    return array;
  }
  
  function findMaxMin(array) {
    let maxEven = -Infinity;
    let minEven = Infinity;
    let maxOdd = -Infinity;
    let minOdd = Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) { 
        if (array[i] > maxEven) maxEven = array[i];
        if (array[i] < minEven) minEven = array[i];
      } else { 
        if (array[i] > maxOdd) maxOdd = array[i];
        if (array[i] < minOdd) minOdd = array[i];
      }
    }
  
    return { maxEven, minEven, maxOdd, minOdd };
  }
  
  function selectionSortDescending(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let maxIdx = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[maxIdx]) {
          maxIdx = j;
        }
      }
      if (maxIdx !== i) {
        [array[i], array[maxIdx]] = [array[maxIdx], array[i]];
      }
    }
    return array;
  }
  
  const length = 10; 
  const array = createArray(length);
  console.log("Вхідний масив:", array);
  
  const sortedArray = selectionSortDescending([...array]);
  console.log("Вихідний масив (у порядку зменшення):", sortedArray);
  
  const { maxEven, minEven, maxOdd, minOdd } = findMaxMin(array);
  console.log("Максимальне значення серед елементів із парними індексами:", maxEven);
  console.log("Мінімальне значення серед елементів із парними індексами:", minEven);
  console.log("Максимальне значення серед елементів із непарними індексами:", maxOdd);
  console.log("Мінімальне значення серед елементів із непарними індексами:", minOdd);
  
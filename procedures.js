//Problem 1:
function elementSum(set1, set2) {
  let sum = 0;

  function elementSumHelper(setOfConsideration, setOfSearch) {
    for (i = 0; i < setOfConsideration.length; i++) {
      let found = false;

      for (j = 0; j < setOfSearch.length; j++) {
        if (setOfSearch[j] === setOfConsideration[i]) {
          found = true;
          break;
        }
      }

      if (!found) sum += setOfConsideration[i];
    }
  }

  elementSumHelper(set1, set2);
  elementSumHelper(set2, set1);

  return sum;
}

console.log(elementSum([3, 1, 7, 9], [2, 4, 1, 9, 3]));

// Problem 2:

function dot_product(arrayPair) {
  let scalarProduct;
  let orthogonalVectorArray = [];
  for (let i = 0; i < arrayPair.length; i++) {
    scalarProduct = arrayPair[i][0] * arrayPair[i][1];
    if (scalarProduct == 0) {
      orthogonalVectorArray.push(arrayPair[i]);
    }
  }
  console.log(orthogonalVectorArray);
}

dot_product([
  [1, 2],
  [3, 0],
  [0, 5],
]);

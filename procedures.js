//Problem 1:
function elemSum(set1, set2) {
  //DECLARE VARIABLES
  let sum = 0;
  let arrayValue;
  //BEGIN
  //Create a loop through the parameter array
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      //create conditions to determine if set1 elements are in set2
      if (set1[i] !== set2[j]) {
        arrayValue = set1[i];
      } else if (set1[i] == set2[j]) {
        arrayValue = 0;
        break;
      }
    }
    sum += arrayValue; //add the arrayValue to sum
  }

  for (let j = 0; j < set2.length; j++) {
    for (let i = 0; i < set1.length; i++) {
      //create conditions to determine if set2 elements are in set1
      if (set1[i] !== set2[j]) {
        arrayValue = set2[j];
      }
      if (set1[i] == set2[j]) {
        arrayValue = 0;
        break;
      }
    }
    sum += arrayValue; //add the arrayValue to sum
  }
  console.log(sum);
}
elemSum([3, 1, 7, 9], [2, 4, 1, 9, 3]);

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

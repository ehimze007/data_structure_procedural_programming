//Two algorithms / functions

//1.A function to calculate the dot product of two arrays (vectors)
//2. A function to determine if the dot product of two arrays is zero (orthogonal)

function dotProduct(array1, array2) {
  if (array1.length !== array2.length) return;

  const product = [];
  for (const index in array1) {
    product.push(array1[index] * array2[index]);
  }
  return product.reduce((sum, element) => (sum += element), 0);
}
console.log(dotProduct([1, 2, 3], [6, 8, 4]));

function orthogonal(array1, array2) {
  return dotProduct(array1, array2) === 0;
}
console.log(orthogonal([1, 2, 3], [6, 8, 4]));

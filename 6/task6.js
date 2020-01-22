let matrix = [
  ["F", "A", "C", "E"],
  ["O", "B", "O", "P"],
  ["N", "A", "R", "B"],
  ["E", "A", "N", "D"]
];
function matrixChek(matrix) {
  let matrixWordHorizontal = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      matrixWordHorizontal += matrix[i][k];
    }
    matrixWordHorizontal += " ";
  }
  console.log(matrixWordHorizontal.includes("FACE"));
  console.log(matrixWordHorizontal.includes('AND'));
}
matrixChek(matrix, "FACE");
matrixChek(matrix, "AND");

// index.js
const generateTable =  require('./generateTable');
const mul_Table = generateTable.mul_Table;

let args = process.argv.slice(2);
let rowsInput = args[0];
let colsInput = args[1];

let rows = Number(rowsInput);
let cols = Number(colsInput);

if (!isNaN(rows) && !isNaN(cols)) {
  let tableStr = mul_Table(rows, cols);
  console.log(tableStr);
} else {
  console.log("Error: Invalid Input");
}
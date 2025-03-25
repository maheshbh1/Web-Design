function mul_Table(rows, cols) {
    let tableStr = "";
  
    for (let rowNum of Array(rows).keys()) {
      for (let colNum of Array(cols).keys()) {
        tableStr += `${rowNum + 1} * ${colNum + 1} `; // Add space after values
      }
  
      tableStr += "\n";
    }
  
    return tableStr;
}
module.exports = { mul_Table };


// Self invoking function
const cellsArray = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6'];

function selectRandomCells(){
  const index = Math.floor(Math.random()*cellsArray.length);
  const randomCell = cellsArray[index];
  $('#'+ randomCell).addClass('yellow');
  cellsArray.splice(index, 1);
  console.log(cellsArray);
}

$(function() {
  // Run the computer generating logic only two times
  for (let i = 1; i < 2; i++) {
    // This function will run 2 times
    // It will pick random cell and change its background color to yellow
    selectRandomCells();
    // First time i = 1, (1 * 1000) which means run first colour change on 1 second
    // Second time i = 2 (2 * 2000) which means run second colour change on 2nd second

    setTimeout(selectRandomCells, i * 1000);

  }

});

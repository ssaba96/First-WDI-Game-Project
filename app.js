// Self invoking function
const cellsArray = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6'];

function selectRandomCell(){
  const index = Math.floor(Math.random()*cellsArray.length);
  const randomCell = cellsArray[index];
  $('#'+ randomCell).addClass('yellow');
  cellsArray.splice(index, 1);
  console.log(cellsArray);
}

$(function() {
  // Run the computer generating logic only two times
  document.getElementById('start-button').onclick = function() {
    for (let i = 1; i < 7; i++) {
      setTimeout(selectRandomCell, i * 1000);
    }
  };
});

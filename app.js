// Self invoking function
$(function() {

  const cellsArray = ["cell-1", "cell-2", "cell-3", "cell-4", "cell-5", "cell-6"];
  let randomCell = cellsArray[Math.floor(Math.random()*cellsArray.length)];

  $('#'+ randomCell).css('background-color', 'yellow');

});

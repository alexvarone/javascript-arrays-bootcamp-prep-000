var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyStr = "foo";

function addElementToBeginningOfArray(chocolateBars, candyStr){
  return [candyStr,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyStr) {
  chocolateBars.unshift(candyStr);
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
  

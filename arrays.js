var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo";

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyStr,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
  

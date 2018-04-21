var chocolateBars =["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray (Array,element) {
return [element,...Array];}
function destructivelyAddElementToBeginningOfArray (Array,element){
  Array.unshift(element);
  return Array;}
  function addElementToEndOfArray(Array,element) {
    return [...Array,element];}
 function destructivelyAddElementToEndOfArray (Array,element) {
   Array.push(element);
   return Array;
 } 
 function accessElementInArray (Array,index) {
   return Array[index];
 }
function destructivelyRemoveElementFromBeginningOfArray(Array) {
  Array.shift();
  return Array;
}
function removeElementFromBeginningOfArray(Array) {
 return Array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(Array){
  Array.pop();
  return Array;
}
  
<<<<<<< HEAD
function  removeElementFromEndOfArray(Array) {
return  Array.slice(0, Array.length - 1);}
  

=======
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);}
>>>>>>> 74872051b02c7763c52ef3772c4f5ef30db52ea1

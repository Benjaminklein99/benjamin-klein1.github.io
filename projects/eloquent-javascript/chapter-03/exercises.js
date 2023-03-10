////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  if (x < y){
    return x;
  } else {
    return y;
  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
  if (n === 1){
    return false;
  } else if (n === 0){
    return true;
  }


  if (n > 0){
    return isEven(n -= 2);
  } else {
    return isEven(n += 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char, count = 0) {
  if (str.length === 0){
    return count;
  }

  if (str[0].toUpperCase() === char.toUpperCase()){
    count++;
  }
  return countChars(str.slice(1), char, count);

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str, count = 0) {
  if (str.length === 0){
    return count;
  }


  if (str[0].toUpperCase() === 'B'){
    count++;
  }
  return countBs(str.slice(1), count);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
